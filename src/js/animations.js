const colorChange = () => {
  document.querySelectorAll('.memory_card').forEach((element) => {
    element.classList.add('memory_card_animation');
  });
  setTimeout(() => {
    document.querySelectorAll('.memory_card').forEach((element) => {
      element.classList.remove('memory_card_animation');
    });
  }, 300);
};
export default colorChange;
