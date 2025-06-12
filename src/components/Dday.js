// src/components/Dday.js
import React, { useState, useEffect } from 'react';
import styles from './Dday.module.css';

const Dday = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    // ⚠️ 결혼식 날짜를 여기에 입력하세요 (년, 월-1, 일)
    const weddingDate = new Date(2025, 9, 25); // 10월은 9로 입력

    const calculateTimeLeft = () => {
      const difference = +weddingDate - +new Date();
      let timeLeftData = {};

      if (difference > 0) {
        timeLeftData = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeftData;
    };

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      // 숫자가 10보다 작을 경우 앞에 0을 붙여줍니다.
      Object.keys(newTimeLeft).forEach(interval => {
        newTimeLeft[interval] = String(newTimeLeft[interval]).padStart(2, '0');
      });
      setTimeLeft(newTimeLeft);
    }, 1000);

    // 컴포넌트가 언마운트될 때 인터벌을 정리합니다 (메모리 누수 방지).
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.ddayContainer}>
      <p className={styles.ddayTitle}>우리의 결혼식까지</p>
      <div className={styles.countdown}>
        <div className={styles.timeUnit}>
          <span>{timeLeft.days}</span>
          <p>Days</p>
        </div>
        <div className={styles.timeUnit}>
          <span>{timeLeft.hours}</span>
          <p>Hours</p>
        </div>
        <div className={styles.timeUnit}>
          <span>{timeLeft.minutes}</span>
          <p>Mins</p>
        </div>
        <div className={styles.timeUnit}>
          <span>{timeLeft.seconds}</span>
          <p>Secs</p>
        </div>
      </div>
    </div>
  );
};

export default Dday;