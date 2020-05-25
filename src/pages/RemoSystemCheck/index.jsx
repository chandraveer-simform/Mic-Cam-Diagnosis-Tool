import React from 'react'

import HighInternetSpeed from '../../components/HighInternetSpeed'
import DetectOsBrowser from '../../components/DetectOsBrowser'
const RemoSystemCheck =()=>{
    return <div className="component p-5">
        <div className="row">
            <div className="col">
                <h1 className="text-center">Remo System Check</h1>
            </div>
        </div>
        <div className="d-flex flex-row">
            <div className="d-flex flex-column">
                {/* <HighInternetSpeed /> */}
                <div className="">
                    <DetectOsBrowser />
                </div>
                
            </div>
            <div className="d-flex flex-column">
                <h5>Test Your Audio & Video</h5>
                <div>
                    
                </div>
            </div>
        </div>
    </div>
}

export default RemoSystemCheck