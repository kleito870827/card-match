import React from 'react';
import LevelBox from './LevelBox';

class ChooseLevel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gameMusic: new Audio('music/Theyre-Here_Looping.mp3')
    }
  }
  componentDidMount (){
      const myAudio = this.state.gameMusic;
      myAudio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
    this.props.startApp && myAudio.play();
    this.props.mute ? myAudio.muted = true : myAudio.muted = false;
  }
  componentWillUnmount() {
    const myAudio = this.state.gameMusic;

    // const fadePoint = myAudio.duration - 2;
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
          if (myAudio.volume === 1.3877787807814457e-16) {
              myAudio.pause();
              clearInterval(fadeAudio);
          }
      }, 200);
    // myAudio.pause();
  }
  componentDidUpdate(){
    const myAudio = this.state.gameMusic;

      myAudio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
    this.props.startApp && myAudio.play();

    this.props.mute ? myAudio.muted = true : myAudio.muted = false;
  }
  render(){
    return(
      <div className="ChooseLevel">
        <h1>Choose your level</h1>
        <LevelBox levelChoose={this.props.levelChoose} levels={this.props.levels} />
      </div>
    )
  }
};

export default ChooseLevel;
