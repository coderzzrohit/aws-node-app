// index.js
const express = require('express');
const app = express();
const PORT = 3000;
 
// Dummy data
const users = [
  { id: 1, name: 'Rohit', email: 'rohit@example.com' },
  { id: 2, name: 'Amit', email: 'amit@example.com' },
  { id: 3, name: 'Sneha', email: 'sneha@example.com' },
  
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Simple Node API!');
});

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});
app.get('/test', (req, res) => {
  res.json("change data ");
});
app.get('/new', (req, res) => {
  res.send('AUTO DEPLOY WORKING Write now- ROHIT 🚀');
});

// GET single user by id
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Start server
app.listen(3000, '0.0.0.0', () => {
  console.log(`Server running on port 3000`);
});

