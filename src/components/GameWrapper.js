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
        {cardsId: 'c10', cardImage: 'images/card-10.jpg', match: false}
      ],
      randArray: [],
      oldCard: undefined,
      winGame: false
    }
  }

  handleOnClickFlip = (e) => {
    let currentCard = e.currentTarget;
    let currentCardFlipId = currentCard.dataset.cards_id;
    let oldCard = this.state.oldCard;
    let oldCardFlipId = oldCard ? oldCard.dataset.cards_id : undefined;
    let newArray = [];
    // e.currentTarget.classList.contains('flipper-card')
    e.currentTarget.classList.toggle('flipper-card');
    if(oldCard && oldCardFlipId && oldCard.classList.contains('flipper-card') && currentCard.classList.contains('flipper-card')){
      if(currentCardFlipId === oldCardFlipId){
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
    if(this.props.levelChoose === 'b1') myArray.length -= 5;
    if(this.props.levelChoose === 'i2') myArray.length -= 3;
    const clone = myArray.slice(0);
    const unitedArray = [...myArray, ...clone];
    const randArray = unitedArray.sort(function() {return Math.random() - 0.5});
    this.setState(() => ({randArray}))
  }
  render() {
    return(
      <div className="game-wrapper">
      {this.state.winGame ? <WinGame /> : (
        this.state.randArray.map((card, index) => {
          return(
            <Card key={index} flip={this.handleOnClickFlip} cardsId={card.cardsId} back={card.cardImage} />
          )
        }))}
    </div>
    )
  }
};

export default GameWrapper;
