const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('Hola');
});

app.get('/login', (req, res) => {
  res.send('Login');
});

app.listen(3000, () => {
  console.log(
    'Bien ahi genio iniciaste el servidor en la direccion ',
    'http://localhost:3000'
  );
});
