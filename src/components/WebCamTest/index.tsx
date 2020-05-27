import React, { useEffect } from 'react'; 
// import OT from "@opentok/client"
import NetworkTest, { ErrorNames } from 'opentok-network-test-js';
import { type } from 'os';

const OT = require('@opentok/client');

const sessionInfo = {
  apiKey: '46763442', // Add the API key for your OpenTok project here.
  sessionId: '1_MX40Njc2MzQ0Mn5-MTU5MDU1MjEzMzk3MX55NHMvVm1IcWZzTTBBb0hLZ3l4bmtRcjd-fg', // Add a test session ID for that project
  sessionID: '1_MX40Njc2MzQ0Mn5-MTU5MDU1MjEzMzk3MX55NHMvVm1IcWZzTTBBb0hLZ3l4bmtRcjd-fg', // Add a test session ID for that project
  token: 'T1==cGFydG5lcl9pZD00Njc2MzQ0MiZzaWc9NGU1MDc1MTMyY2Q4Y2JkMWZhMjJhMTc2YmYxY2ZiYTY1Y2UwYTg3OTpzZXNzaW9uX2lkPTFfTVg0ME5qYzJNelEwTW41LU1UVTVNRFUxTWpFek16azNNWDU1TkhNdlZtMUljV1p6VFRCQmIwaExaM2w0Ym10UmNqZC1mZyZjcmVhdGVfdGltZT0xNTkwNTUyMTQ0Jm5vbmNlPTAuNzIxMDMxNzI2NTE2MDQzNSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTkzMTQ0MTQ0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9' // Add a token for that session here
} 
var session = OT.initSession(sessionInfo.apiKey, sessionInfo.sessionID);
const options = { audioOnly: true };

// const otNetworkTest = new NetworkTest(OT, sessionInfo, options);
const otNetworkTest = new NetworkTest(OT, sessionInfo);

// component Name
const WebCamTest = () => { 

  type PublisherSettings = {
    videoSource?: object,
    audioSource?: object,
  }

  const preCallTest = () => {
    

    var publisher = OT.initPublisher();

    session.publish(publisher, function(error: any) {
    if (error) {
        console.log(error);
    } else {
        console.log('Publishing a stream.');
    }
    });
    publisher.on('streamCreated', function (event: any) {
        console.log('The publisher started streaming.');
    });


  }

  useEffect(() => {
    // preCallTest()
    session.connect(sessionInfo.token, function(error:any) {
        if (error) {
          console.log("Error connecting: ", error.name, error.message);
        } else {
          console.log("Connected to the session.");
        }
      });
  }, [])


  return (
    <div > 
        <button onClick={preCallTest} >WebCamTest</button> 
    </div>
  );
}

export default WebCamTest;
