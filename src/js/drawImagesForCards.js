const drawImagesForCards = (images, cardArray) => {
  const modifiedCards = cardArray.map((card) => {
    const image = images[Math.floor(Math.random() * images.length)];
    images.splice(images.indexOf(image), 1);
    return {
      ...card,
      image,
    };
  });
  return modifiedCards;
};

export default drawImagesForCards;
