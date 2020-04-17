import React from "react";
import Slider from "react-slick";
import SliderOne from "./SliderOne";
import SliderTwo from "./SliderTwo";
import SliderThree from "./SliderThree";

class MainSlider extends React.Component {
  render() {
    var settings = {
      // dots: true,
      infinite: true,
      autoplay: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <SliderOne />
        </div>
        <div>
          <SliderTwo />
        </div>
        <div>
          <SliderThree />
        </div>
      </Slider>
    );
  }
}

export default MainSlider;
