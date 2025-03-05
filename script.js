document.querySelector('.nav-toggle').addEventListener('click', () => {
  try {
    document.querySelector('.nav').classList.toggle('nav-hidden');
  } catch (error) {
    console.error('Something goes wrong...'); // Log any error
  }
});