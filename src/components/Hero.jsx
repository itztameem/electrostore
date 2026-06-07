import React, { useState } from 'react';

export const Hero = () => {
  // State to handle the hover animation effect on the hero button
  const [btnHover, setBtnHover] = useState(false);

  return (
    <header id="home" style={styles.heroContainer}>
      
      {/* Left Column: Premium Marketing Copy & CTA */}
      <div style={styles.leftContent}>
        <div style={styles.badge}>
          <span style={styles.badgePulse}></span>
          EXCLUSIVE WEEKEND LAUNCH
        </div>
        
        <h1 style={styles.mainTitle}>
          The Next Generation <br />
          <span style={styles.highlightText}>Of Premium Tech.</span>
        </h1>
        
        <p style={styles.subtext}>
          Explore our handpicked curation of elite wireless audio gear, flagship ecosystem smartphones, and high-performance workstations. Designed to elevate your daily workflow.
        </p>
        
        <div style={styles.actionRow}>
          <button 
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              ...styles.primaryBtn,
              ...(btnHover ? styles.primaryBtnHover : {})
            }}
          >
            Explore Collection ⚡
          </button>
          
          <div style={styles.statsBox}>
            <span style={styles.statsNum}>4.9★</span>
            <span style={styles.statsLabel}>from 12k+ users</span>
          </div>
        </div>
      </div>

      {/* Right Column: High-End Hero Image Showcase */}
      <div style={styles.rightGraphics}>
        <div style={styles.imageWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80" 
            alt="Premium Gaming and Tech Set" 
            style={styles.heroImg} 
          />
          {/* Subtle accent floating glow behind the image container */}
          <div style={styles.glowOverlay}></div>
        </div>
      </div>

    </header>
  );
};

// ==========================================
// ADVANCED MODERN HERO LAYOUT STYLES
// ==========================================
const styles = {
  heroContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '80px 60px',
    background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)', // Rich cosmic dark blue gradient
    color: '#ffffff',
    minHeight: '70vh',
    fontFamily: 'sans-serif',
    overflow: 'hidden',
    gap: '40px'
  },
  leftContent: {
    flex: '1.2',
    minWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(99, 102, 241, 0.15)', // Glassmorphism badge border tint
    border: '1px solid rgba(99, 102, 241, 0.4)',
    color: '#818cf8',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1px',
    padding: '6px 14px',
    borderRadius: '30px',
    width: 'fit-content',
    marginBottom: '25px'
  },
  badgePulse: {
    width: '8px',
    height: '8px',
    backgroundColor: '#10b981', // Glowing green online marker indicator
    borderRadius: '50%',
    display: 'inline-block'
  },
  mainTitle: {
    fontSize: '48px',
    fontWeight: '800',
    lineHeight: '1.15',
    margin: '0 0 20px 0',
    letterSpacing: '-1px'
  },
  highlightText: {
    background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)', // Beautiful gradient text transition
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '900'
  },
  subtext: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: '#94a3b8',
    margin: '0 0 35px 0',
    maxWidth: '540px'
  },
  actionRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
    flexWrap: 'wrap'
  },
  primaryBtn: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    border: 'none',
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(59, 130, 246, 0.35)',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  primaryBtnHover: {
    backgroundColor: '#2563eb',
    transform: 'translateY(-3px)', // Smooth lift upward when hovered over
    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.5)'
  },
  statsBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px'
  },
  statsNum: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#fbbf24' // Vibrant gold color for rating stars
  },
  statsLabel: {
    fontSize: '13px',
    color: '#64748b'
  },
  rightGraphics: {
    flex: '1',
    minWidth: '320px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  imageWrapper: {
    position: 'relative',
    maxWidth: '480px',
    width: '100%',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)', // Soft deep cinematic dropshadow box border
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  heroImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  },
  glowOverlay: {
    position: 'absolute',
    top: '-10%',
    right: '-10%',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)',
    zIndex: -1,
    pointerEvents: 'none'
  }
};