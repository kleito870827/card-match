import React from 'react';
import createHistory from 'history/createBrowserHistory';

// components
import ChooseLevel from './ChooseLevel';
import GameWrapper from './GameWrapper';


export const history = createHistory();


class AppWrapper extends React.Component {
  state = {
    levels: [
      {id: 'b1', description: 'Beginner', icon: 'star-o'},
      {id: 'i2', description: 'Intermediate', icon: 'star-half-o'},
      {id: 'e3', description: 'Expert', icon: 'star'}
    ],
    levelChoose : undefined
  }

  handleOnClickLevelChoose = (id) => {
    this.setState(() => ({
      levelChoose: id
    }));
  }
  render(){
    return(
      <div>
        {this.state.levelChoose ? <GameWrapper levelChoose={this.state.levelChoose} /> : <ChooseLevel levelChoose={this.handleOnClickLevelChoose} levels={this.state.levels} />}
      </div>
    )
  }
};

export default AppWrapper;
