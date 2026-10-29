# GrowthHikes public website

The public GrowthHikes marketing website. It presents GrowthHikes services, explains the problems we solve, and gives visitors a clear path to start a conversation.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Cloudflare deployment

This site is configured as a static asset Worker through `wrangler.jsonc`.

```bash
npm run deploy
```

Set `VITE_PUBLIC_API_URL` only when a production lead API is available. Without it, the inquiry form clearly remains in preview mode instead of pretending to submit customer data.
