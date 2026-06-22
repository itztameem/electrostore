import React from 'react';

export const Categories = () => {
  const categories = [
    { id: 1, name: 'Audio & Sound', icon: '🎧', items: '120+ Items' },
    { id: 2, name: 'Smartphones', icon: '📱', items: '85+ Items' },
    { id: 3, name: 'Laptops & Computers', icon: '💻', items: '50+ Items' },
    { id: 4, name: 'Smart Watches', icon: '⌚', items: '40+ Items' },
  ];

  return (
    <section id="categories" style={styles.section}>
      <h2 style={styles.sectionTitle}>Shop by Category</h2>
      <div style={styles.categoryGrid}>
        {categories.map((cat) => (
          <div key={cat.id} style={styles.categoryCard}>
            <div style={styles.categoryIcon}>{cat.icon}</div>
            <h3 style={styles.categoryName}>{cat.name}</h3>
            <p style={styles.categoryItems}>{cat.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '60px 40px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif',textAlign:'center' },
  sectionTitle: { fontSize: '28px', fontWeight: '700', marginBottom: '30px', textAlign: 'center' },
  categoryGrid: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems:'center', gap: '20px',width:'100%' },
  categoryCard: { backgroundColor: 'white', padding: '30px 20px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #f3f4f6', cursor: 'pointer' },
  categoryIcon: { fontSize: '40px', marginBottom: '15px' },
  categoryName: { fontSize: '18px', margin: '0 0 5px 0', fontWeight: '600' },
  categoryItems: { fontSize: '14px', color: '#9ca3af', margin: 0 }
};