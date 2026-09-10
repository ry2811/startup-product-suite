const seedTasks = [
  { id: 101, title: 'Interview 5 power users', status: 'Backlog', label: 'Research', user: 'AN' },
  { id: 102, title: 'Map onboarding drop-offs', status: 'Backlog', label: 'Growth', user: 'MK' },
  { id: 103, title: 'Design empty states', status: 'In progress', label: 'Design', user: 'KN' },
  { id: 104, title: 'Build billing settings', status: 'In progress', label: 'Frontend', user: 'JL' },
  { id: 105, title: 'Setup event tracking', status: 'Review', label: 'Data', user: 'AN' },
  { id: 106, title: 'Improve search latency', status: 'Done', label: 'Backend', user: 'MK' },
];

export default function handler(req: any, res: any) {
  if (req.method === 'GET') return res.status(200).json({ tasks: seedTasks, source: 'flowboard-api', syncedAt: new Date().toISOString() });
  if (req.method === 'POST') {
    const title = String(req.body?.title || '').trim();
    if (title.length < 3) return res.status(400).json({ error: 'Task title must contain at least 3 characters.' });
    return res.status(201).json({ task: { id: Date.now(), title, status: 'Backlog', label: 'Product', user: 'KN' } });
  }
  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Method not allowed' });
}
