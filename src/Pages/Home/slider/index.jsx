import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideone from "../../../assets/images/firstslide.jpg";
import slidetwo from "../../../assets/images/secondslide.jpg";
import slidethree from "../../../assets/images/thirdslide.jpg";
import slidefour from "../../../assets/images/fourthslide.jpg";
import slidefive from "../../../assets/images/fifthslide.jpg";
import slidesix from "../../../assets/images/sixthslide.jpg";
import slideseven from "../../../assets/images/seventhslide.jpg";
import slideeight from "../../../assets/images/eightslide.jpg";
import "./index.css";

// Custom arrow components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow slick-prev" onClick={onClick}>&#10094;</div>;
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow slick-next" onClick={onClick}>&#10095;</div>;
};

function Sliders() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: true,
   
  };

  return (
    <div className="containerslider">
      <Slider {...settings}>
      <div><img src={slideeight} alt="Slide 8" /></div>
      <div><img src={slidetwo} alt="Slide 2" /></div>
        <div><img src={slideone} alt="Slide 1" /></div>
        <div><img src={slidetwo} alt="Slide 2" /></div>
        <div><img src={slidethree} alt="Slide 3" /></div>
        <div><img src={slidefour} alt="Slide 4" /></div>
        <div><img src={slidefive} alt="Slide 5" /></div>
        <div><img src={slidesix} alt="Slide 6" /></div>
        <div><img src={slideseven} alt="Slide 7" /></div>
        <div><img src={slideeight} alt="Slide 8" /></div>
      </Slider>
    </div>
  );
}

export default Sliders;
