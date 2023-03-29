const button = document.querySelector('[data-about="button"]');

export const statusOfAboutButton = () => {
  button.addEventListener('click', () => {
    if (!button.classList.contains('is-open')) {
      button.innerHTML = 'Свернуть';
      button.classList.toggle('is-open');
    } else {
      button.innerHTML = 'Подробнее';
      button.classList.toggle('is-open');
    }
  });
};
