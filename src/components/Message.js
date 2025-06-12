// src/components/Message.js
import React from 'react';
import styles from './Message.module.css';
import { motion } from 'framer-motion'; // 1. motion 불러오기

const Message = () => {
  return (
    <section className={styles.messageSection}>
      {/* 2. h2를 motion.h2로 변경하고 애니메이션 속성 추가 */}
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 30 }} // 초기 상태: 투명하고 30px 아래에
        whileInView={{ opacity: 1, y: 0 }} // 화면에 보일 때: 선명하고 제자리로
        viewport={{ once: true }} // 애니메이션이 딱 한 번만 실행되도록 설정
        transition={{ duration: 0.8, ease: "easeOut" }} // 0.8초 동안 부드럽게
      >
        우리의 시작을 함께해주세요
      </motion.h2>
      <p className={styles.mainMessage}>
        서로의 가장 좋은 벗이 되겠습니다.<br />
        따뜻한 마음으로 축복해주시면 더없는 기쁨으로 간직하겠습니다.
      </p>
      {/* ... 나머지 내용 */}
    </section>
  );
};
export default Message;