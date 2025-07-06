const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/btc-price', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
    );
    const price = response.data.bitcoin.usd;
    res.json({ bitcoinPriceUSD: price });
  } catch (error) {
    console.error('Fehler beim Abrufen des Bitcoin-Preises:', error.message);
    res.status(500).json({ error: 'Fehler beim Abrufen des Bitcoin-Preises' });
  }
});

app.get('/', (req, res) => {
  res.send('BTC API läuft!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
