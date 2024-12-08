document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  const numImages = 200;
  const baseImageUrl = 'cat.jpg';
  for (let i = 0; i < numImages; i++) {
    const img = document.createElement('img');
    img.src = `${baseImageUrl}?text=${i + 1}`;
    img.alt = `Image ${i + 1}`;
    gallery.appendChild(img);
  }
});
