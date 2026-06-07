import React from 'react';

export const Footer = () => {
  return (
    <footer id="contact" style={styles.footer}>
      <div style={styles.footerGrid}>
        <div>
          <h3 style={styles.footerHeading}>ElectroStore</h3>
          <p style={styles.footerText}>Your one-stop destination for premium, high-quality modern electronics and gadgets.</p>
        </div>
        <div>
          <h4 style={styles.footerSubheading}>Quick Links</h4>
          <ul style={styles.footerList}>
            <li><a href="#home" style={styles.footerLink}>About Us</a></li>
            <li><a href="#products" style={styles.footerLink}>Privacy Policy</a></li>
            <li><a href="#categories" style={styles.footerLink}>Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 style={styles.footerSubheading}>Contact Support</h4>
          <p style={styles.footerText}>Email: support@electrostore.com</p>
          <p style={styles.footerText}>Phone: +1 (555) 019-2834</p>
        </div>
      </div>
      <div style={styles.footerBottom}>
        &copy; {new Date().getFullYear()} ElectroStore. All rights reserved. Designed for React Assignment.
      </div>
    </footer>
  );
};

const styles = {
  footer: { backgroundColor: '#0f172a', color: '#94a3b8', padding: '60px 40px 30px 40px', marginTop: '60px', fontFamily: 'sans-serif' },
  footerGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' },
  footerHeading: { color: 'white', fontSize: '22px', margin: '0 0 15px 0' },
  footerSubheading: { color: 'white', fontSize: '16px', margin: '0 0 15px 0' },
  footerText: { fontSize: '14px', lineHeight: '1.6', margin: '0 0 10px 0' },
  footerList: { listStyleType: 'none', padding: 0, margin: 0 },
  footerLink: { color: '#94a3b8', textDecoration: 'none', fontSize: '14px', display: 'inline-block', marginBottom: '10px' },
  footerBottom: { borderTop: '1px solid #334155', marginTop: '40px', paddingTop: '20px', textAlign: 'center', fontSize: '13px' }
};