# UNITED BACK TO THE PEOPLE

An independent international movement uniting Manchester United supporters to demand meaningful change, transparent leadership, financial accountability, responsible ownership and stronger fan representation.

Our mission is to restore supporters' voices and put the people at the heart of our club's future.

## Our identity

**Our club. Our history. Our voice.**

## Campaign slogan

# UNITED AGAINST THE MONEY SUCKERS

This is a campaign slogan expressing supporters' frustration with the commercialisation of football and concerns about financial priorities, ownership and accountability. Our campaign focuses on documented decisions, transparent evidence and constructive supporter action—not harassment or personal abuse.

## What we stand for

- Meaningful supporter representation.
- Transparency and accountability in club leadership.
- Responsible financial stewardship.
- Respect for Manchester United's history and heritage.
- An informed, inclusive international supporters' movement.

## Automated Football Desk

The Match Centre can publish Manchester United Premier League fixtures, results and the Premier League table from **football-data.org**.

### One-time activation

1. Create an account and obtain an API token from [football-data.org](https://www.football-data.org/).
2. Open this repository on GitHub.
3. Go to **Settings → Secrets and variables → Actions**.
4. Under **Repository secrets**, choose **New repository secret**.
5. Set the secret name to exactly `FOOTBALL_DATA_TOKEN`.
6. Paste the API token into the secret value and save. Never put the token in a website file, commit, issue, or public message.
7. Open the **Actions** tab and select **Update United football data**.
8. Run the workflow once using **Run workflow**. Check the run completes successfully and that `data/football.json` is updated.

The workflow then runs every six hours and commits refreshed data only when it changes. It uses the official v4 endpoints for Manchester United's Premier League matches and the Premier League standings. The site reads the public JSON file; the API token remains inside GitHub Actions.

### Hosting

The repository is configured for a static-site workflow. The live static site is published with GitHub Pages from the `main` branch and repository root. The expected project URL is `https://lionel39693.github.io/united-back-to-the-people/`. Check **Settings → Pages** to confirm the publishing source is `main` and `/(root)`. New commits to `main` trigger a Pages deployment.

### Scope and editorial standards

- The automatic feed currently covers the **men's Premier League fixtures/results and league table only**.
- It does not claim to provide live minute-by-minute commentary.
- Women's team, academy, cup competitions, player statistics and transfer reporting need their own verified data sources and coverage permissions before being labelled automatic.
- News articles, tactical analysis and opinion must be researched, attributed and reviewed by an editor. The site must never invent scores, sources, quotes, injuries or transfer claims.
- If the feed is unavailable, the site displays a setup/unavailable message rather than made-up data.

## Current completion boundaries

- The men's archive contains 90 original profiles. The separate MUFCINFO A–Z reference lists 989 players and remains an external source; its full list has not been imported into this project's own archive.
- The supporter poll questions are prepared in two separate groups (football and ownership/campaign). Public voting and the ideas box are not live because the secure service, privacy controls, duplicate-response controls and moderation workflow still need configuration and testing.
- The football-data.org feed is code-ready but not active until the repository secret is configured and the update workflow succeeds.
- News, transfers, women's fixtures, academy data and live match coverage are editorial/data workflows, not automatically populated features.

These are explicit launch limitations, not completed features.

## The Glazer ownership chapter

The website's **The Glazer era** section documents the 2003–2026 ownership story, including the 2005 leveraged buyout, debt and financing costs, supporter protests, share sales, the post-Ferguson period, the 2024 INEOS minority investment, current liabilities, infrastructure questions and Avram Glazer's reported September 2026 remarks.

The chapter distinguishes documented financial facts from supporter criticism and includes context on commercial growth and trophies during the same period. Sources are linked in the website section.
