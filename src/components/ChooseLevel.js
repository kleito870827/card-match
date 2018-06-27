import React from 'react';
import LevelBox from './LevelBox';

const ChooseLevel = (props) => (
  <div className="ChooseLevel">
    <h1>Choose your level</h1>
    <LevelBox levelChoose={props.levelChoose} levels={props.levels} />
  </div>
);

export default ChooseLevel;
