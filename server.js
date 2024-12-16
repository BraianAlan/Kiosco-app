// Iportar dotenv
require('dotenv').config();

// Importar Express
const express = require('express');
const app = express();

// Configurar el puerto
const PORT = process.env.PORT || 3000;

// Llamo a la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  
  db.connect((err) => {
    if (err) throw err;
    console.log('Base de datos conectada');
  });
  
// Ruta inicial
app.get('/', (req, res) => {
  res.send('¡Hola, Mundo! Tu servidor está funcionando.');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });






