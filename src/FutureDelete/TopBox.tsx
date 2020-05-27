import React, { useEffect } from 'react'; 
// import OT from "@opentok/client"
import NetworkTest, { ErrorNames } from 'opentok-network-test-js';
import './App.css';
import { type } from 'os';

const OT = require('@opentok/client');

const sessionInfo = {
  apiKey: '46763442', // Add the API key for your OpenTok project here.
  sessionId: '1_MX40Njc2MzQ0Mn5-MTU5MDU1MjEzMzk3MX55NHMvVm1IcWZzTTBBb0hLZ3l4bmtRcjd-fg', // Add a test session ID for that project
  token: 'T1==cGFydG5lcl9pZD00Njc2MzQ0MiZzaWc9NGU1MDc1MTMyY2Q4Y2JkMWZhMjJhMTc2YmYxY2ZiYTY1Y2UwYTg3OTpzZXNzaW9uX2lkPTFfTVg0ME5qYzJNelEwTW41LU1UVTVNRFUxTWpFek16azNNWDU1TkhNdlZtMUljV1p6VFRCQmIwaExaM2w0Ym10UmNqZC1mZyZjcmVhdGVfdGltZT0xNTkwNTUyMTQ0Jm5vbmNlPTAuNzIxMDMxNzI2NTE2MDQzNSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTkzMTQ0MTQ0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9' // Add a token for that session here
}
const options = { audioOnly: true };

// const otNetworkTest = new NetworkTest(OT, sessionInfo, options);
const otNetworkTest = new NetworkTest(OT, sessionInfo);

const App = () => {

  type PublisherSettings = {
    videoSource?: object,
    audioSource?: object,
  }

  const preCallTest = () => {

    otNetworkTest.testConnectivity().then((results: any) => {
      console.log('OpenTok connectivity test results', results);
      otNetworkTest.testQuality(function updateCallback(stats: any) {
        console.log('intermediate testQuality stats', stats);
        console.log('current testQuality stats', stats[stats.length - 1]);
      }).then((results: any) => {
        // This function is called when the quality test is completed.
        console.log('OpenTok quality results', results);
        let publisherSettings: PublisherSettings = {};
        if (results.video.reason) {
          console.log('Video not supported:', results.video.reason);
          publisherSettings.videoSource = {}; // audio-only
        } else {
          publisherSettings.videoSource = {
            frameRate: results.video.recommendedFrameRate,
            resolution: results.video.recommendedResolution
          }
        }
        if (!results.audio.supported) {
          console.log('Audio not supported:', results.audio.reason);
          publisherSettings.audioSource = {};
          // video-only, but you probably don't want this -- notify the user?
        } else {
          console.log("audio results are", results.audio.bitrate, results.audio);
          publisherSettings.audioSource = {
            bitrate: results?.audio?.bitrate,
            mos: results.audio.mos,
            packetLossRatio: results.audio.packetLossRatio,
            supported: results.audio.supported
          }
        }
        console.log("publisherSettings are", publisherSettings);

        // if (!publisherSettings.videoSource && !publisherSettings.audioSource) {
        //   console.log("Not found anything bro!!!!")
        // } else {
        //   console.log("found what we need bro!!!!")
        // }
      }).catch((error: any) => {
        console.log('OpenTok quality test error', error);
      });
    }).catch(function (error: any) {
      console.log('OpenTok connectivity test error', error);
    });

  }

  useEffect(() => {
    preCallTest()
  }, [])


  return (
    <div className="App">
       <h1>hh</h1>
    </div>
  );
}

export default App;
