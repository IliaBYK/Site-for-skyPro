const btnFilter = document.getElementById('filter-btn');
const filter = document.getElementById('filter');

btnFilter.addEventListener('click', () => {
  if (filter.classList.contains('visible')) {
    filter.classList.remove('visible');
  } else {
    filter.classList.add('visible');
  }
})
