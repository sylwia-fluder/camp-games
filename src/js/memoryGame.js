import colorChange from './animations';
import drawPositionsForCards from './drawPositionsForCards';
import drawImagesForCards from './drawImagesForCards';
import CoordinatesOfCard from './coordinatesOfCard';
import Verification from './verifyMemoryCard';
import imagesData from './imagesData';


function MemoryGame() {
  const cardPositionArray = ['mc-a1', 'mc-a2', 'mc-a3', 'mc-a4', 'mc-b1', 'mc-b2', 'mc-b3', 'mc-b4', 'mc-c1', 'mc-c2', 'mc-c3', 'mc-c4', 'mc-d1', 'mc-d2', 'mc-d3', 'mc-d4'];
  const imagesArray = imagesData;
  let cardArray;
  const coordinateArray = [];
  let verify;

  this.createArrayOfPosition = () => {
    cardArray.forEach((card) => {
      coordinateArray.push(new CoordinatesOfCard(card.position1, card.image, card));
      coordinateArray.push(new CoordinatesOfCard(card.position2, card.image, card));
    });
  };
  this.play = () => {
    verify = new Verification(coordinateArray);
    document.querySelectorAll('.memory_card').forEach((element) => {
      element.addEventListener('click', verify.discoverCard);
    });
  };
  this.init = () => {
    document.getElementById('button_start_memory').classList.add('inactive');
    cardArray = drawImagesForCards(imagesArray.slice(), Array.from(document.querySelectorAll('.memory_card')));
    cardArray = cardArray.slice(0, 8);
    cardArray = drawPositionsForCards(cardArray, cardPositionArray.slice());
    this.createArrayOfPosition();
    colorChange();
    this.play();
  };
}
export default MemoryGame;
