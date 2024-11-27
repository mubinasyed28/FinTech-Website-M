const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');

// Get item width
const itemWidth = items[0].getBoundingClientRect().width;

// Arrange items next to each other
items.forEach((item, index) => {
    item.style.left = itemWidth * index + 'px';
});

// Track current index
let currentIndex = 0;

const moveToItem = (index) => {
    const amountToMove = items[index].style.left;
    track.style.transform = `translateX(-${amountToMove})`;
    currentIndex = index;
};

// Left Button
leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        moveToItem(currentIndex - 1);
    }
});

// Right Button
rightButton.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
        moveToItem(currentIndex + 1);
    }
});
