
document.addEventListener('DOMContentLoaded', () => {
  const expandAllButton = document.getElementById('expandAll'); // Button with ID expandAll

  expandAllButton.addEventListener('click', () => {
    const sections = document.querySelectorAll('.section');
    const isExpanded = expandAllButton.textContent === 'Collapse All';

    if (isExpanded) {
      // Collapse all sections
      sections.forEach(section => {
        section.classList.remove('show');
        const content = section.querySelector('.section-content');
        if (content) {
          content.style.display = 'none';
        }
        const toggleIcon = section.querySelector('.section-header span');
        if (toggleIcon) {
          toggleIcon.textContent = '+';
        }
      });
      expandAllButton.textContent = 'Expand All'; // Update button text
    } else {
      // Expand all sections
      sections.forEach(section => {
        section.classList.add('show');
        const content = section.querySelector('.section-content');
        if (content) {
          content.style.display = 'block';
        }
        const toggleIcon = section.querySelector('.section-header span');
        if (toggleIcon) {
          toggleIcon.textContent = '-';
        }
      });
      expandAllButton.textContent = 'Collapse All'; // Update button text
    }
  });
});


// Toggle dropdowns
document.addEventListener('DOMContentLoaded', () => {
  // Main section toggle
  document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', () => {
      const section = header.parentElement;
      section.classList.toggle('show');
      const content = section.querySelector('.section-content');
      if (content) {
        content.style.display = section.classList.contains('show') ? 'block' : 'none';
      }
      const toggleIcon = header.querySelector('span');
      if (toggleIcon) {
        toggleIcon.textContent = section.classList.contains('show') ? '-' : '+';
      }
    });
  });

  // Sub-section toggle
  document.querySelectorAll('.sub-header').forEach(subHeader => {
    subHeader.addEventListener('click', () => {
      const subSection = subHeader.parentElement;
      const subContent = subSection.querySelector('.sub-content');
      subSection.classList.toggle('show');
      if (subContent) {
        subContent.style.display = subSection.classList.contains('show') ? 'block' : 'none';
      }
      const toggleIcon = subHeader.querySelector('span');
      if (toggleIcon) {
        toggleIcon.textContent = subSection.classList.contains('show') ? '-' : '+';
      }
    });
  });
});


// Search functionality
const searchInput = document.getElementById('search');
const sections = document.querySelectorAll('.section');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  sections.forEach(section => {
    // Check main section header for a match
    const sectionHeader = section.querySelector('.section-header h2').textContent.toLowerCase();
    let sectionHasMatch = sectionHeader.includes(query);

    // Check all sub-section headers and items for a match
    const items = section.querySelectorAll('ul li, .sub-section .sub-header h3');
    let hasMatchInItems = false;

    items.forEach(item => {
      const itemText = item.textContent.toLowerCase();
      if (itemText.includes(query)) {
        item.style.display = ''; // Show matching item
        hasMatchInItems = true;
      } else {
        item.style.display = 'none'; // Hide non-matching item
      }
    });

    // Show/hide the section based on matches
    if (sectionHasMatch || hasMatchInItems) {
      section.style.display = ''; // Show section if any match is found
    } else {
      section.style.display = 'none'; // Hide section if no matches
    }
  });
});



