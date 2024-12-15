import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log('Fetching images.json from:', process.env.PUBLIC_URL + "/images.json"); // Log the URL
    fetch(process.env.PUBLIC_URL + "/images.json")
      .then((response) => response.json())
      .then((data) => {
        const shuffledImages = data.sort(() => Math.random() - 0.5);
        console.log('Shuffled Images:', shuffledImages); // Log shuffled images to check
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

  // Log image paths for debugging
  useEffect(() => {
    images.forEach(image => {
      console.log(`/unsensored/${image}`);
    });
  }, [images]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
  src={`${process.env.PUBLIC_URL}/unsensored/${image}`}
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
