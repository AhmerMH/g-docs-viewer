const express = require('express');
const { google } = require('googleapis');
const app = express();

// Google Auth configuration
const auth = new google.auth.GoogleAuth({
  keyFile: './credentials.json',
  scopes: ['https://www.googleapis.com/auth/documents.readonly'],
});

// Serve static HTML
app.get('/view-doc', (req, res) => {
  const docId = '1W6vXi1cJ0z4IxJc6StZwmaDyU2xu9996rRmCHv88FGI';
  // const embedUrl = `https://docs.google.com/document/d/${docId}/edit?rm=demo`; // WORKS CORRECTLY
  const embedUrl = `https://docs.google.com/document/d/${docId}/edit?usp=sharing`;
  
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Google Doc Editor</title>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
          }
          .doc-container {
            height: 100vh;
            width: 100%;
          }
        </style>
      </head>
      <body>
        <iframe 
          class="doc-container"
          src="${embedUrl}"
          frameborder="0">
        </iframe>
      </body>
    </html>
  `;  
  res.send(html);
});

app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

app.get('/api/doc/:docId', async (req, res) => {
  try {
    const client = await auth.getClient();
    const docs = google.docs({ version: 'v1', auth: client });
    
    const docId = req.params.docId;
    const document = await docs.documents.get({
      documentId: docId,
    });

    res.json(document.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});