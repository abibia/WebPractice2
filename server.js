const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Serve static files from current directory (WebPractice)
app.use(express.static(__dirname));

// Serve uploads folder
app.use('/uploads', express.static('assets/uploads'));

// API endpoint to get list of images
app.get('/api/images', (req, res) => {
    const uploadsDir = path.join(__dirname, 'assets/uploads');

    fs.readdir(uploadsDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to read directory' });
        }

        const imageFiles = files.filter(file => {
            return /\.(jpg|jpeg|png|gif|webp)$/i.test(file);
        });

        res.json({ images: imageFiles });
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});