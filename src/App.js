import React from 'react';
import './App.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import images from './utilities/sliderImages';


function App() {
  return (
    <div className="App">
      <AliceCarousel autoPlay animationType={"fadeout"} autoPlayInterval={2000} infinite>
      {images}
      </AliceCarousel>
    </div>
  );
}

export default App;

// git remote add origin https://github.com/Any22/React-Components.git
// git branch -M main
// git push -u origin main

