import { useState, useEffect } from "react";

const slides = [
  {
    title: "The warm new collection",
    description: "NEW FALL",
    details: " SEASON 2025",
    buttonText: "Show more",
    imageUrl: "./image.png",
  },
  {
    title: "The new stylish Collection",
    description: "NEW FALL",
    details: "SEASON 2025",
    buttonText: "Get Started",
    imageUrl: "./image1.png",
  },
  {
    title: "The latest collection",
    description: "NEW FALL",
    details: "SEASON 2025",
    buttonText: "Explore Now",
    imageUrl: "./image3.png",
  },
];

const HeaderContents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Switch every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <header className="header">
      <div className="header-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <div className="slide-content">
              <div className="text-section">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <p>{slide.details}</p>
                <button>{slide.buttonText}</button>
              </div>
              <div className="image-section">
                <img src={slide.imageUrl} alt={slide.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </header>
  );
};

export default HeaderContents;
