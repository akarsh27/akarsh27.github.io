// Function to continuously scroll right with a loop back to the first card
function scrollRight() {
    const grid = document.querySelector('.featured-grid');
    const items = document.querySelectorAll('.featured-item');
    const itemWidth = items[0].clientWidth + 20; // Card width + gap

    // Scroll right by one card width
    grid.scrollBy({
        left: itemWidth,
        behavior: 'smooth'
    });

    // Add event listener to check if the scroll has reached the end
    grid.addEventListener('scroll', () => {
        if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth) {
            // Smoothly loop back to the first card
            setTimeout(() => {
                grid.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            }, 500); // Delay for smoother transition
        }
    });
}

// Smooth scrolling for anchor links (scrolls to section when clicking a link)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
