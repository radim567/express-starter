const express = require('express');
const path = require('path');
// const { engine } = require('express-handlebars');
const exphbs = require('express-handlebars');
const engine = exphbs.engine;
const logger = require('./middleware/logger');
const app = express();
const members = require('./Members');

/* app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

app.get('/about', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'about.html'))
); */

// Handlebars Middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage route
app.get('/', (req, res) =>
  res.render('index', { title: 'Member App', members })
);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Server running on port ${PORT}`));
