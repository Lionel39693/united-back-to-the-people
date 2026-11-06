const POLL_ID = "glazer-ownership-2026";
const OPTIONS = new Set(["remain", "change", "undecided"]);
const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", "x-content-type-options": "nosniff" }
});
export async function onRequestPost({ request, env }) {
  if (!env.DB || !env.VOTE_HASH_SECRET) return json({ error: "Voting is not configured yet." }, 503);
  const origin = request.headers.get("Origin");
  const host = request.headers.get("Host");
  if (!origin || new URL(origin).host !== host) return json({ error: "Request origin could not be verified." }, 403);
  let body;
  try { body = await request.json(); } catch { return json({ error: "Invalid request." }, 400); }
  if (!body || body.pollId !== POLL_ID || !OPTIONS.has(body.optionId)) return json({ error: "Choose one of the listed answers." }, 400);
  const ip = request.headers.get("CF-Connecting-IP");
  if (!ip) return json({ error: "Could not apply the duplicate-response check." }, 400);
  const material = new TextEncoder().encode(env.VOTE_HASH_SECRET + ":" + ip);
  const digest = await crypto.subtle.digest("SHA-256", material);
  const voterHash = [...new Uint8Array(digest)].map(x => x.toString(16).padStart(2, "0")).join("");
  try {
    await env.DB.prepare("INSERT INTO poll_votes (poll_id, option_id, voter_hash) VALUES (?, ?, ?)")
      .bind(POLL_ID, body.optionId, voterHash).run();
    return json({ ok: true, message: "Your response has been recorded." }, 201);
  } catch (error) {
    if (String(error).includes("UNIQUE")) return json({ error: "A response from this network has already been recorded for this poll." }, 409);
    return json({ error: "The vote could not be saved. Please try again later." }, 500);
  }
}
