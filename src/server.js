const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
const port = 5000;

const db = new sqlite3.Database('ma_base_de_donnees.db');

// Définir des routes ici...
app.get('/users', (req, res) => {
    db.all('SELECT * FROM User', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ users: rows });
    });
  });
  

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
