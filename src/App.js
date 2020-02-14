import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import Image from './components/ImageLinkForm/Image';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles:{
    number : {
      value : 300,
      density : {
        enable : true,
        value_area :800
      }
    }
  },
  interactivity:{
    onhover:{
      enable: true,
      mode : {
        repulse : true
      }
    }
  }
}
function App() {
  return (
    <div className="App">
    <Particles className="particles" params = {particlesOptions}/>
     <Navigation />
     <Logo />
     <Rank />
     <Image/>
     
      {/*  <FaceRecognition />*/}
    </div>
  );
}

export default App;
