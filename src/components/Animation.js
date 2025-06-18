// src/components/Animation.js
import React from 'react';
import styles from './Animation.module.css';
import { motion } from 'framer-motion';

const Animation = () => {
  return (
    <section className={styles.animationSection}>
      <div className={styles.contentWrapper}> 
       <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        우리의 첫 만남 이야기
       </motion.h2>
       <div className={styles.videoContainer}>
        <iframe 
          src="https://www.youtube.com/embed/Fa8BF0uH_HM?si=0pAASWbJ4ULaKnaE?autoplay=1&mute=1" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          className={styles.videoPlayer}
        ></iframe>
       </div>
      </div>
    </section>
  );
};

export default Animation;