import React from "react";
import imageThree from "./carouselImages/three.jpeg";
import "./style/three.css";

export default function SliderThree() {
  return (
    <div className='center'>
      <img className='imgThree' src={imageThree} />
    </div>
  );
}
