import React, { useEffect, useState, useMemo } from "react";
import "./Carousel.scss";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const images = useMemo(() => [
    {
      src: '/portfolio/assets/images/Qwenta.png',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: '/portfolio/assets/images/bluel.png',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: '/portfolio/assets/images/chats-roux.webp',
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ], []);

  

  useEffect(() => {
    const nextCard = () => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const timer = setTimeout(nextCard, 5000);
    return () => clearTimeout(timer);
  }, [index, images]);
  

  const handleRadioChange = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <div className="SlideCardList">
      {images.map((image, idx) => (
        <div key={idx}>
          <div className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}>
            <img src={image.src} alt={image.altText} />
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {images.map((image, radioIdx) => (
            <input
              key={radioIdx} 
              type="radio"
              name="radio-button"
              checked={index === radioIdx}
              onChange={() => handleRadioChange(radioIdx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
