const periods: Record<string, number> = { '7D': 0.28, '30D': 1, '90D': 2.7 };

export default function handler(req: any, res: any) {
  const period = String(req.query?.period || '30D').toUpperCase();
  const factor = periods[period] || 1;
  const wave = Math.round((Math.sin(Date.now() / 3600000) + 1) * 320);
  return res.status(200).json({
    period,
    revenue: Math.round((42840 + wave) * factor),
    users: Math.round(12784 * factor),
    activation: 64.8,
    churn: 2.4,
    series: [12, 18, 15, 26, 23, 35, 31, 46, 43, 56, 62, 58, 72, 69, 84].map(value => Math.round(value * factor)),
    generatedAt: new Date().toISOString(),
  });
}
