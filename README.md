# 🎬 Prime Video Clone

A full-featured, production-quality streaming platform clone built with **React + TypeScript + Vite**, styled as **Amazon Prime Video**. All content is sourced live from **TMDB (The Movie Database)** — real Indian/Bollywood movies, web series, trailers, cast, seasons, and more.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Project Structure](#project-structure)
5. [TMDB Data Seeding](#tmdb-data-seeding)
6. [Pages & Routes](#pages--routes)
7. [Components](#components)
8. [Color System & Theming](#color-system--theming)
9. [Getting Started](#getting-started)
10. [Environment & API Keys](#environment--api-keys)
11. [Available Scripts](#available-scripts)

---

## 🎯 Project Overview

This is a **Prime Video clone** — a real-world streaming UI with:
- **Live Indian content** from TMDB: Bollywood movies, Hindi web series, trending shows
- **Rich detail pages** with cast, trailers (YouTube), seasons (for TV shows), and similar content
- **Working search** powered by TMDB's search API
- **Account management**, notifications, subscription plans, and more
- **Zero placeholder data** — everything is fetched dynamically from TMDB

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS v3 + shadcn/ui |
| **Routing** | React Router DOM v6 |
| **Data Fetching** | TanStack React Query v5 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Content API** | TMDB (The Movie Database) v3 |
| **UI Components** | Radix UI primitives via shadcn/ui |

---

## ✨ Features

### 🎬 Content (TMDB-Powered)
- **Homepage** with 7 dynamic category rows (Trending, Bollywood, Top Rated, Action, Romance, Web Series, New Releases)
- **Hero Slider** with auto-advancing real Indian movie backdrops
- **Detail Pages** with:
  - Full cast with profile photos (fetched from TMDB `/credits`)
  - Official trailers embedded from YouTube (TMDB `/videos`)
  - Seasons & episode counts for TV shows (TMDB `/seasons`)
  - Similar content recommendations
  - Genre chips, maturity ratings, runtime, release year
- **Shimmer skeleton loading** while TMDB data fetches

### 🔍 Search
- Live TMDB search at `/search?q=...`
- Trending search chips (Mirzapur, Panchayat, Family Man, etc.)
- URL-driven — shareable results links
- Loading, empty, and results states

### 🔔 Notifications
- Bell icon in navbar → dropdown panel
- Unread blue badge count
- 6 Prime Video-style notifications
- Click to mark read, "Mark all read" button
- Outside-click dismiss

### 👤 Account
- User avatar → dropdown with profile switcher
- Full `/account` page: 5 settings sections
- Profile switcher (multiple profiles)
- Membership, Playback, Parental Controls, Language, Notification settings

### 📄 All Navbar & Footer Pages
| Route | Page |
|-------|------|
| `/movies` | Movies with genre filter tabs |
| `/shows` | TV Shows with genre filter tabs |
| `/my-list` | Watchlist (empty state + grid) |
| `/search` | Live search results |
| `/account` | Account & settings |
| `/help` | Help center with searchable FAQ |
| `/contact` | Contact form + support channels |
| `/plans` | 3-tier subscription pricing |
| `/gift-cards` | Interactive gift card purchase |
| `/about` | About Us with timeline |
| `/terms` | Terms of Use |
| `/privacy` | Privacy Policy |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Navbar with search, notifications, account dropdown
│   ├── Footer.tsx           # Footer with real React Router links
│   ├── HeroSlider.tsx       # Auto-advancing hero with TMDB data
│   ├── CategoryRow.tsx      # Horizontal scrollable movie row
│   ├── MovieCard.tsx        # Individual movie/show card with hover overlay
│   ├── NotificationPanel.tsx # Bell icon notification dropdown
│   ├── ScrollToTop.tsx      # Scroll-to-top on route change
│   └── PrimeVideoLogo.tsx   # SVG Prime Video logo with swoosh
│
├── pages/
│   ├── Index.tsx            # Homepage with 7 TMDB category rows
│   ├── MovieDetails.tsx     # Rich detail page (cast, trailers, seasons)
│   ├── MoviesPage.tsx       # Movies browse with genre filters
│   ├── TVShowsPage.tsx      # TV Shows browse with genre filters
│   ├── MyListPage.tsx       # Watchlist / saved content
│   ├── SearchPage.tsx       # Live TMDB search
│   ├── AccountPage.tsx      # Account settings & profiles
│   ├── HelpCenterPage.tsx   # Searchable FAQ
│   ├── ContactPage.tsx      # Contact form + support
│   ├── SubscriptionPlansPage.tsx  # Pricing tiers
│   ├── GiftCardsPage.tsx    # Gift card purchase UI
│   ├── AboutPage.tsx        # Company info + timeline
│   ├── TermsOfUsePage.tsx   # Terms of Use
│   └── PrivacyPolicyPage.tsx # Privacy Policy
│
├── services/
│   └── tmdb.ts              # TMDB API — all fetchers + normalizer
│
├── hooks/
│   ├── useTMDB.ts           # React Query wrappers for TMDB fetchers
│   └── useDebounce.ts       # Debounce hook for search input
│
├── data/
│   └── movies.ts            # Re-exports NormalizedMovie as Movie (backwards compat)
│
├── App.tsx                  # Router, QueryClient, all routes
├── index.css                # Prime Video color tokens + base styles
└── main.tsx                 # Entry point
```

---

## 🗄 TMDB Data Seeding

All content is fetched **live from TMDB** — no hardcoded movies. Here's exactly what each API call returns:

### Endpoints Used

| Function | TMDB Endpoint | What It Seeds |
|----------|--------------|---------------|
| `fetchTrending()` | `/trending/all/week` + `/discover/movie?language=hi` | Hero slider + "Trending in India" row |
| `fetchIndianMovies()` | `/discover/movie?language=hi&sort=popularity` | "Bollywood Blockbusters" row |
| `fetchTopRated()` | `/discover/movie+tv?language=hi&sort=vote_average` | "Top Rated" row |
| `fetchActionMovies()` | `/discover/movie?genres=28&language=hi` | "Action & Thriller" row |
| `fetchRomanticMovies()` | `/discover/movie?genres=10749,18&language=hi` | "Love & Romance" row |
| `fetchIndianSeries()` | `/discover/tv?language=hi` | "Indian Web Series" row |
| `fetchNewReleases()` | `/discover/movie?language=hi&sort=release_date` | "New Releases" row |
| `searchTMDB(query)` | `/search/multi?query=...` | Search results page |
| `fetchMovieDetails(id)` | `/movie/{id}` or `/tv/{id}` | Movie detail page |
| `fetchCast(id, type)` | `/movie/{id}/credits` | Cast with profile photos |
| `fetchTrailers(id, type)` | `/movie/{id}/videos` | YouTube trailer embeds |
| `fetchSeasons(id)` | `/tv/{id}/seasons` | Season/episode list for shows |
| `fetchSimilar(id, type)` | `/movie/{id}/similar` | "You May Also Like" row |

### Seeded Data Fields per Title

Each movie/show card and detail page includes:

| Field | Source | Example |
|-------|--------|---------|
| **Title** | `title` / `name` | "Pathaan" |
| **Poster** | `poster_path` → `w500` image | TMDB CDN URL |
| **Banner/Backdrop** | `backdrop_path` → `original` | TMDB CDN URL |
| **Overview** | `overview` | Plot description |
| **Release Year** | `release_date` / `first_air_date` | 2023 |
| **Rating** | `vote_average` | 7.4 |
| **Genres** | `genre_ids` → mapped to strings | ["Action", "Thriller"] |
| **Maturity** | Derived from `vote_average` | "UA 16+" |
| **Cast** | `/credits` → `cast[]` | Name + character + photo |
| **Trailers** | `/videos` → YouTube key | Embedded YouTube player |
| **Seasons** | `/seasons` (TV only) | Season # + episode count + air date |
| **Similar** | `/similar` | Array of NormalizedMovie |

### TMDB Image URLs

```
Poster (card):   https://image.tmdb.org/t/p/w500{poster_path}
Backdrop (hero): https://image.tmdb.org/t/p/original{backdrop_path}
Cast photo:      https://image.tmdb.org/t/p/w185{profile_path}
```

### How to Add More Content Categories

In `src/services/tmdb.ts`, add a new function:

```typescript
// Example: fetch Indian horror movies
export async function fetchHorrorMovies(): Promise<NormalizedMovie[]> {
  const results = await tmdbFetch("/discover/movie", {
    with_genres: "27",              // 27 = Horror genre ID
    with_original_language: "hi",   // Hindi
    sort_by: "popularity.desc",
    "vote_count.gte": "30",
  });
  return results.slice(0, 15).map(normalizeMovie);
}
```

Then in `src/hooks/useTMDB.ts`, add a hook:

```typescript
export function useHorrorMovies() {
  return useQuery<NormalizedMovie[]>({
    queryKey: ["horror"],
    queryFn: fetchHorrorMovies,
    staleTime: 5 * 60 * 1000,
  });
}
```

Add it to `useHomeCategories()` in the same file and it will appear on the homepage.

---

## 🗺 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Index` | Homepage — hero + 7 category rows |
| `/movie/tmdb-{id}` | `MovieDetails` | Rich detail page with cast, trailers, seasons |
| `/movies` | `MoviesPage` | Browse all movies with genre filters |
| `/shows` | `TVShowsPage` | Browse TV shows with genre filters |
| `/my-list` | `MyListPage` | Saved / watchlist |
| `/search?q=` | `SearchPage` | Live TMDB search results |
| `/account` | `AccountPage` | Account settings + profiles |
| `/help` | `HelpCenterPage` | Searchable FAQ accordion |
| `/contact` | `ContactPage` | Contact form + support channels |
| `/plans` | `SubscriptionPlansPage` | Pricing tiers |
| `/gift-cards` | `GiftCardsPage` | Gift card UI |
| `/about` | `AboutPage` | About + company timeline |
| `/terms` | `TermsOfUsePage` | Terms of Use |
| `/privacy` | `PrivacyPolicyPage` | Privacy Policy |

---

## 🎨 Color System & Theming

Located in `src/index.css`. All colors use HSL CSS variables consumed by Tailwind:

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `199 100% 44%` | #00A8E1 — Prime Blue |
| `--accent` | `188 72% 55%` | #00CFC8 — Prime Teal |
| `--background` | `220 22% 7%` | Deep navy background |
| `--foreground` | `0 0% 95%` | Near-white text |
| `--secondary` | `220 18% 16%` | Card/surface color |
| `--muted-foreground` | `220 10% 55%` | Subtle text |

**Prime Video gradient** (used on buttons, badges, logo swoosh):
```css
background: linear-gradient(135deg, #00A8E1, #00CFC8);
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd cinema-stream-main

# Install dependencies
npm install

# Start development server (port 8080)
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) — content will load from TMDB automatically.

---

## 🔑 Environment & API Keys

The project uses the **TMDB public read-only API key** (no auth required for basic endpoints).

| Key | Value | Where |
|-----|-------|-------|
| `TMDB_API_KEY` | `8265bd1679663a7ea12ac168da84d2e` | `src/services/tmdb.ts` |
| `TMDB_BASE_URL` | `https://api.themoviedb.org/3` | `src/services/tmdb.ts` |
| `TMDB_IMAGE_BASE` | `https://image.tmdb.org/t/p` | `src/services/tmdb.ts` |

> **To use your own TMDB API key**: Register at [themoviedb.org](https://www.themoviedb.org/settings/api), get a v3 API key, and replace the value in `src/services/tmdb.ts`.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at port 8080 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest tests |
| `npm run test:watch` | Run tests in watch mode |

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | 18.x | UI framework |
| `react-router-dom` | 6.x | Client-side routing |
| `@tanstack/react-query` | 5.x | Data fetching & caching |
| `framer-motion` | 12.x | Animations & transitions |
| `lucide-react` | 0.462 | Icon library |
| `tailwindcss` | 3.x | Utility-first CSS |
| `tailwindcss-animate` | 1.x | Tailwind animation utilities |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

*Built with ❤️ using React, TypeScript, and TMDB API.*
