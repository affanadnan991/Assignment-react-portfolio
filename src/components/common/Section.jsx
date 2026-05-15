import React from 'react';

const Section = ({ title, subtitle, children, fullWidth = false }) => {
  const sectionStyle = {
    padding: fullWidth ? '0' : '60px 40px',
    marginBottom: '40px',
    backgroundColor: fullWidth ? 'transparent' : '#f9fafb',
    borderRadius: fullWidth ? '0' : '12px'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '12px',
    color: '#1f2937',
    textAlign: 'center'
  };

  const subtitleStyle = {
    fontSize: '16px',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '40px'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {title && <h2 style={titleStyle}>{title}</h2>}
        {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default Section;
