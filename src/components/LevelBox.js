import React from 'react';

const LevelBox = (props) => (
  <div className="LevelBox">
    {props.levels.map((level) => {
      return (
        <div className={`single-level-box ${level.id}`} onClick={() => props.levelChoose(level.id)} key={level.id}>
          <h2>{level.description}</h2>
          <i className={`fa fa-${level.icon}`} aria-hidden="true"></i>
        </div>
      )
    })}
  </div>
);

export default LevelBox;
