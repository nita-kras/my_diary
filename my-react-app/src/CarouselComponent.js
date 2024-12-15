import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/images")
      .then((response) => response.json())
      .then((data) => {
        // Shuffle the images randomly
        const shuffledImages = data.sort(() => Math.random() - 0.5);
        setImages(shuffledImages);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={`http://localhost:3001${image}`} // Update to complete URL
              alt={`image-${index}`}
              style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
