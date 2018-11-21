import React, {Component} from 'react';
import Tone from "tone";
class SoundOutput extends Component {
    componentDidUpdate(){
        var effect = new Tone.PingPongDelay({
            delayTime  : 0.2 ,
            maxDelayTime  : 4
        }).toMaster();

        let synthMono = new Tone.MonoSynth({
            oscillator  : {
            type  : "sawtooth6"
            } , 
            envelope  : {
            attack  : 0.8 ,
            sustain  : 0.6 ,
            }  
            }).connect(effect);
            const timing = "16n"
    
            let seq = new Tone.Sequence(function(time, note){
                synthMono.triggerAttackRelease(note, 0.1);
            }, this.props.notes, timing);
        
            seq.set({
                "loop" : false,
            });
            seq.start()
            Tone.Transport.start();
    }
render(){
    
    return(
        <div className="soundoutput">
        </div>
    )
}

}

export default SoundOutput;