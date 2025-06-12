// src/components/Contact.js
import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>연락처</h2>
      <div className={styles.contactGrid}>
        <div className={styles.contactGroup}>
          <h3>신랑측</h3>
          <div className={styles.contactItem}>
            <span>신랑 채종호</span>
            <a href="tel:010-0000-0000" className={styles.callButton}>전화걸기</a>
          </div>
          <div className={styles.contactItem}>
            <span>아버지 쭁대디</span>
            <a href="tel:010-0000-0000" className={styles.callButton}>전화걸기</a>
          </div>
          <div className={styles.contactItem}>
            <span>어머니 쭁마미</span>
            <a href="tel:010-0000-0000" className={styles.callButton}>전화걸기</a>
          </div>
        </div>
        <div className={styles.contactGroup}>
          <h3>신부측</h3>
          <div className={styles.contactItem}>
            <span>신부 나희경</span>
            <a href="tel:010-0000-0000" className={styles.callButton}>전화걸기</a>
          </div>
          <div className={styles.contactItem}>
            <span>아버지 꾱대디</span>
            <a href="tel:010-0000-0000" className={styles.callButton}>전화걸기</a>
          </div>
          <div className={styles.contactItem}>
            <span>어머니 꾱마미</span>
            <a href="tel:010-0000-0000" className={styles.callButton}>전화걸기</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;