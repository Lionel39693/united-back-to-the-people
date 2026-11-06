const POLL_ID = "glazer-ownership-2026";
export async function onRequestGet({ env }) {
  if (!env.DB) return new Response(JSON.stringify({ error: "Results are not configured yet." }), { status: 503, headers: { "content-type": "application/json", "cache-control": "no-store" } });
  const rows = await env.DB.prepare("SELECT option_id, COUNT(*) AS votes FROM poll_votes WHERE poll_id = ? GROUP BY option_id").bind(POLL_ID).all();
  const counts = { remain: 0, change: 0, undecided: 0 };
  for (const row of rows.results || []) if (Object.hasOwn(counts, row.option_id)) counts[row.option_id] = row.votes;
  const total = Object.values(counts).reduce((a,b) => a+b, 0);
  return new Response(JSON.stringify({ pollId: POLL_ID, total, counts, updatedAt: new Date().toISOString(), method: "One response per network address, using a salted hash; shared networks may share one response." }), {
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", "x-content-type-options": "nosniff" }
  });
}
