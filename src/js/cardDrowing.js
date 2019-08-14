/* eslint-disable no-plusplus */
class Card {
  constructor(image, position1, position2) {
    this.image = image;
    this.position1 = position1;
    this.position2 = position2;
  }
}

const card1 = new Card('image1');
const card2 = new Card('image2');
const card3 = new Card('image3');
const card4 = new Card('image4');
const card5 = new Card('image5');
const card6 = new Card('image6');
const card7 = new Card('image7');
const card8 = new Card('image8');

const cardArray = [card1, card2, card3, card4, card5, card6, card7, card8];

const positions = ['mc-a1', 'mc-a2', 'mc-a3', 'mc-a4', 'mc-b1', 'mc-b2', 'mc-b3', 'mc-b4', 'mc-c1', 'mc-c2', 'mc-c3', 'mc-c4', 'mc-d1', 'mc-d2', 'mc-d3', 'mc-d4'];

for (let i = 0; i < cardArray.length; i++) {
  const position1 = positions[Math.floor(Math.random() * positions.length)];
  const position2 = positions[Math.floor(Math.random() * positions.length)];
  positions.splice(positions.indexOf(position1), 1);
  positions.splice(positions.indexOf(position2), 1);
  cardArray[i].position1 = position1;
  cardArray[i].position2 = position2;
}
