const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001; // Use dynamic port for deployment

// Enable CORS for all routes
app.use(cors());

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get image list dynamically
app.get('/api/images', (req, res) => {
  const imageDir = path.join(__dirname, 'public', 'unsensored');

  fs.readdir(imageDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read the images directory' });
    }

    // Filter for image files (e.g., jpg, png, svg)
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|svg)$/i.test(file));

    // Map to full URLs for images in the public folder
    const imagePaths = imageFiles.map(file => `/unsensored/${file}`);

    res.json(imagePaths); // Respond with a JSON array of image paths
  });
});

// Start the server on the dynamic or local port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
