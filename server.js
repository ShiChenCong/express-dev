import express from 'express';
import { dev } from './doc/dev';

const app = express()

app.get('/', function (req, res) {
  res.send(dev.a)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})