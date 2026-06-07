import React from 'react';

export const AnnouncementBar = () => {
  return (
    <div style={styles.bar}>
      ⚡ FLASH SALE: Use Code <b>TECH20</b> for an extra 20% off + Free Shipping worldwide! 📦
    </div>
  );
};

const styles = {
  bar: {
    backgroundColor: '#0070f3',
    color: 'white',
    textAlign: 'center',
    padding: '8px 10px',
    fontSize: '14px',
    fontWeight: '500',
    fontFamily: 'sans-serif',
    letterSpacing: '0.5px'
  }
};