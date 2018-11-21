import React, { Component } from "react";
import Inputs from "./Inputs";
import chars from "../api/chars.json";
import SoundOutput from "./SoundOutput";
import MorseOutput from "./MorseOutput";



class Translator extends Component {
  state = { notes: [],
            codes: [] };
  
  onTextSubmit = async value => {
    let textInput = value.toLowerCase();
    let soundArray = []
    const sounds = await function() {
        for (let letter of textInput) {
            soundArray.push(chars[letter].note);
        }
        return soundArray;
    };
    let codeArray = []
    const codes = await function() {
        for (let letter of textInput) {
            codeArray.push(chars[letter].code);
        }
        return codeArray;
    };
    const morseNodes = codes();
    const soundNodes = sounds();
    this.setState({notes : soundNodes, codes: morseNodes})
  }

  render() {
    return (
      <div>
        <Inputs onSubmit={this.onTextSubmit} />
        <SoundOutput notes={this.state.notes}/>
        <MorseOutput codes={this.state.codes} />

      </div>
    );
  }
}

export default Translator;
