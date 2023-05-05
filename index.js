const express = require('express');
const path = require('path');
const app = express();

const members = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    status: 'active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    status: 'inactive',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bobjohnson@example.com',
    status: 'active',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alicebrown@example.com',
    status: 'inactive',
  },
];

/* app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

app.get('/about', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'about.html'))
); */

// Get all members
app.get('/api/members', (req, res) => res.json(members));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Server running on port ${PORT}`));
