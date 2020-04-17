import React from "react";
import imageOne from "./carouselImages/one.jpeg";
import "./style/one.css";

export default function SliderOne() {
  return (
    <div className='center'>
      <img className='imgOne' src={imageOne} />
    </div>
  );
}
