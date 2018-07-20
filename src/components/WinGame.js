import React from 'react';
import '../styles/components/_WinGame.scss';

class WinGame extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gameMusic : new Audio('music/Light-Years_V001_Looping.mp3')
    }
  }

  componentDidMount(){
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
  render(){
    return(
      <div>
        <h1>Good Job</h1>
        <div>
          <img className="winner-img" src="images/winner.png" alt="Winner"/>
        </div>
        <h2>Victory</h2>
      </div>
    )
  }
}

export default WinGame;
