require('dotenv').config()
const path = require('path');
const express = require('express');

const port = process.env.PORT;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(port, () => {
  console.log(`${new Date().toString()}: App listening on port ${port}!`)
});