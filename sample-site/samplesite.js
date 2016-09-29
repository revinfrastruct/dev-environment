'use strict';
const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('It works! ☭\n');
});
app.listen(3000);
