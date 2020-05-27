import React, {useEffect, useState} from 'react'
// import useragent from 'useragent' 
var useragent = require('useragent');

const DetectOsBrowser = (props) =>{

    const[operatingSystem, setoperatingSystem] =  useState('');
    const[browser, setBrowser] = useState('')

    

    useEffect(()=>{
        const agent = useragent.parse(navigator.userAgent);
        setoperatingSystem(agent.os.family+' '+agent.os.major)  
        
        const agentBrowser = useragent.parse(navigator.appVersion);
        setBrowser(agentBrowser.family+' v.'+ agentBrowser.major) 
    }, [])
    return <div>
            <h5>Operating System</h5>
            <p>{operatingSystem} - looks good!</p>
            <h5>Browser</h5>
            <p>{browser} - looks good!</p>
        </div>
}

export default DetectOsBrowser