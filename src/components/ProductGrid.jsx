import React, { useState } from 'react';
import { supabase } from '../supabase';
export const ProductGrid = () => {
  async function addToCart(product) {
  const { error } = await supabase
    .from("cart")
    .insert([
      {
        name: product.name,
        price: parseFloat(product.price.replace(/[$,]/g, "")),
        quantity: 1
      }
    ]);

  if (error) {
    console.log(error);
    alert("Failed to add product");
  } else {
    alert("Product added to cart!");
  }
}

  const [hoveredProductId, setHoveredProductId] = useState(null);

  // Replaced emoji strings with professional web image links
  const products = [
    { id: 1, name: 'Pro Wireless Headphones', price: '$299.99', rating: '⭐⭐⭐⭐⭐', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Flagship Smartphone v14', price: '$999.00', rating: '⭐⭐⭐⭐⭐', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Ultra Slim Laptop 15"', price: '$1,249.00', rating: '⭐⭐⭐⭐', img: 'https://media.istockphoto.com/id/1254756894/photo/businessman-slip-a-laptop-out-of-the-hand-business-concept.jpg?s=612x612&w=is&k=20&c=6jYJAMjHyAx6OqMw97trtFAnyDGzqSveVBuI-zVAN5k=' },
    { id: 4, name: 'Amoled Smart Watch', price: '$199.50', rating: '⭐⭐⭐⭐', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60' },
    { id: 5, name: 'Noise Cancelling Earbuds', price: '$149.99', rating: '⭐⭐⭐⭐⭐', img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60' },
    { id: 6, name: 'Mechanical Gaming Keyboard', price: '$89.99', rating: '⭐⭐⭐⭐', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60' },
  ];

  return (
    <section id="products" style={styles.section}>
      <h2 style={styles.sectionTitle}>Trending Products</h2>
      
      <div style={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            
            {/* Image Container */}
            <div style={styles.productImageContainer}>
              {product.id % 2 === 0 && <span style={styles.saleBadge}>SALE</span>}
              {/* Added a real HTML image tag with responsive fit formatting */}
              <img src={product.img} alt={product.name} style={styles.productImg} />
            </div>
            
            <div style={styles.productInfo}>
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.productRating}>{product.rating}</p>
              
              <div style={styles.productFlex}>
                <span style={styles.productPrice}>{product.price}</span>
                
                <button
                 onClick={() => addToCart(product)}
                 onMouseEnter={() => setHoveredProductId(product.id)}
                 onMouseLeave={() => setHoveredProductId(null)}
                 style={{
                    ...styles.addToCartBtn,
                   ...(hoveredProductId === product.id
                        ? styles.addToCartBtnHover
                        : {})
                    }}
                  >
                    Add to Cart
                </button>
                                  
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 40px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'sans-serif'
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '30px',
    textAlign: 'center'
  },
  productGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '25px'
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    border: '1px solid #e5e7eb',
    width: '280px'
  },
  productImageContainer: {
    position: 'relative',
    height: '220px',
    backgroundColor: '#f3f4f6',
    overflow: 'hidden'
  },
  // Style properties to stretch and center photos perfectly without distorting them
  productImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  },
  saleBadge: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    backgroundColor: '#ef4444',
    color: 'white',
    fontSize: '11px',
    fontWeight: 'bold',
    padding: '4px 8px',
    borderRadius: '4px',
    letterSpacing: '0.5px',
    zIndex: 1
  },
  productInfo: {
    padding: '20px'
  },
  productName: {
    fontSize: '17px',
    margin: '0 0 8px 0',
    fontWeight: '600',
    color: '#111827'
  },
  productRating: {
    margin: '0 0 15px 0',
    fontSize: '14px'
  },
  productFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  productPrice: {
    fontSize: '19px',
    fontWeight: '700',
    color: '#111827'
  },
  addToCartBtn: {
    backgroundColor: '#111827',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'transform 0.2s ease, backgroundColor 0.2s ease, box-shadow 0.2s ease'
  },
  addToCartBtnHover: {
    backgroundColor: '#0070f3',
    transform: 'scale(1.05)',
    boxShadow: '0 4px 10px rgba(0, 112, 243, 0.3)'
  }
};