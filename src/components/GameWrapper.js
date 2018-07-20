import React from 'react';

import Card from './Card';
import WinGame from './WinGame';
// import '../styles/components/GameWrapper.scss';

class GameWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cards: [
        {cardsId: 'c1', cardImage: 'images/card-1.jpg', match: false},
        {cardsId: 'c2', cardImage: 'images/card-2.jpg', match: false},
        {cardsId: 'c3', cardImage: 'images/card-3.jpg', match: false},
        {cardsId: 'c4', cardImage: 'images/card-4.jpg', match: false},
        {cardsId: 'c5', cardImage: 'images/card-5.jpg', match: false},
        {cardsId: 'c6', cardImage: 'images/card-6.jpg', match: false},
        {cardsId: 'c7', cardImage: 'images/card-7.jpg', match: false},
        {cardsId: 'c8', cardImage: 'images/card-8.jpg', match: false},
        {cardsId: 'c9', cardImage: 'images/card-9.jpg', match: false},
        {cardsId: 'c10', cardImage: 'images/card-10.jpg', match: false},
        {cardsId: 'c11', cardImage: 'images/card-11.jpg', match: false},
        {cardsId: 'c12', cardImage: 'images/card-12.jpg', match: false}
      ],
      randArray: [],
      oldCard: undefined,
      winGame: false,
      gameMusic: new Audio('music/Fantascape_Looping.mp3')
    }
  }

  handleOnClickFlip = (e) => {
    let currentCard = e.currentTarget;
    let currentCardFlipId = currentCard.dataset.cards_id;
    let currentCardKey = currentCard.dataset.united_key;
    let oldCard = this.state.oldCard;
    let oldCardFlipId = oldCard ? oldCard.dataset.cards_id : undefined;
    let oldCardKey = oldCard ? oldCard.dataset.united_key : undefined;
    let newArray = [];
    // e.currentTarget.classList.contains('flipper-card')
    e.currentTarget.classList.toggle('flipper-card');
    if(oldCard && oldCardFlipId && oldCard.classList.contains('flipper-card') && currentCard.classList.contains('flipper-card')){
      if((currentCardFlipId === oldCardFlipId) && (currentCardKey != oldCardKey)){
        // console.log(currentCardFlipId);
        // console.log(oldCardFlipId);
        // newArray = this.state.randArray.filter(function( obj ) {
        //     return obj.cardsId !== currentCardFlipId;
        // });
        let winGame = true;
        this.state.randArray.map((elem) => {
          if(elem.cardsId === currentCardFlipId){
            elem.match = true;
          }
          if(elem.match && winGame){
            winGame = true;
          }else{
            winGame = false;
          }
        });
        if(winGame){
          this.setState(() => ({winGame: true}))
          const myAudio = this.state.gameMusic;
          const fadePoint = myAudio.currentTime - 7;
          // console.log(myAudio.currentTime);
          // console.log(fadePoint);
          const fadeAudio = setInterval(function () {
            // console.log(myAudio.currentTime);
                // Only fade if past the fade out point or not at zero already
                if ((myAudio.currentTime >= fadePoint) && (myAudio.volume != 0.0)) {
                    myAudio.volume -= 0.1;
                    // console.log(myAudio.volume);
                }
                // When volume at zero stop all the intervalling
                if (myAudio.volume === 2.7755575615628914e-17) {
                    myAudio.pause();
                    clearInterval(fadeAudio);
                }
            }, 200);
        }
        setTimeout(() => {
          currentCard.closest('.flip-container').classList.add('match-cards');
          oldCard.closest('.flip-container').classList.add('match-cards');
        }, 700);
        this.setState(() => ({oldCard: undefined}));
      }else{
        setTimeout(() => {
          currentCard.classList.remove('flipper-card');
          oldCard.classList.remove('flipper-card');
          oldCard = this.setState(() => ({oldCard: undefined}));
        }, 700);
      }
    }else{
      this.setState(() => ({oldCard: currentCard}));
    }
  }
  componentDidMount(){
    const myArray = this.state.cards;
    if(this.props.levelChoose === 'b1') myArray.length -= 6;
    // if(this.props.levelChoose === 'b1') myArray.length -= 10;
    if(this.props.levelChoose === 'i2') myArray.length -= 3;
    const clone = myArray.slice(0);
    const unitedArray = [...myArray, ...clone];
    const randArray = unitedArray.sort(function() {return Math.random() - 0.5});
    this.setState(() => ({randArray}));

    const myAudio = this.state.gameMusic;
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    myAudio.play();
    myAudio.volume = 0;

    const fadePoint = myAudio.currentTime + 7;
    // console.log(myAudio.currentTime);
    // console.log(fadePoint);
    const fadeAudio = setInterval(function () {
      // console.log(myAudio.currentTime);
          // Only fade if past the fade out point or not at zero already
          if ((myAudio.currentTime <= fadePoint)) {
              myAudio.volume += 0.1;
              // console.log(myAudio.volume);
          }
          // When volume at zero stop all the intervalling
          if (myAudio.volume === 0.9999999999999999) {
              clearInterval(fadeAudio);
          }
      }, 200);
    this.props.mute ? myAudio.muted = true : myAudio.muted = false;
  }
  componentDidUpdate(){
    const myAudio = this.state.gameMusic;
    this.props.mute ? myAudio.muted = true : myAudio.muted = false;
  }
  componentWillUnmount() {
    const myAudio = this.state.gameMusic;
    const fadePoint = myAudio.currentTime - 7;
    // console.log(myAudio.currentTime);
    // console.log(fadePoint);
    const fadeAudio = setInterval(function () {
      // console.log(myAudio.currentTime);
          // Only fade if past the fade out point or not at zero already
          if ((myAudio.currentTime >= fadePoint) && (myAudio.volume != 0.0)) {
            // console.log(myAudio.volume);
            if(myAudio.volume != 2.7755575615628914e-17){
              myAudio.volume -= 0.1;
            }
              // console.log(myAudio.volume);
          }
          // When volume at zero stop all the intervalling
          if (myAudio.volume === 2.7755575615628914e-17) {
              myAudio.pause();
              clearInterval(fadeAudio);
          }
      }, 200);
  }
  render() {
    return(
      <div className={`game-wrapper level_class${this.props.levelChoose}`}>
      {this.state.winGame ? <WinGame /> : (
        this.state.randArray.map((card, index) => {
          return(
            <Card key={index} flip={this.handleOnClickFlip} unitedKey={`card${index}`} cardsId={card.cardsId} back={card.cardImage} />
          )
        }))}
    </div>
    )
  }
};

export default GameWrapper;
