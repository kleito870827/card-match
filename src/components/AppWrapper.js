import React from 'react';
import createHistory from 'history/createBrowserHistory';
import {Link} from 'react-router-dom';

// components
import ChooseLevel from './ChooseLevel';
import GameWrapper from './GameWrapper';
import '../styles/components/_AppWrapper.scss';


export const history = createHistory();


class AppWrapper extends React.Component {
  state = {
    levels: [
      {id: 'b1', description: 'Beginner', icon: 'star-o'},
      {id: 'i2', description: 'Intermediate', icon: 'star-half-o'},
      {id: 'e3', description: 'Expert', icon: 'star'}
    ],
    levelChoose : undefined,
    mute: false,
    startPlay: false
  }

  handleOnClickLevelChoose = (id) => {
    this.setState(() => ({
      levelChoose: id
    }));
  }

  handleOnClickMute = () => {
    this.setState((prev) => ({mute: !prev.mute}));
  }

  handleOnClickBack = () => {
    this.setState(() => ({ levelChoose: undefined}));
  }
  handleOnClickStart = () => {
    this.setState(() => ({startPlay: true}));
  }

  render(){
    return(
      <div className="AppWrapper">
        <div className="rotate_phone">
          <img src="images/rotatedevice.gif" alt="rotate device"/>
        </div>
        {!this.state.startPlay &&
          <div onClick={this.handleOnClickStart} className="start-music">
            <p>Welcome to Match Game</p>
            <p>Click to Play</p>
          </div>
        }
        <div onClick={this.handleOnClickMute} className="mute_cont">
          <i className={`fa fa-volume-${this.state.mute ? 'off' : 'up'}`} aria-hidden="true"></i>
        </div>
        {this.state.levelChoose &&
          <div onClick={this.handleOnClickBack} className="go_back">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </div>
        }
        {this.state.levelChoose ? <GameWrapper mute={this.state.mute} levelChoose={this.state.levelChoose} /> : <ChooseLevel mute={this.state.mute} startApp={this.state.startPlay} levelChoose={this.handleOnClickLevelChoose} levels={this.state.levels} />}
        <Link className="copyright-link" to="/copyright">Copyright</Link>
      </div>
    )
  }
};

export default AppWrapper;
