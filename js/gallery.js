// Fetch images from API
function fetchImages(filterWord) {
    fetch('/api/images')
        .then(response => response.json())
        .then(data => {
            const gallery = document.querySelector('.gallery');
            const filteredImages = data.images.filter(imageName => {
                const lowerCaseName = imageName.toLowerCase();
                const lowerFilterWord = filterWord.toLowerCase();
                return lowerCaseName.startsWith(lowerFilterWord);
            });

            gallery.innerHTML = '';

            filteredImages.forEach(imageName => {
                // Create gallery-item div
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';

                // Create a wrapper for picture and caption
                const imageWrapper = document.createElement('div');
                imageWrapper.className = 'image-wrapper';
                imageWrapper.style.position = 'relative';
                imageWrapper.style.display = 'inline-block';

                // Create picture element
                const picture = document.createElement('picture');

                // Create img element
                const img = document.createElement('img');
                const imgSrc = `/uploads/${imageName}`;
                img.src = imgSrc;
                img.alt = String(imageName);
                // Make image clickable to open in new tab
                galleryItem.onclick = () => window.open(imgSrc, "_blank");
                galleryItem.style.cursor = 'pointer';

                // Create caption
                const caption = document.createElement('p');
                caption.textContent = imageName.replace(/\.[^/.]+$/, '');

                // Assemble the structure
                picture.appendChild(img);
                imageWrapper.appendChild(picture);
                imageWrapper.appendChild(caption);
                galleryItem.appendChild(imageWrapper);
                gallery.appendChild(galleryItem);
            });
        })
        .catch(error => console.error('Error loading images:', error));
}