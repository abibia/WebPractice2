// server.js
import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const galleryDir = path.join(process.cwd(), "assets/gallery");

app.use("/assets", express.static("assets"));

app.get("/api/gallery", (req, res) => {
    fs.readdir(galleryDir, (err, files) => {
        if (err) return res.status(500).json({ error: "Failed to read directory" });
        const images = files.filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
        res.json(images);
    });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
