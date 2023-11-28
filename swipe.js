const prevButton = document.querySelector('.swipe-button.prev');
const nextButton = document.querySelector('.swipe-button.next');
const imageWrapper = document.querySelector('.image-wrapper');
const imageWidth = 100; // Adjust to match image width percentage

let currentImageIndex = 0;

prevButton.addEventListener('click', () => {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    imageWrapper.style.transform = `translateX(-${currentImageIndex * imageWidth}%)`;
  }
});

nextButton.addEventListener('click', () => {
  if (currentImageIndex < 9) {
    currentImageIndex++;
    imageWrapper.style.transform = `translateX(-${currentImageIndex * imageWidth}%)`;
  }
});
