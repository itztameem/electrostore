import React from 'react';

export const Testimonials = () => {
  const reviews = [
    { id: 1, name: 'Rahul Sharma', role: 'Verified Buyer', review: 'The delivery was incredibly fast and the headphones sound absolutely premium. 10/10 recommend!', rating: '⭐⭐⭐⭐⭐', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Ananya Patel', role: 'Tech Enthusiast', review: 'The ultra-slim laptop runs perfectly smooth for my coding projects. Absolute value for money.', rating: '⭐⭐⭐⭐⭐', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Vikram Singh', role: 'Gadget Reviewer', review: 'Stunning design and long-lasting battery on the smart watch. Will definitely purchase from here again.', rating: '⭐⭐⭐⭐', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60' }
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>What Our Customers Say</h2>
      <div style={styles.grid}>
        {reviews.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.header}>
              <img src={item.avatar} alt={item.name} style={styles.avatar} />
              <div>
                <h4 style={styles.name}>{item.name}</h4>
                <p style={styles.role}>{item.role}</p>
              </div>
            </div>
            <p style={styles.rating}>{item.rating}</p>
            <p style={styles.text}>"{item.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '60px 40px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' },
  sectionTitle: { fontSize: '28px', fontWeight: '700', marginBottom: '40px', textAlign: 'center', color: '#111827' },
  grid: { display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'center', gap: '20px', overflowX: 'auto', padding: '10px 0' },
  card: { backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '25px', width: '340px', flexShrink: 0, boxShadow: '0 4px 6px rgba(0,0,0,0.02)' },
  header: { display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' },
  avatar: { width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' },
  name: { fontSize: '16px', fontWeight: '600', margin: '0 0 2px 0', color: '#111827' },
  role: { fontSize: '13px', color: '#9ca3af', margin: 0 },
  rating: { margin: '0 0 10px 0', fontSize: '14px' },
  text: { fontSize: '14px', color: '#4b5563', lineHeight: '1.6', fontStyle: 'italic', margin: 0 }
};