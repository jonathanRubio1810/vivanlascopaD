import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/images/hero/Imagen2.jpg';
import image2 from '../../assets/images/hero/Imagen1.jpg';
import image3 from '../../assets/images/hero/slider.png';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section className="hero-section" style={{ margin: '0' }}>
      <div> {/* Sin margen inferior */}
        <Slider {...settings}>
          <div>
            <img src={image1} alt="Slide 1" style={{ width: '100%', height: 'auto', maxHeight: '300px' }} />
          </div>
          <div>
            <img src={image2} alt="Slide 2" style={{ width: '100%', height: 'auto', maxHeight: '300px' }} />
          </div>
          <div>
            <img src={image3} alt="Slide 3" style={{ width: '100%', height: 'auto', maxHeight: '300px' }} />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Hero;

