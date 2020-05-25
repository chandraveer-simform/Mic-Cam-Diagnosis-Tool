import React, {useState} from 'react'

const WebCamTest = (props) =>{
    const constraints = {
        audio: false,
        video: { width: 1280, height: 720 },
    }; 

    // const [audio , setAdio] = useState(false)
    // const [video , setVideo] = useState({ width: 1280, height: 720 })



    const cameratest = () =>{
        if (!navigator.mediaDevices) {
            console.log("Document not secure. Unable to capture WebCam.");
        } else {
            navigator.mediaDevices
                .getUserMedia(constraints)
                .then(function(stream) {
                    //show webcam stream
                    let videoIn = document.createElement("video");
                    videoIn.autoplay = true;
                    document.body.appendChild(videoIn);
                    videoIn.srcObject = stream;
                })
                .catch(function(err) {
                    console.log("Unable to capture WebCam.", err);
                });
        }
    }
    
    return <div>
        <button onClick={cameratest}>Camera Test</button>
        <div></div>
    </div>
}

export default WebCamTest