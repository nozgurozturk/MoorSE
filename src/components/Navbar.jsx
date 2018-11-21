import React, { Component } from "react";
import UIkit from "uikit";

class Navbar extends Component {
  componentDidMount() {
    const moorseLogo = document.querySelector(".moorse-logo");
    const navbar = document.querySelector("nav");
    const modal = document.querySelector(".modal-about");
    UIkit.svg(moorseLogo);
    UIkit.navbar(navbar);
    UIkit.modal(modal);
  }
  render() {
     return (
      <div className="navbar">
      <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
        <div className="uk-container uk-container-expand">
        <nav className="uk-navbar uk-navbar-transparent">
          <div className="uk-navbar-left">
            <div className="uk-navbar-item navbar-logo">
            <img className="uk-left moorse-logo" src={require("../assets/moorse-logo-bw.svg")} alt=""/>
            </div>
          </div>
          <div className="uk-navbar-right">
            <div className="uk-navbar-item">
              <a
                href="/"
                className="uk-margin-medium-right uk-text-emphasis"
                data-uk-toggle="target: .modal-about"
              >
                <button className="uk-button uk-button-text">about</button>
              </a>
              <a
                href="https://github.com/nozgurozturk/MoorSE"
                target="blank"
                className="uk-icon-link"
                data-uk-icon="github"
              > </a>
              <div className="modal-about">
                <div className="uk-modal-dialog uk-modal-body">
                  <h2 className="uk-modal-title">About</h2>
                  <p>Code Encoder</p>
                  <p className="uk-text-right">
                    <button
                      className="uk-modal-close-default"
                      type="button"
                      data-uk-close
                    >
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
          </div>
      </div>
      </div>
    );
  }
}
export default Navbar;