import React from "react";
import imageTwo from "./carouselImages/two.jpeg";
import "./style/two.css";

export default function SliderTwo() {
  return (
    <div className='center'>
      <img className='imgTwo' src={imageTwo} />
    </div>
  );
}
