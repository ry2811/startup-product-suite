# Startup Product Suite

Three focused product experiments demonstrating how I approach startup problems across product design, frontend engineering and lightweight serverless backends.

The applications share a React and TypeScript foundation, but each has its own product goal, visual language, interactions and API. They are presented as portfolio projects rather than production businesses; sample business data is clearly simulated.

## Live products

| Product | Problem being solved | Interactive highlights | Live demo |
| --- | --- | --- | --- |
| **Flowboard** | Small teams lose sprint context across chat, documents and heavyweight tools. | Create and persist tasks, filter work, move items through four workflow stages. | [Open Flowboard](https://flowboard-orcin-xi.vercel.app) |
| **Northstar** | Founders need to understand which stage of the growth funnel needs attention. | Change reporting periods, fetch KPIs from an API, inspect revenue, acquisition and conversion. | [Open Northstar](https://northstar-gamma-five.vercel.app) |
| **ReplyAI** | Support agents spend too much time rebuilding context and writing repetitive replies. | Prioritize tickets, switch reply modes, request an AI-style server draft, edit and resolve conversations. | [Open ReplyAI](https://replyai-pi.vercel.app) |

## Architecture

```text
startup-product-suite/
├── apps/
│   ├── flowboard/   # Kanban SaaS + task API
│   ├── northstar/   # Analytics dashboard + metrics API
│   └── replyai/     # Support workspace + drafting API
├── .github/workflows/ci.yml
└── package.json
```

Every application is independently deployable and contains:

- a Vite-powered React and TypeScript client;
- responsive CSS without a component-framework dependency;
- a Vercel serverless function under `api/`;
- an individual case study describing product decisions and validation ideas;
- graceful frontend fallbacks when an API is unavailable.

## Backend endpoints

| App | Endpoint | Method | Responsibility |
| --- | --- | --- | --- |
| Flowboard | `/api/tasks` | `GET`, `POST` | Return seed tasks and validate newly created tasks. |
| Northstar | `/api/metrics?period=30D` | `GET` | Generate period-aware revenue, user and funnel metrics. |
| ReplyAI | `/api/draft` | `POST` | Generate a contextual support draft from ticket data. |

Flowboard additionally stores user-created tasks in browser storage for a persistent demo experience. No private customer data is used.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
git clone https://github.com/ry2811/startup-product-suite.git
cd startup-product-suite
npm install
npm run dev:flowboard
```

Replace the final command with `npm run dev:northstar` or `npm run dev:replyai` to run another client. For local serverless APIs, install the Vercel CLI and run `vercel dev` inside the relevant app directory.

Build all applications:

```bash
npm run build
```

## Deployment

The three clients are separate Vercel projects connected to the corresponding app directories. When configuring from this monorepo, use these Root Directory values:

- `apps/flowboard`
- `apps/northstar`
- `apps/replyai`

Vercel detects Vite and the `api/` serverless functions automatically.
