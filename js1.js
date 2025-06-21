// Assuming you have a backend to store and retrieve ratings
const ratings = document.querySelectorAll('.rating i');

ratings.forEach(star => {
    star.addEventListener('click', () => {
        // Implement logic to send rating to backend and update UI
        // For example, you could change the color of clicked stars
        star.style.color = 'black';
    });
});