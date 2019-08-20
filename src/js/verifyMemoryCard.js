function Verification(coordinateArray) {
  this.arrayOfDiscoverCard = [];
  this.arrayOfDiscoverCardDOM = [];
  this.coordinateArray = coordinateArray;
  this.counter = 2;
  this.clickCounter = 0;

  this.getCoordinateArray = () => this.coordinateArray;

  this.end = () => {
    console.log(`Koniec gry: twój wynik to ${this.clickCounter} kliknięć. Spróbuj ponownie`);
  };

  this.correctCheck = () => this.arrayOfDiscoverCard[0].image === this.arrayOfDiscoverCard[1].image;

  this.discoverCard = (event) => {
    this.clickCounter += 1;
    const cardDOM = event.currentTarget;
    const card = this.coordinateArray.find((coordinate) => coordinate.position === cardDOM.classList[1]);
    cardDOM.innerHTML = card.image;
    this.arrayOfDiscoverCardDOM.push(cardDOM);
    this.arrayOfDiscoverCard.push(card);
    if (this.arrayOfDiscoverCard.length === this.counter) {
      if (this.correctCheck()) {
        console.log('correct');
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
        console.log('incorrect');
      }
      this.arrayOfDiscoverCard.length = 0;
      this.arrayOfDiscoverCardDOM.length = 0;
    }
  };
}

export default Verification;
