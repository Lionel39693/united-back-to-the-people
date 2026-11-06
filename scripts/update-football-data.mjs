import { mkdir, writeFile } from "node:fs/promises";

const token = process.env.FOOTBALL_DATA_TOKEN;
if (!token) throw new Error("Missing FOOTBALL_DATA_TOKEN secret.");

const season = "2026";
const endpoint = new URL("https://api.football-data.org/v4/teams/66/matches");
endpoint.searchParams.set("competitions", "PL");
endpoint.searchParams.set("season", season);

const response = await fetch(endpoint, {
  headers: { "X-Auth-Token": token, "User-Agent": "UnitedFootballDesk/1.0" }
});
if (!response.ok) {
  const detail = await response.text();
  throw new Error(`Football data request failed (${response.status}): ${detail.slice(0, 400)}`);
}

const payload = await response.json();
const matches = (payload.matches || []).map((match) => ({
  id: match.id,
  competition: match.competition?.name || "Premier League",
  competitionCode: match.competition?.code || "PL",
  utcDate: match.utcDate,
  status: match.status,
  matchday: match.matchday ?? null,
  homeTeam: match.homeTeam?.name || "Home team",
  awayTeam: match.awayTeam?.name || "Away team",
  homeCrest: match.homeTeam?.crest || null,
  awayCrest: match.awayTeam?.crest || null,
  homeScore: match.score?.fullTime?.home ?? null,
  awayScore: match.score?.fullTime?.away ?? null,
  venue: match.venue || null
})).sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate));

await mkdir("data", { recursive: true });
await writeFile("data/football.json", JSON.stringify({
  competition: "Premier League",
  season: "2026/27",
  team: "Manchester United",
  teamId: 66,
  updatedAt: new Date().toISOString(),
  source: "football-data.org",
  matches
}, null, 2) + "\n");
console.log(`Saved ${matches.length} Manchester United Premier League matches.`);
