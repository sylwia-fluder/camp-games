const drowCard = (cardArray, positions) => {
  const modifiedArray = cardArray.map((card) => {
    const position1 = positions[Math.floor(Math.random() * positions.length)];
    positions.splice(positions.indexOf(position1), 1);

    const position2 = positions[Math.floor(Math.random() * positions.length)];
    positions.splice(positions.indexOf(position2), 1);
    return {
      ...card,
      position1,
      position2,
    };
  });
  return modifiedArray;
};

export default drowCard;
