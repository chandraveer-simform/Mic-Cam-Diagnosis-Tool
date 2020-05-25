import React from 'react'

import HighInternetSpeed from '../../components/HighInternetSpeed'
import DetectOsBrowser from '../../components/DetectOsBrowser'
import AudioPlay from '../../components/AudioPlay'
import MircophoneTest from '../../components/MicrophoneTest'
import WebCamTest from '../../components/WebCamTest'

import ringtone from "../../assets/famus_ring.mp3"
const RemoSystemCheck =()=>{
    return <div className="component p-5">
        <div className="row">
            <div className="col">
                <h1 className="text-center">Remo System Check</h1>
            </div>
        </div>
        <div className="d-flex flex-row  justify-content-center mt-5 jumbotron">
            <div className="d-flex flex-column mr-5">
            <h5>System Check Passed</h5>
                {/* <HighInternetSpeed /> */}
                <div className="">
                    <DetectOsBrowser />
                </div>
                
            </div>
            <div className="d-flex flex-column">
                <h5>Test Your Audio & Video</h5>
                <div>
                    <h5>Audio Output</h5><br />
                    <AudioPlay url={ringtone} />
                </div>
                <div>
                    <h5>Mircophone Test</h5><br />
                    <MircophoneTest />
                </div>
                <div>
                    <h5>Web Cam Test</h5>
                    <WebCamTest />
                </div>
                
            </div>
        </div>
    </div>
}

export default RemoSystemCheck