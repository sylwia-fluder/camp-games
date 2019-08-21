function Verification(coordinateArray) {
  this.arrayOfDiscoverCard = [];
  this.arrayOfDiscoverCardDOM = [];
  this.coordinateArray = coordinateArray;
  this.counter = 2;
  this.clickCounter = 0;

  this.getCoordinateArray = () => this.coordinateArray;

  this.end = () => {
  };

  this.correctCheck = () => this.arrayOfDiscoverCard[0].image === this.arrayOfDiscoverCard[1].image;

  this.discoverCard = (event) => {
    this.clickCounter += 1;
    const cardDOM = event.currentTarget;
    const card = this.coordinateArray.find((coordinate) => coordinate.position === cardDOM.classList[1]);
    cardDOM.innerHTML = ` <img src="../images/animals/${card.image}.png" alt="${card.image}" height="100%"> `;
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
          dom[0].innerHTML = '<i class="fas fa-brain fa-4x"></i>';
          dom[1].innerHTML = '<i class="fas fa-brain fa-4x"></i>';
        }, 1000, [this.arrayOfDiscoverCardDOM[0], this.arrayOfDiscoverCardDOM[1]]);
      }
      this.arrayOfDiscoverCard.length = 0;
      this.arrayOfDiscoverCardDOM.length = 0;
    }
  };
}

export default Verification;