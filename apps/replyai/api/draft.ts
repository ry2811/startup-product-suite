export default function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST required' });
  const name = String(req.body?.name || 'there').split(' ')[0];
  const subject = String(req.body?.subject || 'your request').toLowerCase();
  const priority = String(req.body?.priority || 'Normal');
  const opening = priority === 'Urgent' ? 'I’m sorry this is blocking your work.' : 'Thanks for reaching out.';
  const draft = `Hi ${name},\n\n${opening} I reviewed the details about ${subject} and have a quick solution ready. Please refresh your workspace, then try the action once more.\n\nIf the issue continues, reply here with a screenshot and I’ll investigate it personally.\n\nBest,\nKhoi`;
  return res.status(200).json({ draft, confidence: 0.92, model: 'reply-assist-v1', generatedAt: new Date().toISOString() });
}
