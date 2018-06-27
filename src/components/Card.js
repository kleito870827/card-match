import React from 'react';

// import '../styles/components/Card.scss';

const Card = (props) => (
    <div className="flip-container">
      <div className="flipper" onClick={props.flip} data-cards_id={props.cardsId}>
    		<div className="front" style={{backgroundImage: 'url(images/back-card.png)'}}></div>
    		<div className="back" style={{backgroundImage: `url(${props.back})`}}></div>
  	  </div>
    </div>
);

export default Card;
