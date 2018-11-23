import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <hr className="uk-margin-large-top"/>
        <div className="uk-section-xsmall">
          <div className="uk-container">
            <div className="uk-float-left uk-width-1-2">
              <p>
                moorse build with{" "}
                <a href="https://tonejs.github.io/" target="blank">
                  tone.js
                </a>{" "}
                and{" "}
                <a href="https://reactjs.org/" target="blank">
                  react
                </a>
                , made by{" "}
                <a
                  href="http://www.nooproject.com/"
                  target="blank"
                  data-uk-tooltip="Ozgur Ozturk"
                >
                  me
                </a>
              </p>
              <p>
                
              </p>
            </div>
            <div className="uk-float-right">
              <a
                href="https://github.com/nozgurozturk/"
                target="blank"
                className="uk-icon-link"
                data-uk-icon="icon: github; ratio:1.5"
              />
              <a
                href="mailto:n.ozgurozturk@gmail.com"
                target="blank"
                className="uk-icon-link uk-margin-medium-left"
                data-uk-icon="icon: mail; ratio:1.5"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
