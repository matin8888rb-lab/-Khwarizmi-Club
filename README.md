# Khwarizmi Club

**Learn Beyond Limits. Speak Without Borders.**

A mobile-first school language community website with an editorial visual identity.

## Website sections
- Home and club introduction
- Magazine and Student Voices
- English Lab with an interactive grammar challenge
- Mystery English with a revealable riddle
- Debate Arena and Events
- Hall of Fame and Global Corner
- About and Join information

## Automatic publishing
The repository includes a GitHub Actions workflow. Every commit pushed to `main` automatically triggers a website deployment. The service worker checks for published updates and refreshes visitors when a new release takes control.

### One-time GitHub Pages setup
1. Open this repository's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Return to the **Actions** tab and check the latest **Deploy Khwarizmi Club to GitHub Pages** run.

After this one-time setup, future updates are published automatically from `main`.

## Editing the website
Edit the website files in this repository and commit changes to `main`. Visitors receive the newly deployed version automatically. Main files:
- `index.html` — pages, text and navigation
- `styles.css` — visual design and responsive layout
- `app.js` — interactions and update checks
- `sw.js` — offline support and update strategy

## Privacy and current limitations
This is a public static website. It does not currently provide secure member accounts, a persistent submission inbox, online voting or a private content-management dashboard. Those features need a trusted backend, access controls and school-approved privacy rules. Do not publish students' private information, phone numbers or photos without appropriate permission. Never place private API keys in this public repository.
