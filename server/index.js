require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 4000;
const KEY = process.env.GOOGLE_API_KEY;
if (!KEY) {
  console.error('Missing GOOGLE_API_KEY in env');
  process.exit(1);
}

app.use(helmet());
app.use(cors({ origin: true }));
app.use(express.json());

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60
});
app.use(limiter);

// Simple health check
app.get('/api/health', (req, res) => res.json({ ok: true }));

// /api/placeSearch?q=... -> Google Places Text Search
app.get('/api/placeSearch', async (req, res) => {
  const q = req.query.q;
  if (!q) return res.status(400).json({ error: 'Missing query q' });
  try {
    const r = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
      params: { query: q, key: KEY }
    });
    res.json(r.data);
  } catch (err) {
    console.error(err?.response?.data || err.message);
    res.status(500).json({ error: 'External API error' });
  }
});

// /api/geocode?address=...
app.get('/api/geocode', async (req, res) => {
  const address = req.query.address;
  if (!address) return res.status(400).json({ error: 'Missing address' });
  try {
    const r = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: { address, key: KEY }
    });
    res.json(r.data);
  } catch (err) {
    console.error(err?.response?.data || err.message);
    res.status(500).json({ error: 'External API error' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
