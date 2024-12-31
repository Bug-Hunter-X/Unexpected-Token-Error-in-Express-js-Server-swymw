const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware for parsing JSON

app.get('/', (req, res) => {
  try {
    //Process request safely, handle potential errors
    res.send('Hello from Express!');
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});