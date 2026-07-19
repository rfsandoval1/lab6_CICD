const express = require('express');
const app = express();
const port = 3000;  

app.get('/', (req, res) => {
  res.send('Integracion Continua hola');
});

app.listen(port, () => {
  console.log(`servidor esta aca http://localhost:${port}`);
  
}); 