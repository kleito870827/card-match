import React from 'react';
import '../styles/components/_WinGame.scss';

const WinGame = () => (
  <div>
    <h1>Good Job</h1>
    <div>
      <img className="winner-img" src="images/winner.png" alt="Winner"/>
    </div>
    <h2>Victory</h2>
  </div>
);

export default WinGame;
