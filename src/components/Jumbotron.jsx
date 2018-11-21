import React, { Component } from "react";
import UIkit from "uikit";

class Jumbotron extends Component {
  componentDidMount() {
    
    const ukSVG = document.querySelector(".morse-bg");
    const ukParallax = document.querySelector(".jumbotron-bg");
    UIkit.img(ukSVG);
    UIkit.svg(ukSVG);
    UIkit.parallax(ukParallax,
        {target: ukSVG, 
        y: 60, 
        easing: 0
    });
  }

  render() {
    return (
      <div className="jumbotron uk-margin-large-bottom">
      <div className="uk-container uk-container-expand">
        <div className="jumbotron-bg">
          <img className="uk-responsive-width morse-bg" src={require("../assets/jumbotron-bg.svg")} alt=""/>
          </div>
          <div className="pharese">
            <div className="uk-float-right@m uk-float-left@s  uk-text-right@m uk-text-left@s">
              <h1 className="uk-text-bold">Morse Decoder</h1>
              <p className="uk-text-large">
                Moorse is a morse code translator <br/>that have the feature of
                auido and visual decoding.
              </p>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default Jumbotron;