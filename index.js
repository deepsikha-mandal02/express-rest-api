const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set up middleware to parse the request body
app.use(bodyParser.json());

// Array to store blog posts
let posts = [];

// Endpoint to add a new blog post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    timestamp: new Date().toISOString(),
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// Endpoint to retrieve all blog posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
