const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: a + b });
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('App running on port 3000'));
}
