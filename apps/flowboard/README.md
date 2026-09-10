# Flowboard

A focused sprint-management experience for small product teams. Flowboard prioritizes fast scanning and clear workflow state over the complexity of enterprise project-management tools.

## Features

- Create tasks through a validated serverless endpoint.
- Persist personal demo data in browser storage.
- Move work through Backlog, In progress, Review and Done.
- Filter research and design work.
- Responsive workspace, activity and settings views.

## API

- `GET /api/tasks` — returns the initial sprint dataset.
- `POST /api/tasks` — validates a title and returns a newly created task.

## Development

```bash
npm install
npm run dev
```

Use `vercel dev` when testing the frontend and API together. Production: [flowboard-orcin-xi.vercel.app](https://flowboard-orcin-xi.vercel.app).

See [CASE_STUDY.md](./CASE_STUDY.md) for the product rationale and validation plan.
