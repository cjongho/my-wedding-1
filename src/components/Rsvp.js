// src/components/Rsvp.js
import React, { useState } from 'react';
import styles from './Rsvp.module.css';
import { motion } from 'framer-motion'; // 1. motion 불러오기


const Rsvp = () => {
  const [formData, setFormData] = useState({
    name: '',
    attending: 'yes',
    guests: 1,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ⚠️ 중요: 실제로는 이 데이터를 서버나 Google Sheets로 보내야 합니다.
    // 지금은 콘솔에 로그를 찍고, 제출 완료 상태로 변경하는 것으로 대체합니다.
    console.log('RSVP 제출 데이터:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className={styles.rsvpSection}>
        <div className={styles.thankYouMessage}>
          <h2>회신해주셔서 감사합니다.</h2>
          <p>소중한 마음 잊지 않고, 기쁜 날을 준비하겠습니다.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.rsvpSection}>
      <motion.h2 className={styles.title}
      initial={{ opacity: 0, y: 30 }} // 초기 상태: 투명하고 30px 아래에
        whileInView={{ opacity: 1, y: 0 }} // 화면에 보일 때: 선명하고 제자리로
        viewport={{ once: true }} // 애니메이션이 딱 한 번만 실행되도록 설정
        transition={{ duration: 0.8, ease: "easeOut" }} // 0.8초 동안 부드럽게
        >참석 여부 회신
        </motion.h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">성함</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label>참석 여부</label>
          <div className={styles.radioGroup}>
            <label>
              <input type="radio" name="attending" value="yes" checked={formData.attending === 'yes'} onChange={handleChange} />
              참석
            </label>
            <label>
              <input type="radio" name="attending" value="no" checked={formData.attending === 'no'} onChange={handleChange} />
              불참
            </label>
          </div>
        </div>
        {formData.attending === 'yes' && (
          <div className={styles.formGroup}>
            <label htmlFor="guests">참석 인원 (본인 포함)</label>
            <input type="number" id="guests" name="guests" min="1" value={formData.guests} onChange={handleChange} />
          </div>
        )}
        <div className={styles.formGroup}>
          <label htmlFor="message">전하고 싶은 말 (선택)</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
        </div>
        <motion.button 
        type="submit" 
        className={styles.submitButton}
        whileHover={{ scale: 1.03 }} // 마우스를 올리면 1.03배 커짐
        whileTap={{ scale: 0.98 }} // 클릭하면 0.98배 작아짐
        >
            회신하기
        </motion.button>
      </form>
    </section>
  );
};

export default Rsvp;