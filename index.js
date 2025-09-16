const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor rodando com sucesso!');
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
  });
}

module.exports = app; // Exporta para os testes
