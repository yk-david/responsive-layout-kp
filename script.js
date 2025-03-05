document.querySelector('.nav-toggle').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the default action on click
  try {
    console.log('clicked!'); // Log click event
  } catch (error) {
    console.error('Something goes wrong...'); // Log any error
  }
});