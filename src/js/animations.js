const colorChange = () => {
  document.querySelectorAll('.memory_card').forEach((element) => {
    element.style.backgroundColor = 'rgb(255, 189, 225)';
  });
  setTimeout(() => {
    document.querySelectorAll('.memory_card').forEach((element) => {
      element.style.backgroundColor = 'rgb(254, 162, 212)';
    });
  }, 300);
};
export { colorChange };
