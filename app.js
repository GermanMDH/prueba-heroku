const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hola');
});

app.get('/login', (req, res) => {
  res.send('Login');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Bien ahi genio iniciaste el servidor en la direccion ');
});
