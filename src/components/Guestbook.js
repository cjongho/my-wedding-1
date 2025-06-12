// src/components/Guestbook.js (API 랜덤 아바타 최종 버전)

import React, { useState, useEffect } from 'react';
import styles from './Guestbook.module.css';
import { motion, AnimatePresence } from 'framer-motion';

// 아바타를 생성하는 함수
const generateAvatarUrl = (seed) => {
  // DiceBear의 pixel-art 스타일 SVG를 사용합니다.
  return `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}`;
};

const Guestbook = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [entries, setEntries] = useState([]);
  const [submitState, setSubmitState] = useState('idle');

  // 선택된 아바타의 'seed'(고유 식별 문자열)를 상태로 관리합니다.
  const [avatarSeed, setAvatarSeed] = useState('initial');

  // 컴포넌트가 처음 로드될 때 한 번만 랜덤 아바타를 생성합니다.
  useEffect(() => {
    randomizeAvatar();
  }, []);

  // 새로운 랜덤 아바타를 생성하는 함수
  const randomizeAvatar = () => {
    // Math.random()을 사용해 매번 다른 아바타가 나오도록 랜덤 문자열 생성
    const newSeed = Math.random().toString(36).substring(7);
    setAvatarSeed(newSeed);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      const newEntry = { 
        name, 
        message, 
        timestamp: new Date().toLocaleString('ko-KR'),
        // 저장할 때 현재 선택된 아바타의 seed 값을 함께 저장합니다.
        seed: avatarSeed,
      };
      setEntries([newEntry, ...entries]);
      setName('');
      setMessage('');
      setSubmitState('success');
      setTimeout(() => setSubmitState('idle'), 1500);
      // 제출 후 다음 사람을 위해 아바타를 다시 랜덤으로 변경
      randomizeAvatar();
    }
  };

  return (
    <section className={styles.guestbook}>
      <h2 className={styles.title}>축하 메시지</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        
        {/* --- 랜덤 아바타 생성기 UI --- */}
        <div className={styles.avatarGenerator}>
          <div className={styles.avatarPreview}>
            <img src={generateAvatarUrl(avatarSeed)} alt="Avatar Preview" />
          </div>
          <motion.button 
            type="button" 
            className={styles.randomButton} 
            onClick={randomizeAvatar}
            whileTap={{ scale: 0.95 }}
          >
            새로운 아바타
          </motion.button>
        </div>
        {/* --- 랜덤 아바타 생성기 UI 끝 --- */}

        <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} required />
        <textarea placeholder="메시지를 남겨주세요." value={message} onChange={(e) => setMessage(e.target.value)} className={styles.textarea} required />
        
        <motion.button type="submit" className={styles.submitButton} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          {submitState === 'idle' ? '남기기' : '✓'}
        </motion.button>
      </form>

      <div className={styles.entries}>
        <AnimatePresence>
          {entries.map((entry, index) => (
            <motion.div
              key={index}
              className={styles.entry}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* 등록된 글에 저장된 seed로 아바타 표시 */}
              <div className={styles.avatar}>
                <img src={generateAvatarUrl(entry.seed)} alt="Guest Avatar" />
              </div>
              <div className={styles.entryContent}>
                <div className={styles.entryHeader}>
                  <strong>{entry.name}</strong>
                  <span className={styles.timestamp}>{entry.timestamp}</span>
                </div>
                <p>{entry.message}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Guestbook;