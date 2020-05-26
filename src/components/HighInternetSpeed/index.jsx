import React, {useState, useEffect} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'


const HighInternetSpeed = () =>{
    const [downloadSpeed, setDownloadSpeed] =useState(0); 
    const [uploadSpeed, setUploadSpeed] =useState(0);
    const [count, setCount] =useState(10)

    useEffect(()=>{  
            var imageAddr = "http://www.tranquilmusic.ca/images/cats/Cat2.JPG" + "?n=" + Math.random();
            var startTime, endTime;

            var downloadSize = 5616998;
            var download = new Image();
            download.onload = function () {
                endTime = (new Date()).getTime(); 
                
                let newSpeed = showResults();
                 
                setCount(count+30)
                if(downloadSpeed < newSpeed){
                    setDownloadSpeed(newSpeed); 
                }  

            }
            startTime = (new Date()).getTime(); 
            download.src = imageAddr;

            const showResults =()=> {
                var duration = (endTime - startTime) / 1000; //Math.round()
                var bitsLoaded = downloadSize * 8;
                var speedBps = (bitsLoaded / duration).toFixed(2);
                var speedKbps = (speedBps / 1024).toFixed(2);
                var speedMbps = (speedKbps / 1024).toFixed(2); 
                console.log("dd");
                return speedMbps;   
            }  
    },[count])

    useEffect(()=>{ 
            const checkUploadSpeed = ( iterations, update ) => {
                var average = 0,
                    index = 0,
                    timer = window.setInterval( check, 5000 ); //check every 5 seconds
                check();
        
                function check() {
                    var xhr = new XMLHttpRequest(),
                        url = '?cache=' + Math.floor( Math.random() * 10000 ), //random number prevents url caching
                        data = getRandomString( 1 ), //1 meg POST size handled by all servers
                        startTime,
                        speed = 0;
                    xhr.onreadystatechange = function ( event ) {
                        if( xhr.readyState === 4 ) {
                            speed = Math.round( 1024 / ( ( new Date() - startTime ) / 1000 ) );
                            average === 0 
                                ? average = speed 
                                : average = Math.round( ( average + speed ) / 2 );

                            // update( speed, average ); 
                            var speedKbps = (speed / 1024).toFixed(2);
                            var speedMbps = (speedKbps / 1024).toFixed(2);  
                            console.log("SS",speedMbps)
                            if(uploadSpeed < speedMbps)
                            {   
                                setUploadSpeed(speedMbps)
                            }

                            index++;
                            if( index === iterations ) {
                                window.clearInterval( timer );
                            };
                        };
                    }; 
                    xhr.open( 'POST', url, true );
                    startTime = new Date();
                    xhr.send( data );

                };
        
                function getRandomString( sizeInMb ) {
                    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+`-=[]\{}|;':,./<>?", //random data prevents gzip effect
                        iterations = sizeInMb * 1024 * 1024, //get byte count
                        result = '';
                    for( var index = 0; index < iterations; index++ ) {
                        result += chars.charAt( Math.floor( Math.random() * chars.length ) );
                    };     
                    return result;
                }; 
            };
            
            checkUploadSpeed( 10
            //     , ( speed, average ) => { 
            //     var speedKbps = (speed / 1024).toFixed(2);
            //     var speedMbps = (speedKbps / 1024).toFixed(2);   
            //     return speedMbps; 
            // }
            ); 
    },[uploadSpeed])
 
return (<div>
            {count > 99 ?
                <div>
                    Download : {downloadSpeed} Mbps<br />
                    Upload : {uploadSpeed} Mbps <br />
                </div>:
                <ProgressBar now={count} label={`${count}%`} />

            }
            
            
        </div>);

    
}

export default HighInternetSpeed