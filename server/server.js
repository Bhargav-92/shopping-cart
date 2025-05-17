require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post('/checkout', async (req, res) => {
  let items = req.body.items;
  let lineItems = [];

  items.forEach((items) => {
    lineItems.push({
      price: items.id,
      quantity: items.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:5173/success',
    cancel_url: 'http://localhost:5173/cancel',
  });

  res.send(JSON.stringify({ url: session.url }));
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
