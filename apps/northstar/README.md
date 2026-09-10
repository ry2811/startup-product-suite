# Northstar

A dark-mode growth analytics workspace that helps early-stage teams connect acquisition, activation and paid conversion instead of viewing disconnected charts.

## Features

- Fetch period-aware KPIs from a serverless API.
- Switch between 7, 30 and 90-day views.
- Compare acquisition channels.
- Inspect revenue trends and the visitor-to-paid funnel.
- Responsive SVG data visualization.

## API

`GET /api/metrics?period=30D` returns revenue, active users, activation, churn and chart-series data. Accepted periods are `7D`, `30D` and `90D`.

## Development

```bash
npm install
npm run dev
```

Use `vercel dev` to include the API locally. Production: [northstar-gamma-five.vercel.app](https://northstar-gamma-five.vercel.app).

See [CASE_STUDY.md](./CASE_STUDY.md) for product and dashboard decisions.
