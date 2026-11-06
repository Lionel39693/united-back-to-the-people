# Supporter voting launch pack

This document is the build specification for the public consultation hub at `polls.html`.

## Forms to create

Create three separate Google Forms under the supervising adult's account. Use the **published responder/embed URL**, never an editor URL. Do not put account credentials or private contact details into the website or this repository.

### Form 1 — The Footballing Side

**Description:** An informal supporter opinion poll about Manchester United's football teams and history. It is not an official club vote and does not represent the entire global fanbase.

Create these as required multiple-choice questions, with an optional "Other" choice where appropriate:

1. Who is Manchester United's greatest captain?
   - Sir Bobby Charlton
   - Bryan Robson
   - Eric Cantona
   - Roy Keane
   - Gary Neville
   - Nemanja Vidić
   - Other / write-in

2. Which centre-back partnership was strongest?
   - Steve Bruce & Gary Pallister
   - Jaap Stam & Ronny Johnsen
   - Rio Ferdinand & Nemanja Vidić
   - Other / write-in

3. Who is the greatest player in the club's history?
   - Include a broad, balanced list of major men's and women's players, plus "Other / write-in".
   - If the poll is intended to compare all players, state clearly that the list is illustrative and allow write-ins.

4. Which manager had the greatest United legacy?
   - Sir Matt Busby
   - Sir Alex Ferguson
   - Other / write-in

5. What is the club's greatest moment?
   - 1968 European Cup
   - 1999 Treble
   - 2008 Champions League
   - Munich team's legacy and rebuilding
   - Other / write-in

6. What should the men's and women's teams prioritise?
   - Use separate questions for the men's and women's teams, with the same neutral options: squad depth, academy pathway, coaching/tactical development, facilities, or other.

### Form 2 — UNITED BACK TO THE PEOPLE

**Description:** A non-binding consultation about ownership, supporter representation, transparency and accountability. It records respondents' views and does not authorise anyone to speak for all supporters.

1. What long-term ownership model should Manchester United work towards?
   - Majority supporter ownership
   - Supporter trust with meaningful shareholding and governance rights
   - A mixed model with substantial supporter representation
   - Another model / unsure

2. What formal role should supporters have in club governance?
   - Elected supporter representatives
   - A supporter trust with defined consultation rights
   - Board-level representation
   - Regular binding or advisory consultations
   - Other / unsure

3. Which accountability issue should receive the most attention?
   - Published financial reporting
   - Debt and financing transparency
   - Stadium and infrastructure commitments
   - Football leadership accountability
   - Supporter representation and consultation
   - Other

4. What financial information should the club explain more clearly?
   - Debt and interest costs
   - Shareholding and ownership changes
   - Investment commitments and delivery
   - Transfer spending and amortisation
   - Stadium/infrastructure funding
   - Other

5. How should supporter representatives be selected and held accountable?
   - Open election by eligible supporters
   - Transparent nomination and election process
   - Fixed terms and published reports
   - Recall or replacement process
   - Other / unsure

### Form 3 — Supporter ideas box

Use a short paragraph response with a sensible character limit. Ask for:
- The idea or question.
- Why it would help supporters or the club.
- Optional public source link.

Do not ask for name, phone number, email address, school, home address, age, social-media handle or other identifying details. Add a warning not to include personal data, allegations about private individuals, threats or abusive content. The adult moderator should review every response before publication.

## Privacy and response settings

Choose and document the response model before launch:

- If the form is open to anyone without sign-in, explain that duplicate responses cannot reliably be prevented.
- If "Limit to 1 response" is enabled, respondents may need to sign in to Google. Do not describe this as fully anonymous without checking the exact form settings and response data.
- Turn off email collection unless there is a clear, approved reason to collect it.
- Do not publish raw response sheets or respondent-level data.
- Review the form's sharing settings from a logged-out/incognito browser before launch.
- Set an opening and closing date and keep the same dates on the website.
- Test each form on desktop and mobile, including a test submission and the response spreadsheet.

## Connect the forms to the site

1. In Google Forms, use **Send → Embed HTML**.
2. Copy the URL from the iframe's `src` attribute. It should be a Google Forms `viewform` URL.
3. In `polls-config.js`, set:
   - `footballEmbedUrl`
   - `movementEmbedUrl`
   - `ideasEmbedUrl`
4. Commit the file and publish through GitHub Pages.
5. Verify that all three forms load and accept test submissions before announcing the vote.

The page deliberately refuses non-Google embed hosts. Do not paste editor links or account credentials.

## Results publication template

For every poll, publish:
- Exact question and available choices.
- Opening and closing date/time (EAT).
- Total response count.
- Collection method and any sign-in/duplicate-response settings.
- Results as counts and percentages, with rounding explained.
- Limitations: self-selected online respondents are not a representative sample of all United supporters.

Never invent, estimate or manually alter vote totals.


# Weekly football debates and Glazer supporter mandate

## Weekly football round — three debate questions

Run these as three required multiple-choice questions in one public Google Form:

1. **Should United prioritise academy graduates over expensive signings, even if it costs results in the short term?**
   - Yes — academy pathway must come first
   - Balance academy and recruitment equally
   - No — select the strongest team regardless of age or origin
   - It depends on the player and situation

2. **What is United's biggest football problem?**
   - Recruitment and squad-building
   - Coaching and tactical direction
   - Leadership and decision-making above the manager
   - A combination of all three

3. **Would you accept three seasons without a major trophy if it meant building a sustainable team for the long term?**
   - Yes — sustainable foundations matter more
   - No — United must compete for trophies every season
   - Only if there is clear progress and accountability
   - Unsure

Publish a new round weekly. Keep each round's exact wording and dates in the results archive. For each round, allow one response per person where the platform's settings can reasonably support it. If sign-in is required, disclose that clearly. Do not claim identity verification or anonymity unless the settings and data support it.

## Glazer accountability and supporter mandate form

Create a separate form with these questions:

1. **Do you believe Manchester United would be better off without the Glazer family as controlling owners, even if the replacement ownership were not perfect?**
   - Yes
   - Yes, if supporters receive meaningful governance rights
   - No — a replacement could be worse
   - It depends on the ownership model
   - Undecided

2. **Which long-term ownership model should United work towards?**
   - Majority supporter ownership
   - A supporter trust with meaningful shareholding and governance rights
   - A mixed model with substantial supporter representation
   - Another model / unsure

3. **What minimum supporter rights should any future owner guarantee?**
   - Elected supporter representation
   - Regular published financial and governance reporting
   - Formal consultation on major heritage/stadium decisions
   - A combination of these
   - Other / unsure

4. **Which issue should the campaign prioritise?**
   - Debt and financing transparency
   - Supporter representation
   - Stadium and infrastructure investment
   - Ownership change
   - Independent accountability and reporting

5. **Would you support a peaceful, evidence-based international campaign calling for accountable ownership and meaningful supporter representation?**
   - Yes
   - No
   - I need more information

Do not ask for phone numbers, home addresses, school details, passwords, or unnecessary personal information. Keep any optional country question broad and optional.

## First milestone: 10,000 unique supporter responses

The campaign's first public milestone is **10,000 unique supporter responses**. This is a practical mobilisation and credibility milestone, not a legal threshold and not a mechanism that forces an ownership change.

At 10,000, publish a transparent report showing:
- Exact questions and voting dates.
- Number of unique responses and how duplicates were controlled.
- Countries represented only if collected safely and voluntarily.
- Counts and percentages for every option.
- Limitations of an open, self-selected online consultation.
- A clear, peaceful next-step proposal for supporter groups, club representatives, shareholders and media.

Never count repeat submissions as new supporters. Run new weekly rounds so supporters can participate again in a fresh poll without inflating a single campaign mandate.

## Website connection

In `polls-config.js`, add the published Google Forms embed URL for:
- `weeklyFootballEmbedUrl`
- `glazerMandateEmbedUrl`

Existing keys for the football, ownership and ideas forms remain available. The page reports how many of the five forms are connected. Test each form in a logged-out/incognito browser and on mobile before launch.
