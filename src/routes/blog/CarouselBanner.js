import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import flechaIzquierda from "../../assets/images/Slider/flechaant.png";
import flechaDerecha from "../../assets/images/Slider/flechasig.png";
import image1Mobile from "../../assets/images/Slider/slider1.jpg";
import image1Desktop from "../../assets/images/Slider/slider1_w.jpg";
import image2Mobile from "../../assets/images/Slider/slider2.jpg";
import image2Desktop from "../../assets/images/Slider/slider2_w.jpg";
import image3Mobile from "../../assets/images/Slider/slider3.jpg";
import image3Desktop from "../../assets/images/Slider/slider3_w.jpg";

const PrevArrow = (props) => (
  <div className="slick-arrow slick-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
    <img src={flechaIzquierda} alt="Flecha Izquierda" className="w-8 h-8" />
  </div>
);

const NextArrow = (props) => (
  <div className="slick-arrow slick-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
    <img src={flechaDerecha} alt="Flecha Derecha" className="w-8 h-8" />
  </div>
);

const CarouselBanner = () => {
  const isMobile = window.innerWidth <= 768;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative overflow-hidden bg-black py-">
      <div className="relative">
        <Slider {...settings}>
          <div key={1} className="carousel-slide">
            <img
              src={isMobile ? image1Mobile : image1Desktop}
              alt="Slider Image 1"
              className="w-full h-auto"
            />
          </div>
          <div key={2} className="carousel-slide">
            <img
              src={isMobile ? image2Mobile : image2Desktop}
              alt="Slider Image 2"
              className="w-full h-auto"
            />
          </div>
          <div key={3} className="carousel-slide">
            <img
              src={isMobile ? image3Mobile : image3Desktop}
              alt="Slider Image 3"
              className="w-full h-auto"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CarouselBanner;
