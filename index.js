const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/permissions', (req, res) => {
  console.log('req > ', req.query);
  return res.json({ data: [{ id: '1' }, { id: '2' }], page: Number(req.query['page']) })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});