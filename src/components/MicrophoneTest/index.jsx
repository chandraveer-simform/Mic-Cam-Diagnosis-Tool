import React  from 'react' 
const MicrophoneTest = (props) =>{ 
    const microphone =()=>{
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream)=> {
            if(stream.getVideoTracks().length > 0 && stream.getAudioTracks().length > 0){ 
                const context = new AudioContext();
                const source = context.createMediaStreamSource(stream);
                const processor = context.createScriptProcessor(1024, 1, 1); 
                source.connect(processor);
             
                processor.connect(context.destination);
            
                processor.onaudioprocess = function(e) {
                // Do something with the data, e.g. convert it to WAV
                console.log(e.inputBuffer.sampleRate); 
                // return <ProgressBar variant="success" now={e.inputBuffer} />; 
              

            };             
            }else{
                alert("Plz allow Microphon permission") 
            } 
          }); 
    }
 
    return <div><button onClick={microphone}>Microphone Test</button></div>
}

export default MicrophoneTest
