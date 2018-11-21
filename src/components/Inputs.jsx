import React, { Component } from "react";
import UIkit from "uikit";
import chars from "../api/chars.json";

class Inputs extends Component {
  componentDidMount() {
    const ukModal = document.querySelector(".modal-info");
    UIkit.modal(ukModal);
  }

  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  onTextChange = e =>  {
    this.setState({ value: e.target.value });
  }

  onTextSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
      <div className="inputs">
        <div className="uk-container">
          <div data-uk-grid>
            <div className="uk-width-3-4@s text-area">
              <h4 className="uk-text-right@m">text</h4>
              <form onSubmit={this.onTextSubmit}>
                <label>
                  <textarea
                    className="uk-height-medium uk-textarea"
                    value={this.state.value}
                    onChange={this.onTextChange}
                  />
                </label>
              </form>
            </div>
            <div className="uk-width-1-4@s options">
              <h4>options</h4>
              <div data-uk-grid>
                <div className="uk-width-medium@s  uk-margin-small-bottom">
                  <div className="uk-text-bold uk-margin-small-bottom">
                    bpm
                    <button
                      className="uk-icon-link uk-margin-small-left"
                      data-uk-icon="icon:info; ratio:0.8"
                      data-uk-toggle="target: .modal-info-beat"
                    />
                    <div className="modal-info-beat" data-uk-modal>
                      <div className="uk-modal-dialog uk-modal-body">
                        <button
                          className="uk-modal-close-default"
                          type="button"
                          data-uk-close
                        />
                        <h2 className="uk-modal-title">Beat and tempo</h2>
                        <h3>What's a "beat?"</h3>
                        <p>
                          People commonly use the word "beat" to mean "a pattern
                          (or rhythm) played by drums." The thing you're making
                          when you create and play patterns in these lessons is
                          "a beat." But, confusingly, there's another use of the
                          word "beat," which means "a regular, repeating pulse
                          that underlies a musical pattern." People tap their
                          foot along with "the beat" in this context.
                        </p>
                        <h3>Tempo</h3>
                        <p>
                          The speed at which your patterns play back is called
                          the tempo. Tempo is measured in beats per minute or
                          BPM. So if we talk about a piece of music being "at
                          120 BPM," we mean that there are 120 beats (pulses)
                          every minute. Some types of musical patterns have a
                          very clear underlying beat, while others have a more
                          subtle or implied one. To hear a steady beat, add
                          notes on the Kick line at the positions labeled 1, 5,
                          9, and 13.
                        </p>
                        <p>
                          Here are "typical" tempo ranges for a number of common
                          genres:
                        </p>
                        <ul>
                          <li>Dub: 60-90 bpm</li>
                          <li>Hip-hop: 60-100 bpm</li>
                          <li>House: 115-130 bpm</li>
                          <li>Techno/trance: 120-140 bpm</li>
                          <li>Dubstep: 135-145 bpm</li>
                          <li>Drum and bass: 160-180 bpm</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className=" uk-flex uk-flex-between">
                    <div>30</div>
                    <div>240</div>
                  </div>
                  <input
                    className="uk-range"
                    type="range"
                    min="30"
                    max="240"
                    step="1"
                  />
                </div>
                <div className="uk-width-medium@s uk-margin-small-bottom">
                  <div className="uk-text-bold uk-margin-small-bottom">
                    waveform
                    <button
                      className="uk-icon-link uk-margin-small-left"
                      data-uk-icon="icon:info; ratio:0.8"
                      data-uk-toggle="target: .modal-info-wave"
                    />
                    <div className="modal-info-wave" data-uk-modal>
                      <div className="uk-modal-dialog uk-modal-body">
                        <button
                          className="uk-modal-close-default"
                          type="button"
                          data-uk-close
                        />
                        <h2 className="uk-modal-title">Waveforms</h2>
                        <h3>Sine</h3>
                        <p>
                          Sine waves look similar to a gentle wave in a bowl of
                          water, moving up and down with no abrupt starts or
                          stops. Common sounds similar to a sine wave include
                          whistling, air blowing across the opening of an empty
                          bottle, and a ringing tuning fork.
                        </p>
                        <h3>Sawtooth</h3>
                        <p>
                          Sawtooth waves, also called saw waves, have a very
                          strong, clear, buzzing sound. A sawtooth wave can be
                          made by adding a series of sine waves at different
                          frequencies and volume levels. The frequency of the
                          first, loudest sine wave is what we hear as the
                          frequency of the resulting sawtooth. This is called
                          the fundamental frequency. Each of the other,
                          progressively quieter, sine waves that make up a
                          sawtooth have frequencies which are integer multiples
                          of the fundamental frequency. These frequencies are
                          called harmonics.
                        </p>
                        <p>
                          For example, an ideal sawtooth wave with a fundamental
                          frequency of 100Hz would have harmonics at 200Hz,
                          300Hz, 400Hz, and so on to infinity, with each
                          harmonic quieter than the last. Because the sawtooth
                          wave contains every integer harmonic of the
                          fundamental frequency, it sounds very rich to our ear.
                          The fundamental frequency defines the pitch of the
                          sound, while the harmonics change the character, or
                          timbre, of the sound without affecting the pitch.
                        </p>
                        <h3>Square</h3>
                        <p>
                          Square waves have a rich sound that's not quite as
                          buzzy as a sawtooth wave, but not as pure as a sine.
                          Old Nintendo game soundtracks were made almost
                          exclusively from square waves. Like sawtooth waves,
                          square waves can be generated by adding a series of
                          sine waves with decreasing volume. However, the square
                          wave contains only the odd numbered harmonics.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="uk-child-width-1-6 uk-flex uk-flex-between">
                    <div>
                      <img src={require("../assets/wave-saw.svg")} alt="" />
                    </div>
                    <div>
                      <img src={require("../assets/wave-sin.svg")} alt="" />
                    </div>
                    <div>
                      <img src={require("../assets/wave-sqaure.svg")} alt="" />
                    </div>
                  </div>
                  <input
                    className="uk-range"
                    type="range"
                    min="0"
                    max="2"
                    step="1"
                  />
                </div>
                <div className="uk-width-medium@s uk-margin-small-bottom">
                  <div className="uk-child-width-1-4 uk-flex uk-flex-between ">
                    <button
                      className="ukIcon uk-icon-button"
                      data-uk-icon="bolt"
                      data-uk-tooltip="Generate"
                      onClick={this.onTextSubmit}
                    />
                    <button
                      className="ukIcon uk-icon-button icon-toggle"
                      data-uk-icon="play"
                      data-uk-tooltip="Play"
                    />
                    <button
                      className="ukIcon uk-icon-button"
                      data-uk-icon="refresh"
                      data-uk-tooltip="Refresh"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inputs;
