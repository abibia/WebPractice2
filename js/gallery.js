const folderPath = "assets/gallery/";

// Function to open images in a new tab
function openImage(src) {
    window.open(src, "_blank");
}

// Function to load gallery dynamically from Node.js API
async function loadGallery() {
    try {
        const res = await fetch("/api/gallery"); // Ask backend for image list
        const images = await res.json();

        const container = document.getElementById("galleryContainer");
        container.innerHTML = "";

        images.forEach(img => {
            const div = document.createElement("div");
            div.classList.add("gallery-item");
            div.onclick = () => openImage(folderPath + img);

            // Optional: Make a nicer title from filename
            const title = img
                .replace(/\.[^/.]+$/, "") // remove file extension
                .replace(/[_-]/g, " ")    // replace underscores/dashes with spaces
                .replace(/\b\w/g, c => c.toUpperCase()); // capitalize words

            div.innerHTML = `
        <picture>
          <img src="${folderPath + img}" alt="${title}">
        </picture>
        <p>${title}</p>
      `;

            container.appendChild(div);
        });
    } catch (err) {
        console.error("Failed to load gallery:", err);
    }
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", loadGallery);
