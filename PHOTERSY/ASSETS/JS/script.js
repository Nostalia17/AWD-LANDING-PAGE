document.addEventListener('DOMContentLoaded', function () {
    staggerGrid();
});

function staggerGrid() {
    const gallery = document.getElementById('imageGallery');
    const images = Array.from(gallery.getElementsByTagName('img'));

    const imagesPerRow = 3; 
    let currentRow = 1;
    let order = 1;

    images.forEach((image, index) => {
        image.style.order = order;

        if (index % imagesPerRow === imagesPerRow - 1) {
            currentRow++;
            order = currentRow * imagesPerRow;
        } else {
            order++;
        }
    });
}

function showDescription(title, description) {
    const descriptionText = document.getElementById('descriptionText');
    descriptionText.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
    `;
    document.getElementById('descriptionContainer').style.display = 'flex';
}

function hideDescription() {
    document.getElementById('descriptionContainer').style.display = 'none';
}
