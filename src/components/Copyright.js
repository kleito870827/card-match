import React from 'react';
import '../styles/components/_Copyright.scss';
import {Link} from 'react-router-dom';

class Copyright extends React.Component{
  render(){
    return(
      <div className="Copyright">
        <div className="go_back">
          <Link to="/"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
        </div>
        <h1 className="title">Copyright</h1>
        <div className="content">
          <p>This is a study project with the aim of practicing react.js, it has no lucrative purpose. The images come from the website (www.brandongamer.com) and the music of the website (soundimage.org). I hope you like it, thanks</p>
        </div>
      </div>
    )
  }
}
export default Copyright;
