import React from 'react';

const Card = ({ title, description, image, children, variant = 'default' }) => {
  const baseStyle = {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const variants = {
    default: {
      padding: '24px'
    },
    image: {
      padding: '0'
    }
  };

  return (
    <div
      style={{ ...baseStyle, ...variants[variant] }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
    >
      {image && <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />}
      {variant !== 'image' && (
        <>
          {title && <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '600', color: '#1f2937' }}>{title}</h3>}
          {description && <p style={{ margin: '0', fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>{description}</p>}
        </>
      )}
      {children}
    </div>
  );
};

export default Card;
