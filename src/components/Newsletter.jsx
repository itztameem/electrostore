import React from 'react';

export const Newsletter = () => {
  return (
    <section style={styles.banner}>
      <div style={styles.content}>
        <h2 style={styles.title}>Join Our Newsletter</h2>
        <p style={styles.subtitle}>Subscribe to get notified about exclusive sales, discount coupons, and new tech arrivals.</p>
        <div style={styles.form}>
          <input type="email" placeholder="Enter your best email address" style={styles.input} />
          <button style={styles.btn}>Subscribe Now</button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  banner: { backgroundColor: '#1e293b', padding: '60px 20px', textAlign: 'center', fontFamily: 'sans-serif', margin: '40px 0' },
  content: { maxWidth: '600px', margin: '0 auto' },
  title: { color: 'white', fontSize: '28px', fontWeight: '700', margin: '0 0 10px 0' },
  subtitle: { color: '#94a3b8', fontSize: '15px', lineHeight: '1.6', margin: '0 0 25px 0' },
  form: { display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' },
  input: { padding: '12px 20px', fontSize: '15px', borderRadius: '6px', border: 'none', width: '280px', outline: 'none' },
  btn: { backgroundColor: '#0070f3', color: 'white', padding: '12px 24px', fontSize: '15px', fontWeight: '600', border: 'none', borderRadius: '6px', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0, 112, 243, 0.2)' }
};