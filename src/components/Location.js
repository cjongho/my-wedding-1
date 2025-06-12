// src/components/Location.js
import React from 'react';
import styles from './Location.module.css';
import { motion } from 'framer-motion'; // 1. motion 불러오기

const Location = () => {
  return (
    <section className={styles.locationSection}>
      <motion.h2
       className={styles.title}
       initial={{ opacity: 0, y: 30 }} // 초기 상태: 투명하고 30px 아래에
        whileInView={{ opacity: 1, y: 0 }} // 화면에 보일 때: 선명하고 제자리로
        viewport={{ once: true }} // 애니메이션이 딱 한 번만 실행되도록 설정
        transition={{ duration: 0.8, ease: "easeOut" }} // 0.8초 동안 부드럽게
        >
          오시는 길
        </motion.h2>
          
      <div className={styles.info}>
        <p className={styles.venue}>더채플앳논현</p>
        <p className={styles.address}>서울 강남구 논현로 549</p>
        <p className={styles.time}>2025년 10월 25일 토요일 오후 12시</p>
      </div>

      {/* --- 지도 삽입: Google 지도 iframe 방식으로 변경 --- */}
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.842095878726!2d127.0267023764431!3d37.51139442749463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e54b555555%3A0x53c913a52145df07!2z642U7LGF7ZSM7JeG64W87ZiE!5e0!3m2!1sko!2skr!4v1717769493540!5m2!1sko!2skr"
          className={styles.mapFrame}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wedding Venue Location"
        ></iframe>
      </div>
      {/* --- 지도 삽입 끝 --- */}


      <div className={styles.transportation}>
        <div className={styles.transportItem}>
          <h3>지하철</h3>
          <p>9호선 언주역 2번 출구 도보 1분</p>
        </div>
        <div className={styles.transportItem}>
          <h3>버스</h3>
          <p>차병원 버스정류장 하차</p>
        </div>
        <div className={styles.transportItem}>
          <h3>주차</h3>
          <p>건물 내 주차장 이용 (2시간 무료)</p>
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <a href="kakaomap://place?id=8888001" target="_blank" rel="noopener noreferrer" className={styles.mapButton}>카카오맵</a>
        <a href="https://map.naver.com/p/entry/place/13572098" target="_blank" rel="noopener noreferrer" className={styles.mapButton}>네이버지도</a>
      </div>
    </section>
  );
};

export default Location;