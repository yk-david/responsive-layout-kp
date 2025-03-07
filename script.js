// Toggle navigation
document.querySelector('.nav-toggle').addEventListener('click', () => {
  try {
    document.querySelector('.nav').classList.toggle('nav-hidden');
  } catch (error) {
    console.error('Something goes wrong...'); // Log any error
  }
});

function handleScroll() {
  const header = document.querySelector('header');
  let isScrolling;

  header.style.opacity = '0.85';

  // Clear previous timeout to prevent flickering
  clearTimeout(isScrolling);

  // Set timeout to restore opacity after user stops scrolling
  isScrolling = setTimeout(() => {
    header.style.opacity = '1';
  }, 200); // 200ms delay after scroll stops
}

// Control navigation opacity when scroll
window.addEventListener('scroll', handleScroll);
window.addEventListener('touchmove', handleScroll);