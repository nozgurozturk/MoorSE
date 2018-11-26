import React, { Component } from "react";
import UIkit from "uikit";

class Navbar extends Component {
  componentDidMount() {
    const moorseLogo = document.querySelector(".moorse-logo");
    const navbar = document.querySelector("nav");
    UIkit.svg(moorseLogo);
    UIkit.navbar(navbar);
  }
  render() {
     return (
      <div className="navbar">
        <div className="uk-container uk-container-expand">
        <nav className="uk-navbar uk-navbar-transparent">
          <div className="uk-navbar-left">
            <div className="uk-navbar-item navbar-logo">
            <img className="uk-left moorse-logo" src={require("../assets/moorse-logo-bw.svg")} alt=""/>
            </div>
          </div>
        </nav>
          </div>
      </div>
    );
  }
}
export default Navbar;