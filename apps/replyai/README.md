# ReplyAI

An AI-assisted customer-support workspace designed to reduce context switching while keeping the agent in control of every message.

## Features

- Prioritized conversation inbox and customer context.
- Reply and private-note modes.
- Contextual server-generated reply drafts.
- Editable drafts with confidence feedback.
- Close, reopen and resolve interaction states.

## API

`POST /api/draft` accepts a customer name, ticket subject and priority. It returns an editable support draft, model identifier and confidence score. Drafts are never sent automatically.

## Development

```bash
npm install
npm run dev
```

Use `vercel dev` to run the draft endpoint. Production: [replyai-pi.vercel.app](https://replyai-pi.vercel.app).

See [CASE_STUDY.md](./CASE_STUDY.md) for the AI interaction principles.
