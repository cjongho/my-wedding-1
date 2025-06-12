// 예시: src/components/Message.js
import React from 'react';
import styles from './Message.module.css';

const Message = () => {
  return (
    <section className={styles.messageSection}> {/* 공통 section 클래스 대신 자체 클래스 사용 */}
      <h2 className={styles.sectionTitle}>우리의 시작을 함께해주세요</h2>
      <p className={styles.mainMessage}>
        서로의 가장 좋은 벗이 되겠습니다.<br />
        따뜻한 마음으로 축복해주시면 더없는 기쁨으로 간직하겠습니다.
      </p>
      <div className={styles.names}>
        <p>신랑 <strong>채종호</strong></p>
        <p>신부 <strong>나희경</strong></p>
      </div>
    </section>
  );
};
export default Message;