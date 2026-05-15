import React from 'react';
import { portfolioData } from '../data/data';
import Section from '../components/common/Section';
import aboutImage from '../images/about.jpeg';

const AboutPage = () => {
  const { about } = portfolioData;

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '12px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
  };

  const contentStyle = {
    paddingRight: '20px'
  };

  const bioStyle = {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#6b7280',
    marginBottom: '24px'
  };

  const highlightsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  };

  const highlightItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    borderLeft: '4px solid #667eea'
  };

  const highlightIconStyle = {
    fontSize: '20px',
    color: '#667eea'
  };

  const highlightTextStyle = {
    fontSize: '15px',
    color: '#374151',
    fontWeight: '500'
  };

  return (
    <Section title={about.title} subtitle="">
      <div style={containerStyle}>
        <div>
          <img src={aboutImage} alt="About" style={imageStyle} />
        </div>
        <div style={contentStyle}>
          <p style={bioStyle}>{about.bio}</p>
          <div style={highlightsStyle}>
            {about.highlights.map((highlight, index) => (
              <div key={index} style={highlightItemStyle}>
                <span style={highlightIconStyle}>★</span>
                <span style={highlightTextStyle}>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutPage;
