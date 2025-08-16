

function jumpText() {
    const element = document.getElementById("jump");
    if (!element) return;
    const originalSize = parseInt(window.getComputedStyle(element).fontSize, 10);
    const maxSize = originalSize + 5;
    let currentSize = originalSize;
    let direction = 1;
    const interval = setInterval(() => {
        currentSize += direction;
        element.style.fontSize = currentSize + 'px';
        if (currentSize >= maxSize || currentSize <= originalSize) {
            direction *= -1;
        }
    }, 50); // Adjust speed as needed
}


document.addEventListener("DOMContentLoaded", function () {
    jumpText();
});
