import React, { Component } from "react";
import Tone from "tone";
class SoundOutput extends Component {
  componentDidUpdate() {
    var effect = new Tone.JCReverb({
      roomsize: 0.3
    }).toMaster();

    let synthMono = new Tone.MonoSynth({
      oscillator: {
        type: this.props.waveform
      },
      envelope: {
        attack: 0.8,
        sustain: 0.6
      }
    }).connect(effect);

    let seq = new Tone.Sequence(
      function(time, note) {
        synthMono.triggerAttackRelease(note, 0.4);
      },
      this.props.notes,
      "4n"
    );
    seq.set({
      loop: false
    });
    seq.start();
    Tone.Transport.bpm.value = this.props.bpm;
    Tone.Transport.start();
  }
  render() {
    return <div className="soundoutput" />;
  }
}

export default SoundOutput;
