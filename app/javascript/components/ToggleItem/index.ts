import { IEventRegistration } from '../types/IEventRegistration';

class ToggleItem implements IEventRegistration {
  run(): void {
    const toggleHeaders = document.querySelectorAll('.toggle-header');

    toggleHeaders.forEach(header => {
      header.addEventListener('click', (e): void => {
        const parent = (<HTMLElement>e.target).closest('.toggle-item');
        const content = parent.querySelector('.toggle-content');
    
        if (content.classList.contains('toggle-content-open')) {
          content.classList.remove('toggle-content-open');
        } else {
          content.classList.add('toggle-content-open');
        }
      });
    });
  }
}

export { ToggleItem };
