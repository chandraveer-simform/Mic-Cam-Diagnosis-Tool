import React, {useState} from 'react'

const WebCamTest = (props) =>{
    const constraints = {
        audio: false,
        video: { width: 300, height: 200 },
    }; 

    const [live , setLive] = useState(false)
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
                    // document.body.appendChild(videoIn); 
                    document.getElementById("videoStrem").appendChild(videoIn); 
                    videoIn.srcObject = stream; 
                    setLive(true)

                })
                .catch(function(err) {
                    console.log("Unable to capture WebCam.", err);
                });
        }
    }
    
    return <div>
        <button onClick={cameratest} disabled={live}>Camera Test</button>
        <div id="videoStrem" className="mt-2" ></div> 
    </div>
}

export default WebCamTest