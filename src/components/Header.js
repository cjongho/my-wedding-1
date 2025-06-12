// src/components/Header.js
import React from 'react';
import styles from './Header.module.css';
import mainImage from '../assets/main.jpg'; // 이미지 경로는 동일
import { motion } from 'framer-motion'; // motion 불러오기
import Dday from './Dday';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <img src={mainImage} alt="Main Wedding" className={styles.mainImage} />
      </div>
      <div className={styles.textOverlay}>
  <motion.h1 
    className={styles.title}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    JJyong & KKyong
  </motion.h1>

  <motion.p 
    className={styles.subtitle}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // 0.2초 딜레이
  >
    함께 맞이할 소중한 날
  </motion.p>

  <motion.p 
    className={styles.date}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} // 0.4초 딜레이
  >
    2025년 10월 25일 토요일 오후 12시
  </motion.p>
  
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.6 }} // D-day는 마지막에 천천히 나타나도록
  >
    <Dday />
  </motion.div>
</div>
    </header>
  );
};

export default Header;