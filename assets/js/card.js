const cardContainer = document.querySelector('.card-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cards = document.querySelectorAll('.card');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    cardContainer.style.transform = `translateX(-${currentIndex * 210}px)`;
  }
  toggleButtonVisibility();
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    cardContainer.style.transform = `translateX(-${currentIndex * 210}px)`;
  }
  toggleButtonVisibility();
});

function toggleButtonVisibility() {
  if (currentIndex === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (currentIndex === cards.length - 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}