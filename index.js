const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

app.get('/about', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'about.html'))
);

const PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Server running on port ${PORT}`));