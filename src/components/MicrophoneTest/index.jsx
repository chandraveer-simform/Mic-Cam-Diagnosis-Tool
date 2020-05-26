import React, { useState }  from 'react' 
import ProgressBar from 'react-bootstrap/ProgressBar'
const MicrophoneTest = (props) =>{ 
    const [progressInstance, setProgressInstance] = useState('');

    const microphone =()=>{ 
        navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        .then(function(stream) {
        var audioContext = new AudioContext();
        var analyser = audioContext.createAnalyser();
        var microphone = audioContext.createMediaStreamSource(stream);
        var javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 1024;

        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);
        javascriptNode.onaudioprocess = function() {
            var array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            var values = 0;

            var length = array.length;
            for (var i = 0; i < length; i++) {
                values += (array[i]);
            }

            var average = values / length;

            // console.log(Math.round(average));
            frequency(average);
        }
        })
        .catch(function(err) {
            alert('Please allow mircophone permission')
        });
    }
    
    const frequency =(average)=>{ setProgressInstance(<ProgressBar striped variant="success" now={average}  />)};
    
    return <div>
        <button onClick={microphone}>Microphone Test</button> 
        <div className="mt-2">{progressInstance}</div>
    </div>
}

export default MicrophoneTest
