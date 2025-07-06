// index.js
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/price', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
    );
    const price = response.data.bitcoin.usd;
    res.json({ btc_usd: price });
  } catch (error) {
    res.status(500).json({ error: 'Fehler beim Abrufen des BTC-Preises' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ BTC-Tracker läuft auf http://localhost:${PORT}`);
});
