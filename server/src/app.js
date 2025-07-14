const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Example route for testing
app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

// Mount posts router
const postsRouter = require('../routes/postRoutes');
app.use('/api/posts', postsRouter);

module.exports = app;