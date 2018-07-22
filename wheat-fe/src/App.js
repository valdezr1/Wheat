import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  // Reference: https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm
  componentDidMount(){
    console.log("hey, already mounted");
    let videoElem = document.querySelector("#videoElem");
    
    // Checks to see if browser supports getUserMedia()
    if (navigator.mediaDevices.getUserMedia) {
      // getUserMedia(--constraints--) | More information on constraints:
      //https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
      navigator.mediaDevices.getUserMedia({video : true})
      .then ((stream) => {
        videoElem.srcObject = stream;
      })
      .catch((error) => {
        console.log("Something went wrong!");
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Wheat</h1>
        <video autoPlay="true" id="videoElem"/>
      </div>
    );
  }
}

export default App;
