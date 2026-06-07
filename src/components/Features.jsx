import React from 'react';

export const Features = () => {
  const steps = [
    { icon: '🚀', title: 'Free Shipping', desc: 'On all orders over $50' },
    { icon: '🔒', title: 'Secure Payment', desc: '100% protected checkout' },
    { icon: '🔄', title: 'Easy Returns', desc: '30-day money back guarantee' },
    { icon: '💬', title: '24/7 Support', desc: 'Dedicated tech assistance' }
  ];

  return (
    <section style={styles.container}>
      {steps.map((step, index) => (
        <div key={index} style={styles.featureCard}>
          <span style={styles.icon}>{step.icon}</span>
          <div>
            <h4 style={styles.title}>{step.title}</h4>
            <p style={styles.desc}>{step.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '40px',
    backgroundColor: '#ffffff',
    borderTop: '1px solid #e5e7eb',
    borderBottom: '1px solid #e5e7eb',
    fontFamily: 'sans-serif'
  },
  featureCard: { display: 'flex', alignItems: 'center', gap: '15px', minWidth: '200px' },
  icon: { fontSize: '30px' },
  title: { margin: '0 0 3px 0', fontSize: '16px', fontWeight: '600', color: '#1f2937' },
  desc: { margin: 0, fontSize: '13px', color: '#6b7280' }
};