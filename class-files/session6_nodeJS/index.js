const express = require('express');
const app = express();

app.listen('3500');

app.get('/', (req, res) => {
   res.send('route okay!');
});