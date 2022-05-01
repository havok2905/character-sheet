const ToggleItem = {
  run() {
    const toggleHeaders = document.querySelectorAll('.toggle-header');

    toggleHeaders.forEach(header => {
      header.addEventListener('click', e => {
        const parent = e.target.closest('.toggle-item');
        const content = parent.querySelector('.toggle-content');
    
        if (content.classList.contains('toggle-content-open')) {
          content.classList.remove('toggle-content-open');
        } else {
          content.classList.add('toggle-content-open');
        }
      });
    });
  }
};

export { ToggleItem };
