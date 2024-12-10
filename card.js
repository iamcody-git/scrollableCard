// Select all cards
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
const viewportHeight = window.innerHeight; // Get height of the viewport

// Set up the scroll listener
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY; // Get the current scroll position

  cards.forEach((card, index) => {
    // Calculate a base position for each card based on its index
    const basePosition = index * viewportHeight;

    // Calculate how far each card is from the current scroll position
    let distanceFromCenter = scrollPosition - basePosition;

    // To create a looping effect, reset the scroll when a card is far out of view
    if (distanceFromCenter > viewportHeight) {
      distanceFromCenter = distanceFromCenter - totalCards * viewportHeight;
    } else if (distanceFromCenter < -viewportHeight) {
      distanceFromCenter = distanceFromCenter + totalCards * viewportHeight;
    }

    // Apply a transform based on the card's distance from the viewport's center
    const translateY = distanceFromCenter * -0.15; // Moves card vertically
    const scale = Math.max(1 - Math.abs(distanceFromCenter / viewportHeight), 0.85); // Scale effect
    const opacity = Math.max(1 - Math.abs(distanceFromCenter / viewportHeight), 0.4); // Fade-out effect

    // Apply styles dynamically
    card.style.transform = `translateY(${translateY}px) scale(${scale})`;
    card.style.opacity = opacity;
  });
});
