# Pre-launch review — UNITED BACK TO THE PEOPLE

This checklist records the remaining checks for the GitHub Pages site. The live site can be visited, but a successful deployment does not mean every advertised feature is complete.

## Visitor experience
- [ ] Open the site on a phone and a desktop.
- [ ] Check the header, navigation, page sections, footer, and all in-page links.
- [ ] Check that both destinations are clear: The United Football Desk and the supporters' movement.
- [ ] Check text contrast, readable font sizes, keyboard navigation, and visible focus states.
- [ ] Check that images load, have useful alternative text, and are properly licensed.

## Accuracy and editorial standards
- [ ] Verify historical dates, match facts, statistics, ownership claims, and financial figures against reliable sources.
- [ ] Clearly distinguish confirmed news, reported information, rumours, and opinion.
- [ ] Add publication dates and source links to factual updates.
- [ ] Correct or remove any claim that cannot be verified.
- [ ] Do not copy articles, photographs, graphics, or video without permission.

## Live football data
- [ ] Add the football-data.org token as the GitHub Actions secret named FOOTBALL_DATA_TOKEN (adult-supervised account setup; never put the token in site code).
- [ ] Run the football-data update workflow manually.
- [ ] Confirm that data/football.json contains current sourced data and an update timestamp.
- [ ] Check that fixtures, results, and the league table render correctly.
- [ ] If the feed is unavailable, keep the honest fallback message; never invent scores or standings.

## Safety, privacy, and governance
- [ ] Keep personal phone numbers, private email addresses, home/school details, and personal accounts off the public site.
- [ ] Keep public comments, member sign-ups, fundraising, elections, petitions, and contact submissions disabled until the adult moderator has reviewed and approved the platform, privacy settings, and moderation workflow.
- [ ] Keep the two poll programmes separate: football questions and ownership/campaign questions.
- [ ] Create the Cloudflare D1 database and run `schema.sql`.
- [ ] Add the Pages D1 binding named `DB` and Production secret `VOTE_HASH_SECRET`.
- [ ] Deploy the Pages Functions and test `/api/results` and `/api/vote` from a logged-out browser.
- [ ] Test duplicate rejection and the shared-network limitation; do not call this identity verification or one-person-one-vote.
- [ ] Have a trusted adult review the privacy notice, data retention and moderation arrangements before enabling public voting.
- [ ] Do not describe an open online poll as representative of all Manchester United supporters.
- [ ] Do not collect phone numbers, school details, home addresses or unnecessary identifying information.
- [ ] Make clear that this is an independent supporters' initiative and is not affiliated with or endorsed by Manchester United.
- [ ] Keep campaign activity peaceful, lawful, evidence-based, and respectful.
- [ ] Have a trusted adult review any public-facing campaign activity and any legal, financial, or data-protection commitments.

## Known incomplete features (do not advertise as live)
- Men's archive: 90 original profiles; the 989-player MUFCINFO A–Z register is an external reference and has not been imported into this site's own database.
- Voting and ideas box: question sets are prepared, but no public voting/submission service is connected.
- Football feed: code is prepared, but it is inactive until the API secret is configured and a successful run is verified.
- News, transfers, women's fixtures and academy updates: require ongoing sourced editorial work; they are not automated.

## Voting implementation notes

The permanent ownership poll stores only a salted hash derived from Cloudflare's network address for duplicate control, never the raw IP. This is pseudonymous network-level control, not identity verification. People sharing a home, school, workplace or carrier network may share one response. Do not publish results as a representative survey of all supporters.

See `CLOUDFLARE-VOTING-SETUP.md` for the exact activation steps.

## Final release decision
- [ ] Preview reviewed and corrections completed.
- [ ] Data and source checks passed.
- [ ] Privacy and moderation checks passed.
- [ ] Trusted adult review completed for public campaign activity.
- [ ] Only then consider merging to the production branch.

**Important:** A successful preview is not proof that every fact is correct or that the live data feed is configured. Production launch requires a separate deliberate decision.
