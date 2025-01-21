# Google Workspace Viewer

A lightweight web application that allows users to view and interact with Google Workspace documents (Docs, Sheets, Slides, Forms) with customizable viewing modes.

## Features

- Support for multiple Google Workspace document types:
  - Google Docs
  - Google Sheets 
  - Google Slides
  - Google Forms
- Two viewing modes:
  - Full Access Mode - Complete interface with all features enabled
  - Minimal UI Mode - Streamlined interface for focused content viewing
- Clean and modern user interface
- Responsive design
- Easy document loading via document ID

## Installation

```bash
git clone https://github.com/yourusername/google-workspace-viewer.git

cd google-workspace-viewer
npm install
npm start
```

- Open your browser and navigate to http://localhost:3000
- Select the document type from the dropdown menu
- Enter the Google Workspace document ID
- Choose your preferred viewing mode:
  - Full Access Mode: Complete Google Workspace interface with all features
  - Minimal UI Mode: Streamlined interface with essential tools only
  - Click "Load Document" to view the content



## Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
Google Workspace API integration

## Project Structure
public/index.html - Main frontend interface
server.js - Express server setup
Static file serving for frontend assets

## Development
The server runs on port 3000 by default and serves static files from the public directory.