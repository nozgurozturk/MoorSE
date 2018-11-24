import React, { Component } from "react";
import Inputs from "./Inputs";
import chars from "../api/chars.json";
import SoundOutput from "./SoundOutput";
import MorseOutput from "./MorseOutput";

class Translator extends Component {

  state = { notes: [], codes: [], bpm: "", waveform: "" };

  onTextSubmit = async textIn => {
    let textArray = textIn.toLowerCase();
    let soundArray = [];
    const sounds = await function() {
      for (let letter of textArray) {
        soundArray.push(chars[letter].note);
      }
      return soundArray;
    };
    let codeArray = [];
    const codes = await function() {
      for (let letter of textArray) {
        codeArray.push(chars[letter].code);
      }
      return codeArray;
    };
    const morseNodes = codes();
    const soundNodes = sounds();
    this.setState({ notes: soundNodes, codes: morseNodes });
  };

  onWaveformSubmit = waveformIn => {
    let form = "1"
    if(waveformIn==="0"){
      form = "sawtooth6"
    }else if(waveformIn==="1"){
      form = "sine"
    }else{
      form = "square"
    }
    this.setState({ waveform: form });
  };
  onBpmSubmit = bpmIn => {
  
    this.setState({ bpm: bpmIn });
  };

  render() {
    console.log(this.state.codes);
    console.log(this.state.waveform);
    console.log(this.state.bpm);
    return (
      <div>
        <Inputs
          onText={this.onTextSubmit}
          onBpm={this.onBpmSubmit}
          onWaveform={this.onWaveformSubmit}
        />
        <SoundOutput
          notes={this.state.notes}
          bpm={this.state.bpm}
          waveform={this.state.waveform}
        />
        <MorseOutput codes={this.state.codes} />
      </div>
    );
  }
}

export default Translator;
