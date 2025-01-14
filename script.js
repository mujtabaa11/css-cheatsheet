 // Toggle dropdowns
 document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', () => {
      const section = header.parentElement;
      section.classList.toggle('show');
      const span = header.querySelector('span');
      span.textContent = section.classList.contains('show') ? '-' : '+';
    });
  });

  // Search functionality
  const searchInput = document.getElementById('search');
  const sections = document.querySelectorAll('.section');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    sections.forEach(section => {
      const items = section.querySelectorAll('ul li');
      let hasMatch = false;

      items.forEach(item => {
        if (item.textContent.toLowerCase().includes(query)) {
          item.style.display = '';
          hasMatch = true;
        } else {
          item.style.display = 'none';
        }
      });

      section.style.display = hasMatch ? '' : 'none';
    });
  });