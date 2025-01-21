const express = require('express');
const { google } = require('googleapis');
const app = express();

// Serve static files from public directory
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
