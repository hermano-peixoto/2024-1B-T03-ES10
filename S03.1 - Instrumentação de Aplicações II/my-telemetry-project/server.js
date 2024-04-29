
const express = require('express');
const app = express();
const PORT = 3000;

// Handle requests
app.get('/', (req, res) => {
  res.send(`Current Time: ${new Date().toISOString()}`);
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
