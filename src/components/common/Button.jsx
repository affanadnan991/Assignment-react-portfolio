import React from 'react';

const Button = ({ text, onClick, variant = 'primary', disabled = false }) => {
  const baseStyle = {
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    opacity: disabled ? 0.6 : 1
  };

  const variants = {
    primary: {
      backgroundColor: '#6366f1',
      color: '#fff',
      ':hover': { backgroundColor: '#4f46e5' }
    },
    secondary: {
      backgroundColor: 'transparent',
      color: '#6366f1',
      border: '2px solid #6366f1',
      ':hover': { backgroundColor: '#f0f3ff' }
    }
  };

  return (
    <button
      style={{ ...baseStyle, ...variants[variant] }}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={(e) => !disabled && variant === 'primary' && (e.target.style.backgroundColor = '#4f46e5')}
      onMouseLeave={(e) => !disabled && variant === 'primary' && (e.target.style.backgroundColor = '#6366f1')}
    >
      {text}
    </button>
  );
};

export default Button;
