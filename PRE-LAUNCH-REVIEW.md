# Pre-launch review — UNITED BACK TO THE PEOPLE

This checklist is for reviewing the website before any public launch. The review branch is intended to generate a Netlify Deploy Preview; it does not publish changes to the production branch.

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
- [ ] Add the football-data.org token as the GitHub Actions secret named FOOTBALL_DATA_TOKEN.
- [ ] Run the football-data update workflow manually.
- [ ] Confirm that data/football.json contains current sourced data and an update timestamp.
- [ ] Check that fixtures, results, and the league table render correctly.
- [ ] If the feed is unavailable, keep the honest fallback message; never invent scores or standings.

## Safety, privacy, and governance
- [ ] Keep personal phone numbers, private email addresses, home/school details, and personal accounts off the public site.
- [ ] Keep public comments, member sign-ups, fundraising, elections, petitions, and contact submissions disabled until safe moderation and trusted adult oversight are in place.
- [ ] Make clear that this is an independent supporters' initiative and is not affiliated with or endorsed by Manchester United.
- [ ] Keep campaign activity peaceful, lawful, evidence-based, and respectful.
- [ ] Have a trusted adult review any public-facing campaign activity and any legal, financial, or data-protection commitments.

## Final release decision
- [ ] Preview reviewed and corrections completed.
- [ ] Data and source checks passed.
- [ ] Privacy and moderation checks passed.
- [ ] Trusted adult review completed for public campaign activity.
- [ ] Only then consider merging to the production branch.

**Important:** A successful preview is not proof that every fact is correct or that the live data feed is configured. Production launch requires a separate deliberate decision.
