// src/components/Gallery.js

import React, { useState, useEffect, useRef } from 'react';
import styles from './Gallery.module.css';
import { motion } from 'framer-motion'; // 1. motion 불러오기
import image1 from '../assets/gallery/image1.jpg';
import image2 from '../assets/gallery/image2.jpg';
import image3 from '../assets/gallery/image3.jpg';

const images = [image1, image2, image3];

const Gallery = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * (100 / images.length)}%)`;
    }
  }, [currentIndex]);

  return (
    <section className={styles.gallerySection}>
      <motion.h2 
       className={styles.galleryTitle}
       initial={{ opacity: 0, y: 30 }} // 초기 상태: 투명하고 30px 아래에
       whileInView={{ opacity: 1, y: 0 }} // 화면에 보일 때: 선명하고 제자리로
       viewport={{ once: true }} // 애니메이션이 딱 한 번만 실행되도록 설정
       transition={{ duration: 0.8, ease: "easeOut" }} // 0.8초 동안 부드럽게
      >
        아름다운 순간들
        </motion.h2>
      <div className={styles.sliderContainer}>
        <div className={styles.slider} ref={sliderRef} style={{ width: `${images.length * 100}%` }}>
          {images.map((image, index) => (
            // 👇 이 img 태그의 style 속성을 다시 추가합니다!
            <img 
              key={index} 
              src={image} 
              alt={`웨딩 갤러리 ${index + 1}`} 
              className={styles.slide} 
              style={{ width: `${100 / images.length}%` }} // 이 부분이 핵심입니다!
            />
          ))}
        </div>
        {/* 이전/다음 버튼 및 페이지네이션은 이전 코드와 동일합니다. */}
        <button className={styles.prevButton} onClick={prevSlide}>
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.arrowIcon}>
          <path d="M15.707 17.293a1 1 0 01-1.414 0L8.586 11.5l5.707-5.707a1 1 0 011.414 1.414L11.414 11.5l4.293 4.293a1 1 0 010 1.5z" clipRule="evenodd" />
        </svg>
        </button>
        <button className={styles.nextButton} onClick={nextSlide}>
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.arrowIcon}>
            <path d="M8.293 17.293a1 1 0 001.414 0L15.414 11.5 9.707 5.793a1 1 0 00-1.414 1.414L12.586 11.5l-4.293 4.293a1 1 0 000 1.5z" clipRule="evenodd" />
        </svg>
        </button>
        <div className={styles.pagination}>
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.paginationDot} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
      </div>
    </section>
  );
};

export default Gallery;