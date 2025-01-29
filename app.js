const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment port or default to 3000

// Middleware to parse JSON
app.use(express.json());

// Sample routes
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js API!');
});

app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
    ]);
});

app.post('/api/users', (req, res) => {
    const newUser = req.body;
    res.status(201).json({
        message: 'User created successfully!',
        user: newUser,
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
