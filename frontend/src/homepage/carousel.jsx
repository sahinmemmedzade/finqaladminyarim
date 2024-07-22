import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { FaAngleLeft, FaAngleRight, FaCalendarAlt, FaEye } from 'react-icons/fa';

const CarouselHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      imgSrc: 'https://via.placeholder.com/800x400',
      category: 'MÜSAHİBƏ',
      date: '18 İYl, 2024 / 15:48',
      views: '1762',
      title: '"Sülhün açarı türklərin əlində olacaq" - Paşinyan iki il vaxt istəyib'
    },
    {
      imgSrc: 'https://via.placeholder.com/800x400',
      category: 'MÜSAHİBƏ',
      date: '19 İYl, 2024 / 16:48',
      views: '1900',
      title: '"Başqa bir xəbər başlığı" - Nümunə başlıq'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
   
    <div className="carousel-container">
      <div className="carousel-slide">
        <img src={slides[currentIndex].imgSrc} alt={`Slide ${currentIndex + 1}`} />
        <div className="carousel-caption">
          <div className="info">
            <div className="details">
              <div className='dateandviews'>
                <span className="date"><FaCalendarAlt /> {slides[currentIndex].date}</span>
                <span className="views"><FaEye /> {slides[currentIndex].views}</span>
              </div>
              <div className="update">Yenilənib</div>
            </div>
          </div>
          <div className="title">
            {slides[currentIndex].title}
          </div>
          <div className="icon-buttons">
            <div className="icon-button icon-button-left" onClick={prevSlide}>
              <FaAngleLeft />
            </div>
            <div className="icon-button icon-button-right" onClick={nextSlide}>
              <FaAngleRight />
            </div>
          </div>
        </div>
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselHome;
