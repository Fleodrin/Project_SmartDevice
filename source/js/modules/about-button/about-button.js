const buttons = document.querySelectorAll('[data-about="button"]');

export const toggleAboutButtons = () => {
  if (!buttons) {
    return;
  }
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (!button.classList.contains('is-open')) {
        button.innerHTML = 'Свернуть';
        button.classList.toggle('is-open');
      } else {
        button.innerHTML = 'Подробнее';
        button.classList.toggle('is-open');
      }
    });
  });
};
