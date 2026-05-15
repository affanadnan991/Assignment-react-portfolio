import React from 'react';
import { portfolioData } from '../data/data';
import Button from '../components/common/Button';
import heroImage from '../images/hero-bg.svg';

const HomePage = () => {
  const { hero } = portfolioData;

  const heroStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    position: 'relative',
    overflow: 'hidden',
    color: '#fff',
    textAlign: 'center'
  };

  const containerStyle = {
    position: 'relative',
    zIndex: 10,
    maxWidth: '800px',
    padding: '40px 20px'
  };

  const titleStyle = {
    fontSize: '64px',
    fontWeight: '700',
    marginBottom: '20px',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    letterSpacing: '-1px'
  };

  const subtitleStyle = {
    fontSize: '32px',
    fontWeight: '500',
    marginBottom: '20px',
    opacity: 0.95
  };

  const descriptionStyle = {
    fontSize: '18px',
    marginBottom: '40px',
    lineHeight: '1.6',
    opacity: 0.9
  };

  const decorativeStyle = {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(40px)',
    opacity: 0.3,
    animation: 'float 6s ease-in-out infinite'
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
      `}</style>
      <section style={heroStyle}>
        <div style={{ ...decorativeStyle, width: '300px', height: '300px', background: '#fff', top: '20%', left: '10%' }} />
        <div style={{ ...decorativeStyle, width: '300px', height: '300px', background: '#fff', bottom: '20%', right: '10%' }} />
        
        <div style={containerStyle}>
          <h1 style={titleStyle}>{hero.title}</h1>
          <h2 style={subtitleStyle}>{hero.subtitle}</h2>
          <p style={descriptionStyle}>{hero.description}</p>
          <Button text={hero.cta} variant="secondary" />
        </div>
      </section>
    </>
  );
};

export default HomePage;
