# Wedding Invitation Website

An immersive, cinematic Hindu wedding invitation website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Ganesha Welcome Screen** — Animated wooden doors that open to reveal the wedding scene
- **Bride & Groom Hero** — Parallax background with cinematic name reveals
- **Invitation Message** — Elegant parchment-style card with family blessings
- **Interactive Date Reveal** — Drag or tap to unroll the wedding date scroll
- **Live Countdown** — Real-time countdown with "Save the Date" calendar download (.ics)
- **Wedding Events Timeline** — Haldi, Mehendi, Sangeet, Wedding, and Reception cards
- **Venue & Directions** — Embedded Google Map with "Get Directions" button
- **Closing Blessings** — Footer with WhatsApp share and Back to Top
- **Music Toggle** — Optional background music (user-initiated, never auto-plays)
- **Responsive** — Optimized for mobile, tablet, and desktop
- **Accessible** — Respects `prefers-reduced-motion`, keyboard navigable, ARIA labels

## Customization

All wedding details are in a single file: **`src/config/weddingDetails.ts`**

Edit this file to customize:

| Field | Description |
|-------|-------------|
| `bride.firstName`, `bride.lastName` | Bride's name |
| `bride.parents` | Bride's parents' names |
| `bride.familyName` | Bride's family name |
| `groom.firstName`, `groom.lastName` | Groom's name |
| `groom.parents` | Groom's parents' names |
| `groom.familyName` | Groom's family name |
| `weddingDate` | Wedding date/time in ISO format: `"2026-12-15T19:30:00"` |
| `timezone` | Wedding timezone (e.g., `"Asia/Kolkata"`) |
| `muhurthamTime` | Muhurtham time display string |
| `venue.name` | Venue name |
| `venue.address` | Street address |
| `venue.city`, `venue.state` | City and state |
| `venue.mapQuery` | Google Maps search query for map embed and directions |
| `images.*` | URLs for background images (replace Pexels stock photos with your own) |
| `audioUrl` | URL to background music file (leave empty to disable) |
| `events` | Array of wedding events — add, remove, or edit entries |

### Replacing Images

All images currently use Pexels stock photos. Replace the URLs in `images` with your own hosted photos:

```ts
images: {
  heroBackground: "https://your-domain.com/photos/hero.jpg",
  mandap: "https://your-domain.com/photos/mandap.jpg",
  // ...
}
```

### Adding/Removing Events

Edit the `events` array in `weddingDetails.ts`. Each event needs:

```ts
{
  id: "unique-id",
  name: "Event Name",
  date: "2026-12-15",      // YYYY-MM-DD
  time: "7:30 PM",
  venue: "Venue Name",
  description: "Event description",
  icon: "Flame",            // Lucide icon name: Sparkles, Flower2, Music, Flame, PartyPopper
  mapQuery: "venue location", // optional, for Google Maps directions
}
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is output to `dist/`.

## Project Structure

```
src/
  components/
    GaneshaWelcome.tsx    — Door-opening entrance scene
    WeddingHero.tsx       — Bride & groom hero with parallax
    InvitationMessage.tsx — Parchment invitation card
    WeddingDateReveal.tsx — Interactive scroll date reveal
    WeddingCountdown.tsx  — Live countdown + .ics download
    WeddingEvents.tsx     — Events timeline
    WeddingVenue.tsx      — Venue with map and directions
    WeddingFooter.tsx     — Closing blessings + share
    MusicToggle.tsx       — Background music toggle
    Decorations.tsx       — Ganesha motif & Rangoli SVGs
    Diya.tsx              — Animated diya lamps
    Ornaments.tsx         — Arch borders & dividers
    Petals.tsx            — Floating petal effects
  config/
    weddingDetails.ts     — ALL wedding info (edit this)
  hooks/
    useCountdown.ts       — Countdown timer hook
  App.tsx                 — Main orchestrator
  index.css               — Global styles & fonts
  main.tsx                — Entry point
```
