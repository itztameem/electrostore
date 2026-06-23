import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Electro<span style={{ color: '#0070f3' }}>Store</span></div>
      <div style={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/features">About</Link>
        <Link to="/footer">Footer</Link>
        <Link to="/cart">Cart</Link>
        
             </div>
      <div style={styles.cartIcon}>
        🛒 <span style={styles.cartCount}>2</span>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    fontFamily: 'sans-serif'
  },
  logo: { fontSize: '24px', fontWeight: 'bold', letterSpacing: '0.5px' },
  navLinks: { display: 'flex', gap: '30px' },
  navLink: { textDecoration: 'none', color: '#4b5563', fontWeight: '500' },
  cartIcon: { fontSize: '20px', position: 'relative', cursor: 'pointer' },
  cartCount: { position: 'absolute', top: '-8px', right: '-10px', backgroundColor: '#0070f3', color: 'white', fontSize: '12px', padding: '2px 6px', borderRadius: '50%' }
};