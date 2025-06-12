// src/components/Gift.js
import React, { useState } from 'react';
import styles from './Gift.module.css';

const Gift = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (accountNumber) => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(accountNumber);
    setTimeout(() => setCopied(null), 2000); // 2초 후 초기화
  };

  return (
    <section className={styles.giftSection}>
      <h2 className={styles.title}>마음 전하실 곳</h2>
      <div className={styles.accountGroup}>
        <h3>신랑측 계좌번호</h3>
        <div className={styles.accountItem}>
          <span>신한은행 110-123-456789 (예금주: 채종호)</span>
          <button onClick={() => handleCopy('110123456789')}>
            {copied === '110123456789' ? '복사완료' : '복사'}
          </button>
        </div>
      </div>
      <div className={styles.accountGroup}>
        <h3>신부측 계좌번호</h3>
        <div className={styles.accountItem}>
          <span>국민은행 987654-01-123456 (예금주: 나희경)</span>
          <button onClick={() => handleCopy('98765401123456')}>
            {copied === '98765401123456' ? '복사완료' : '복사'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gift;