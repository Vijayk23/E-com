import React, { useEffect, useState } from "react";
import * as images from "../../assets/index";
import { Col, Row } from "react-bootstrap";
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";
import products from "../../Constants/Product";
console.log("products: ", products);

function Home() {
  const sliderImages = [
    images.home_banner_1,
    images.home_banner_2,
    images.home_banner_3,
  ];
  const homebanners = [
    images.home_banner_4,
    images.home_banner_5,
    images.home_banner_6,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="Home">
      <div className="home-slider">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {sliderImages?.map((image, index) => (
            <div className="slider-item" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="home-banner">
        <ProductCarousel products={products} />
      </div>
      {homebanners?.map((items, index) => (
        <Row key={index}>
          <Col>
            <div className="home-banner">
              <img src={items} alt={`home ${index + 1}`} />
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Home;
