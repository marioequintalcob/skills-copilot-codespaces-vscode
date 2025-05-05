// Create web server
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample data
let comments = [
    { id: 1, comment: 'This is a great post!' },
    { id: 2, comment: 'I learned a lot from this.' },
];

// Routes
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const newComment = {
        id: comments.length + 1,
        comment: req.body.comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});