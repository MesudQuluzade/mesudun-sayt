import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Feedback.css';

const Feedback: React.FC = () => {
  const settings = {
    dots: false,             // Dots olmur
    infinite: true,          // Sonsuz slayd
    speed: 3000,            // Hərəkət sürəti - yüksək göstərib marquee effekti yaratmaq üçün
    slidesToShow: 1,         // Bir anda bir slayd göstərilir
    slidesToScroll: 1,       // Bir hərəkət edərkən bir slayd keçsin
    vertical: true,          // Şaquli slayd
    autoplay: true,          // Avtomatik hərəkət
    autoplaySpeed: 0,        // Avtomatik sürət, ancaq smooth hərəkət üçün minimal gecikmə
    pauseOnHover: false,     // Hover zamanı dayanmır
    cssEase: "linear",       // Smooth hərəkət üçün linear animasiya
    verticalSwiping: false    // Vertikal swipe-i təmin edir
  };

  return (
    <div className="feedback-container">
      <Slider {...settings}>
        <div className="element">
          <h2>Mesud Quluzade</h2>
          <p>Enver muellim hec kimin bacarmadigini bacarir - Dersde istenilen sayti arashdirib kodlayir</p>
        </div>

        <div className="element">
          <h2>Mesud Quluzade</h2>
          <p>Enver muellim hec kimin bacarmadigini bacarir - Dersde istenilen sayti arashdirib kodlayir</p>
        </div>

        <div className="element">
          <h2>Mesud Quluzade</h2>
          <p>Enver muellim hec kimin bacarmadigini bacarir - Dersde istenilen sayti arashdirib kodlayir</p>
        </div>

        <div className="element">
          <h2>Mesud Quluzade</h2>
          <p>Enver muellim hec kimin bacarmadigini bacarir - Dersde istenilen sayti arashdirib kodlayir</p>
        </div>

        <div className="element">
          <h2>Mesud Quluzade</h2>
          <p>Enver muellim hec kimin bacarmadigini bacarir - Dersde istenilen sayti arashdirib kodlayir</p>
        </div>

        <div className="element">
          <h2>Mesud Quluzade</h2>
          <p>Enver muellim hec kimin bacarmadigini bacarir - Dersde istenilen sayti arashdirib kodlayir</p>
        </div>
      </Slider>
    </div>
  );
};

export default Feedback;
