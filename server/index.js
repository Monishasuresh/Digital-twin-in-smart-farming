const express = require('express');
const router = require('./routes');


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
})

app.use("/api/v1/user",router);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})