import colorChange from './animations';

function Verification(coordinateArray) {
  this.arrayOfDiscoverCard = [];
  this.arrayOfDiscoverCardDOM = [];
  this.coordinateArray = coordinateArray;
  this.counter = 2;
  this.clickCounter = 0;

  this.getCoordinateArray = () => this.coordinateArray;

  this.end = () => {
    colorChange();
    setTimeout((clickCounter) => {
      document.querySelector('.memory_game_box').classList.add('endingMesssage');
      document.querySelector('.memory_game_box').innerHTML = `<h2>Gratulacje</h2><p>Ukończyłeś grę z wynikiem ${clickCounter} kliknięć</p>`;
    }, 1000, this.clickCounter);
  };

  this.correctCheck = () => this.arrayOfDiscoverCard[0].image === this.arrayOfDiscoverCard[1].image;

  this.discoverCard = (event) => {
    this.clickCounter += 1;
    const cardDOM = event.currentTarget;
    const card = this.coordinateArray.find((coordinate) => coordinate.position === cardDOM.classList[1]);
    cardDOM.querySelector('i').style.visibility = 'hidden';
    cardDOM.style.background = `${card.image.adres}`;
    cardDOM.style.backgroundSize = '100% 100%';
    this.arrayOfDiscoverCardDOM.push(cardDOM);
    this.arrayOfDiscoverCard.push(card);
    if (this.arrayOfDiscoverCard.length === this.counter) {
      if (this.correctCheck()) {
        document.querySelectorAll(`.${this.arrayOfDiscoverCard[0].position}`).forEach((element) => {
          element.removeEventListener('click', this.discoverCard);
        });
        document.querySelectorAll(`.${this.arrayOfDiscoverCard[1].position}`).forEach((element) => {
          element.removeEventListener('click', this.discoverCard);
        });
        coordinateArray.splice(coordinateArray.indexOf(this.arrayOfDiscoverCard[0]), 1);
        coordinateArray.splice(coordinateArray.indexOf(this.arrayOfDiscoverCard[1]), 1);
        if (this.coordinateArray.length === 0) {
          this.end();
        }
      } else {
        setTimeout((dom) => {
          dom[0].querySelector('i').style.visibility = 'visible';
          dom[0].style.background = ' rgb(254, 162, 212)';
          dom[1].querySelector('i').style.visibility = 'visible';
          dom[1].style.background = ' rgb(254, 162, 212)';
        }, 1000, [this.arrayOfDiscoverCardDOM[0], this.arrayOfDiscoverCardDOM[1]]);
      }
      this.arrayOfDiscoverCard.length = 0;
      this.arrayOfDiscoverCardDOM.length = 0;
    }
  };
}

export default Verification;
