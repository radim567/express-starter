const express = require('express');
const path = require('path');

const logger = require('./middleware/logger');
const app = express();

/* app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

app.get('/about', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'about.html'))
); */

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Server running on port ${PORT}`));
