// Importar Express
const express = require('express');
const app = express();

// Configurar el puerto
const PORT = 3000;

// Ruta inicial
app.get('/', (req, res) => {
  res.send('¡Hola, Mundo! Tu servidor está funcionando.');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
