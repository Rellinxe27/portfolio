export const projects = [
  {
    num: '01',
    slug: 'campus-lms',
    title: 'Campus LMS',
    italic: 'LMS',
    period: '2024 — Present',
    status: 'Active',
    domain: 'B2B SaaS · EdTech',
    category: 'edtech',
    tagline: 'A learning platform for African universities, where Canvas never quite fit.',
    impact: '30 Spring services · schema-per-tenant · < 200 KB initial payload',
    diagram: 'campus',
    beats: [
      {
        label: 'Problem',
        text: 'Public universities here run on PDFs over WhatsApp and printed attendance sheets. The handful that adopted Canvas or Moodle inherit a stack designed around stable broadband and Western pedagogy — neither of which holds in Abidjan, Bouaké, or Yamoussoukro.',
        nb: null
      },
      {
        label: 'Constraints',
        text: 'Bandwidth is unreliable, devices are mostly mid-range Android, French is the primary teaching language, and the institutions buying this can\'t pay Canvas-tier licensing. So: offline-tolerant clients, < 200 KB initial payloads, full FR/EN parity, hosted on a VPS that costs less per month than one Canvas seat.',
        nb: null
      },
      {
        label: 'Decisions',
        text: 'Spring Boot 3 in Clean Architecture across 30 services — not because microservices are cool, but because the buyer institutions each want their own deployment perimeter. Vue 3 web + React Native mobile share a generated TypeScript client off the OpenAPI contract. Postgres per tenant, not row-level multi-tenancy: easier audits, easier snapshots, easier explanations to the procurement officer.',
        nb: null
      },
      {
        label: 'What broke',
        text: 'First version had one shared schema with tenant_id everywhere. Three weeks in, a single migration locked the table for every institution at once. I tore it out and moved to schema-per-tenant. Slower to onboard, but no more cross-tenant blast radius.',
        nb: 'Rewrite cost: ~9 days. Worth it the next month when an institution asked for a data export and I could just pg_dump their schema.'
      },
      {
        label: 'What makes it hard',
        text: 'Sync semantics. A lecturer marks attendance offline on a bus; a student submits an assignment offline at home; both reconnect at the same time. You can\'t just last-write-wins — that\'s how grades disappear. The conflict resolver is the part of the codebase I keep rewriting.',
        nb: null
      }
    ],
    stack: [
      { dt: 'Backend',   dd: 'Spring Boot 3.x · Java 21 · Postgres' },
      { dt: 'Frontend',  dd: 'Vue 3 · TypeScript · Pinia' },
      { dt: 'Mobile',    dd: 'React Native · Expo' },
      { dt: 'Infra',     dd: 'Docker · Hetzner · Caddy' }
    ],
    links: []
  },
  {
    num: '02',
    slug: 'hopride',
    title: 'HopRide',
    italic: 'Ride',
    period: '2024 — 2025',
    status: 'Shipped',
    domain: 'Mobility',
    category: 'mobility',
    tagline: 'Ride-hailing built for Abidjan, not retrofitted to it.',
    impact: 'Cancellation rate 22% → 7% · 500+ concurrent rides on a single 8 GB box',
    diagram: 'hopride',
    beats: [
      {
        label: 'Problem',
        text: 'Yango works in Abidjan because it had to. Routes here aren\'t the routes Google Maps thinks they are — they shift around market days, flooding, and informal détournements that locals just know. A driver app written in Moscow doesn\'t know where Adjamé\'s actual pickup zone is at 6pm.',
        nb: null
      },
      {
        label: 'Constraints',
        text: 'Two native apps (rider, driver), one backend, one ops console — built solo across a 14-week sprint. Drivers needed to operate on Android phones with 2GB RAM. Riders needed to pay with cash, Wave, Orange Money, or MTN MoMo. The dispatch algorithm had to handle 500+ concurrent simulated rides on a single 8GB box because that\'s what the launch budget could afford.',
        nb: null
      },
      {
        label: 'Decisions',
        text: 'Go for the backend — gRPC between services, Postgres + PostGIS for geo. Two truly native apps because hybrid frame drops on the map screen kill driver retention. Terraform-managed AWS for the staging cluster, but the production runtime is a small fleet of Hetzner boxes behind a managed load balancer because AWS egress would have eaten the unit economics.',
        nb: null
      },
      {
        label: 'What broke',
        text: 'The first matching algorithm picked the geographically closest driver. In testing, that meant drivers stuck behind a market kept getting matched and cancelling — the rider experience tanked. I rewrote it to score by ETA-from-routing, not haversine, and added a soft penalty for drivers who cancelled within the last 10 minutes.',
        nb: 'Cancellation rate dropped from ~22% to under 7% across the simulated load.'
      },
      {
        label: 'What makes it hard',
        text: 'The bottom sheet on the rider app has six states: idle, searching, driver-assigned, en-route-to-pickup, in-trip, complete. Each transition has to feel inevitable on a 60Hz Android mid-tier — no jank, no accidental dismiss. I rewrote the sheet three times. Hand-illustrated clay-style car SVGs because the off-the-shelf map markers look like they belong in a different country.',
        nb: null
      }
    ],
    stack: [
      { dt: 'Backend',   dd: 'Go · gRPC · Postgres + PostGIS' },
      { dt: 'Web',       dd: 'Nuxt 3 · TypeScript' },
      { dt: 'Mobile',    dd: 'SwiftUI · Jetpack Compose' },
      { dt: 'Infra',     dd: 'Terraform · AWS staging · Hetzner prod' }
    ],
    links: []
  },
  {
    num: '03',
    slug: 'fne-connect',
    title: 'FNE Connect',
    italic: 'Connect',
    period: '2023 — 2024',
    status: 'Shipped',
    domain: 'Fintech · Compliance',
    category: 'fintech',
    tagline: 'Multi-tenant invoice certification for Côte d\'Ivoire\'s tax authority.',
    impact: '6 ERP integrations live · 3 AM reconciliation, drift > 2 records pages me',
    beats: [
      {
        label: 'Problem',
        text: 'Côte d\'Ivoire\'s DGI (Direction Générale des Impôts) requires every commercial invoice above a threshold to be electronically certified. The official portal is a frozen government tool — no SDKs, no batching, ERP integrations are an afterthought. Mid-sized businesses were certifying invoices by hand, hundreds a day.',
        nb: null
      },
      {
        label: 'Constraints',
        text: 'Six client integrations to ship in roughly six months, each with its own ERP (Sage, Odoo, MS Dynamics 365) and its own idea of what an invoice schema looks like. Subscription billing through CinetPay because Stripe doesn\'t serve CFA. Bilingual UI from day one, not as a v2 sticker.',
        nb: null
      },
      {
        label: 'Decisions',
        text: 'Spring Boot for the API, Vue 3 + vue-i18n for the dashboard. Bull queues on Redis for the certification pipeline — every invoice goes through retry-with-backoff against the DGI endpoint, because that endpoint is offline maybe 4% of the time and you cannot drop a single record. Per-tenant connector adapters, so a Sage shop and an Odoo shop look identical to the core.',
        nb: null
      },
      {
        label: 'What broke',
        text: 'The DGI signing endpoint silently changed its expected timestamp format mid-rollout — local time vs UTC. We lost a few hours of certifications before I caught it, and only because a client noticed their invoice numbers had gaps. Added a daily reconciliation job comparing our local ledger against DGI\'s confirmation list; should have had it from week one.',
        nb: 'Now it runs at 3 AM and pages me if drift > 2 records.'
      },
      {
        label: 'What makes it hard',
        text: 'The audit story. Tax authority queries us. Clients query us. Both want to know: why did this invoice get this number, who approved it, when. Every certification call is journalled, signed, and replay-able. The dull-sounding part is the part that keeps the contract.',
        nb: null
      }
    ],
    stack: [
      { dt: 'Backend',     dd: 'Spring Boot · Bull · Redis · Postgres' },
      { dt: 'Frontend',    dd: 'Vue 3 · vue-i18n · Tailwind' },
      { dt: 'Integrations',dd: 'Sage · Odoo · MS Dynamics 365 · CinetPay' },
      { dt: 'Auth',        dd: 'OAuth 2.0 · TOTP 2FA' }
    ],
    links: []
  },
  {
    num: '04',
    slug: 'linkpath',
    title: 'LinkPath',
    italic: 'Path',
    period: '2025',
    status: 'Shipped',
    domain: 'Creator tools · Fintech',
    category: 'fintech',
    tagline: 'Smart link-in-bio with mobile-money payment routing built in.',
    impact: 'Payments fanned across Wave / Orange / MTN with one-touch creator payout',
    beats: [
      {
        label: 'Problem',
        text: 'Creators here use Linktree, but Linktree can\'t take a Wave or Orange Money payment. So they end up with a bio link that points to another bio link that DMs you a phone number. I wanted one page that could route a follower from "I like this post" to "I just paid you" without ever leaving the browser.',
        nb: null
      },
      {
        label: 'Constraints',
        text: 'Three-week build during evenings and weekends while shipping HopRide. Single Postgres instance. Pages had to render server-side because creator pages get crawled by WhatsApp previews 100x more than they get visited.',
        nb: null
      },
      {
        label: 'Decisions',
        text: 'Nuxt 3 with universal rendering for the public pages, Supabase for auth + storage so I didn\'t have to build user infra, FedaPay + CinetPay aggregator on the back to fan out to Wave/Orange/MTN. Click events go through a tiny edge collector — no cookies, no third-party tracker. The dashboard is plain Vue with a slow but honest analytics view that just queries Postgres.',
        nb: null
      },
      {
        label: 'What broke',
        text: 'First analytics page tried to be cute with materialized views refreshed on a cron. Refresh ran during peak hours, page locked, dashboard stalled. Replaced it with a continuous aggregate using TimescaleDB and never looked at it again.',
        nb: null
      },
      {
        label: 'What makes it hard',
        text: 'Payment routing. A creator gets paid in CFA from a follower whose only wallet is MTN MoMo, but their own payout is a Wave bank transfer. Behind the scenes that\'s two providers, two webhooks, one reconciliation. Most of the code is plumbing the unhappy paths — refund states, double-debits, providers timing out and replaying.',
        nb: 'Still improving this — the reconciler had to be rewritten once already.'
      }
    ],
    stack: [
      { dt: 'Frontend',  dd: 'Nuxt 3 · Vue 3 · Tailwind' },
      { dt: 'Backend',   dd: 'Supabase · Edge functions · Postgres + TimescaleDB' },
      { dt: 'Payments',  dd: 'FedaPay · CinetPay · Wave · MTN MoMo · Orange Money' }
    ],
    links: []
  },
  {
    num: '05',
    slug: 'tachesure',
    title: 'TâcheSûre',
    italic: 'Sûre',
    period: '2024',
    status: 'Shipped',
    domain: 'Marketplace',
    category: 'marketplace',
    tagline: 'A two-sided service marketplace, role-aware from the first screen.',
    impact: 'Provider drop-off cut roughly in half by moving verification post-booking',
    beats: [
      {
        label: 'Problem',
        text: 'Hiring a plumber, electrician, or moving help in Abidjan is a Facebook group and a phone number. No reviews, no escrow, no record. The trust gap is the whole product.',
        nb: null
      },
      {
        label: 'Constraints',
        text: 'Solo build, mobile-first, had to ship a working prototype in five weeks for a partner pitch. I started with mocked data so the design conversations could happen in parallel with the schema, then ripped the mocks out in week four.',
        nb: null
      },
      {
        label: 'Decisions',
        text: 'React Native + Expo Router so the same code base could ship iOS and Android. Supabase for auth + Postgres + storage. Reanimated 3 for the home-screen role transitions — clients see a different screen than providers, and I wanted the switch to feel like turning a card, not changing a tab.',
        nb: null
      },
      {
        label: 'What broke',
        text: 'Onboarding. Original flow asked for too much upfront — providers bounced before listing a single service. I gutted it: now you create an account, drop your trade and city, and you can list one service in under 90 seconds. Verification happens after the first booking, not before.',
        nb: 'Drop-off on the provider funnel cut roughly in half.'
      },
      {
        label: 'What makes it hard',
        text: 'Two products in one app. Clients want browse + price + book. Providers want availability + leads + earnings. Sharing screens between them is tempting and almost always wrong — every shared screen ended up doing both jobs badly. I split most of them.',
        nb: null
      }
    ],
    stack: [
      { dt: 'Mobile',    dd: 'React Native · Expo Router' },
      { dt: 'Backend',   dd: 'Supabase · Postgres · Storage' },
      { dt: 'Animation', dd: 'Reanimated 3' }
    ],
    links: []
  }
]

export const principles = [
  {
    num: '01',
    title: 'Boring stack, weird problems.',
    body: 'Postgres, Spring Boot, Vue, Go. Nothing on the front page of Hacker News. The interesting part is the problem — mobile money rails, 2G fallbacks, a tax authority\'s timestamp quirks. The stack should be the part you don\'t think about at 2 AM.',
    layout: 'a'
  },
  {
    num: '02',
    title: 'Phase the work, document the phases.',
    body: 'Every project I\'ve shipped solo has at least four phases written down before I start. Not a Gantt chart — a one-page note. Phase 4 always changes by the time I get there, but the writing-it-down forces me to ask which problem I\'m actually solving first.',
    layout: 'b'
  },
  {
    num: '03',
    title: 'Test in the timezone you live in.',
    body: 'Latency from Abidjan to eu-west-1 is fine. Latency from Bouaké to us-east-1 over a 3G modem is not. I run staging on a Hetzner box and develop with the network tab throttled to "Slow 3G" because I have shipped Cloud Run apps that nobody locally could open.',
    layout: 'c'
  },
  {
    num: '04',
    title: 'Optimize the thing that breaks first.',
    body: 'Premature optimization is real, but its opposite is worse — the thing that <strong>will</strong> break under load is usually obvious to anyone who has written the code. Audit logs, payment retries, conflict resolvers. Build them right the first time and pretend they\'re boring; they\'re not.',
    layout: 'd'
  },
  {
    num: '05',
    title: 'Ship the whole thing.',
    body: 'I write the SQL, the API, the client, the mobile app, the Terraform. Not because I love it all equally — I don\'t — but because the seams between layers are where products bleed money. The migration that breaks the iOS app, the cache header that wrecks SEO. You catch them by owning the seams.',
    layout: 'e'
  },
  {
    num: '06',
    title: 'Local first, then scale.',
    body: 'CFA francs in the schema. French as the primary copy. Mobile money as the default payment. If the system holds up for one cooperative in Yopougon, it generalizes. The other direction almost never does.',
    layout: 'f'
  }
]

export const metrics = [
  {
    num: '500',
    suffix: '+',
    lab: 'Concurrent rides simulated',
    note: 'HopRide dispatch held a single 8GB box under sustained load. Cancellation rate ~7% after the routing rewrite.',
    layout: 'a'
  },
  {
    num: '30',
    suffix: '',
    lab: 'Spring Boot services',
    note: 'Campus LMS, Clean Architecture, schema-per-tenant.',
    layout: 'b'
  },
  {
    num: '6',
    suffix: '',
    lab: 'ERP integrations shipped',
    note: 'FNE Connect — Sage, Odoo, MS Dynamics 365 across six tenants.',
    layout: 'c'
  },
  {
    num: '< 200',
    suffix: 'KB',
    lab: 'Initial payload, Campus LMS web',
    note: 'Mobile data is expensive here. So is patience.',
    layout: 'd'
  },
  {
    num: '~50',
    suffix: '%',
    lab: 'Provider drop-off cut',
    note: 'TâcheSûre — moved verification from before-listing to after-first-booking.',
    layout: 'e'
  },
  {
    num: null,
    suffix: '',
    lab: 'Honest note',
    note: 'These numbers come from staging telemetry and partner reports — not from a polished case-study deck. Some are ranges. I\'d rather show approximate truth than tidy fiction.',
    layout: 'f'
  }
]

export const classProjects = [
  {
    title: 'Service Marketplace API',
    course: 'CSE 341 — Web Services',
    code: 'CSE 341',
    year: 2025,
    track: 'backend',
    stack: ['Node.js', 'TypeScript', 'GraphQL', 'MongoDB'],
    summary: 'GraphQL-driven API for a verified local-services marketplace — search, profiles, bookings, messaging, reviews, real-time notifications. Group project; I owned the schema and the booking-flow resolver.',
    links: [
      { label: 'Demo', href: 'https://youtu.be/zU6KOHst_kk' },
      { label: 'Repo', href: 'https://github.com/BMillettMedia/CSE341-FINAL/tree/main' }
    ]
  },
  {
    title: 'Weather Dashboard with City Comparison',
    course: 'WDD 330 — Frontend II',
    code: 'WDD 330',
    year: 2025,
    track: 'frontend',
    stack: ['Vue 3', 'OpenWeatherMap', 'Visual Crossing', 'LocalStorage'],
    summary: 'Multi-city weather dashboard — side-by-side comparison, 5-day forecasts with charts, drag-and-drop city cards, image export, geolocation auto-fill. Shipped in a 38-hour personal sprint.',
    links: [
      { label: 'Live', href: 'https://weather-dashboard-wdd330-final.onrender.com/' },
      { label: 'Demo', href: 'https://www.youtube.com/watch?v=Y2c9npMM_Q0' },
      { label: 'Repo', href: 'https://github.com/Rellinxe27/weather-dashboard-WDD330-Final/tree/master' }
    ]
  },
  {
    title: 'PHPMotors',
    course: 'CSE 340 — Backend I',
    code: 'CSE 340',
    year: 2024,
    track: 'backend',
    stack: ['PHP', 'MySQL', 'phpMyAdmin', 'MVC'],
    summary: 'Full PHP/MVC web application for a fictional motor dealership — authentication, CRUD on inventory, role-based admin views. The course capstone where MVC stopped being a buzzword.',
    links: []
  },
  {
    title: 'CSS Zen Garden',
    course: 'WDD 331 — Advanced CSS',
    code: 'WDD 331',
    year: 2024,
    track: 'frontend',
    stack: ['HTML', 'Advanced CSS', 'Group project'],
    summary: 'Group restyle of the canonical Zen Garden — same HTML, completely different visual world. Forced you to think about CSS as design surface, not just layout.',
    links: []
  },
  {
    title: '~Scoots Motor Scooter Rental',
    course: 'WDD 230 — Frontend I',
    code: 'WDD 230',
    year: 2023,
    track: 'frontend',
    stack: ['HTML', 'CSS', 'JavaScript', 'SASS', 'JSON', 'Fetch API'],
    summary: 'A fictitious scooter-rental brand on Cozumel. Full multi-page site with API-fed content, SASS styling, and a fun, island-tone visual language. The first time I shipped JavaScript that talked to anything.',
    links: [
      { label: 'Live', href: 'https://rellinxe27.github.io/TermProject/index.html' }
    ]
  },
  {
    title: 'Cypher — Tech',
    course: 'WDD 130 — Web Fundamentals',
    code: 'WDD 130',
    year: 2022,
    track: 'frontend',
    stack: ['HTML', 'CSS'],
    summary: 'Personal multi-page site with a contact form. First taste of structuring web content for a real audience instead of a syllabus.',
    links: [
      { label: 'Live', href: 'https://mypersonalwebsite.glitch.me/' }
    ]
  },
  {
    title: 'Dry Oar',
    course: 'WDD 130 — Web Fundamentals',
    code: 'WDD 130',
    year: 2022,
    track: 'frontend',
    stack: ['HTML', 'CSS'],
    summary: 'Mid-semester marketing site for a fictional whitewater-rafting brand. Focused on Purpose, Audience, and a partial style guide — the brief that made "design before you code" stick.',
    links: [
      { label: 'Live', href: 'https://dryoarwdd130.glitch.me/' }
    ]
  },
  {
    title: 'Sudoku',
    course: 'CIT 260 — Object-Oriented Programming',
    code: 'CIT 260',
    year: 2022,
    track: 'systems',
    stack: ['C++'],
    summary: 'Console Sudoku — enforces row, column, and 3×3 uniqueness with a clean separation between board state and input loop. Where C++ classes started feeling natural.',
    links: []
  },
  {
    title: 'MadLib',
    course: 'CS 124 — Intro to Software Development',
    code: 'CS 124',
    year: 2021,
    track: 'systems',
    stack: ['C++', 'File I/O'],
    summary: 'Reads a Mad Lib template from disk, prompts for substitutes, prints the completed story. Tiny, but the first program that actually felt like a tool.',
    links: []
  },
  {
    title: 'Calendar',
    course: 'CS 124 — Intro to Software Development',
    code: 'CS 124',
    year: 2021,
    track: 'systems',
    stack: ['C++'],
    summary: 'Console calendar — month/year navigation and date-arithmetic from scratch. The bug-hunt that taught me about edge dates and leap years.',
    links: []
  },
  {
    title: 'Monthly Budget',
    course: 'CS 124 — Intro to Software Development',
    code: 'CS 124',
    year: 2021,
    track: 'systems',
    stack: ['C++'],
    summary: 'Tracks personal income/expenditure for a month and reports goal-met/missed. Boring; that was the point — get comfortable with control flow and I/O.',
    links: []
  },
  {
    title: 'Facebook — Cambridge Analytica',
    course: 'CIT 270 — Systems Security 1',
    code: 'CIT 270',
    year: 2021,
    track: 'security',
    stack: ['Research', 'Presentation'],
    summary: 'Group case study on the 2018 Cambridge Analytica breach — what was scraped, who got notified, and the third-party-app permission gaps Facebook had to close after.',
    links: [
      { label: 'Talk', href: 'https://youtu.be/s4xEIc1oXoI' }
    ]
  }
]

export const career = [
  { years: '2023 —',     role: 'Independent Founder, Full-stack Developer', org: 'Self-employed · Abidjan' },
  { years: '2022 — 23',  role: 'IT Infrastructure Specialist',              org: 'MFI-CI · Abidjan' },
  { years: '2020 — 22',  role: 'Developer',                                 org: 'Novus Emergent Tech · Abidjan' },
  { years: '2019 — 20',  role: 'IT Officer',                                org: 'Nauvoo Technology Applications · Abidjan' },
  { years: '2018 — 19',  role: 'Last-Mile Dispatch Agent',                  org: 'Jumia-CI · Abidjan' }
]

export const stack = [
  {
    cat: 'Languages',
    items: [
      { v: 'Java 21',    note: '5y' },
      { v: 'TypeScript', note: '6y' },
      { v: 'Go',         note: '2y' },
      { v: 'Swift',      note: '2y' },
      { v: 'Kotlin',     note: '2y' },
      { v: 'PHP',        note: 'archive' },
      { v: 'SQL',        note: 'daily' }
    ]
  },
  {
    cat: 'Backend',
    items: [
      { v: 'Spring Boot 3.x', note: 'primary' },
      { v: 'Node.js (Fastify)', note: '' },
      { v: 'Go microservices',  note: '' },
      { v: 'Clean Architecture', note: 'preferred' },
      { v: 'Multi-tenant SaaS', note: '' }
    ]
  },
  {
    cat: 'Frontend & Mobile',
    items: [
      { v: 'Vue 3 · Nuxt 3', note: 'primary' },
      { v: 'React · React Native', note: '' },
      { v: 'SwiftUI', note: '' },
      { v: 'Jetpack Compose', note: '' },
      { v: 'Tailwind · Reanimated 3', note: '' }
    ]
  },
  {
    cat: 'Data & Infra',
    items: [
      { v: 'Postgres · PostGIS · Timescale', note: 'daily' },
      { v: 'MongoDB · Supabase', note: '' },
      { v: 'Redis · Bull queues', note: '' },
      { v: 'Docker · Terraform', note: '' },
      { v: 'AWS · Hetzner · Caddy', note: '' }
    ]
  },
  {
    cat: 'Payments',
    items: [
      { v: 'Wave',         note: 'CI/SN' },
      { v: 'Orange Money', note: 'CI' },
      { v: 'MTN MoMo',     note: 'CI' },
      { v: 'Moov',         note: 'CI' },
      { v: 'CinetPay · FedaPay', note: 'aggregator' }
    ]
  },
  {
    cat: 'Tendencies',
    items: [
      { v: 'Ship the whole thing', note: '' },
      { v: 'Phase work, document phases', note: '' },
      { v: 'Hand-rolled, not framework-bound', note: '' },
      { v: 'Local-first, then scale', note: '' },
      { v: 'Boring stack, weird problems', note: '' }
    ]
  }
]
