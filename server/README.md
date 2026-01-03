# TravelGo backend

This minimal Express backend proxies requests to Google Maps APIs and keeps the API key on the server side.

## Setup

1. Copy `.env.example` to `.env` and put your `GOOGLE_API_KEY` there (DO NOT COMMIT `.env`).
2. From `/server` run:

```bash
npm install
npm run dev
```

The server will run on `http://localhost:4000` by default.

## Endpoints
- `GET /api/health` — simple health check
- `GET /api/placeSearch?q=...` — proxies to Google Places Text Search
- `GET /api/geocode?address=...` — proxies to Google Geocoding API

## Security
- Keep your `.env` secret and do not commit it.
- Restrict your API key via Google Cloud Console (HTTP referrer or IP restrictions).
- Consider additional rate limiting or authentication for production.
