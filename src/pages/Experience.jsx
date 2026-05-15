import React from 'react';
import { portfolioData } from '../data/data';
import Section from '../components/common/Section';
import Card from '../components/common/Card';

const ExperiencePage = () => {
  const { experience } = portfolioData;

  const timelineStyle = {
    position: 'relative',
    paddingLeft: '40px'
  };

  const timelineItemStyle = {
    marginBottom: '40px',
    paddingBottom: '40px',
    borderLeft: '2px solid #e5e7eb',
    position: 'relative'
  };

  const dotStyle = {
    position: 'absolute',
    left: '-13px',
    top: '0',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#667eea',
    border: '4px solid #fff',
    boxShadow: '0 0 0 2px #667eea'
  };

  const companyStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#667eea',
    marginBottom: '4px'
  };

  const positionStyle = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '4px'
  };

  const durationStyle = {
    fontSize: '14px',
    color: '#9ca3af',
    marginBottom: '12px'
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: '1.6',
    marginBottom: '12px'
  };

  const achievementStyle = {
    fontSize: '13px',
    color: '#6b7280',
    marginLeft: '20px',
    marginTop: '8px'
  };

  return (
    <Section title="Experience" subtitle="My professional journey and achievements">
      <div style={timelineStyle}>
        {experience.map((item) => (
          <div key={item.id} style={timelineItemStyle}>
            <div style={dotStyle} />
            <div style={companyStyle}>{item.company}</div>
            <div style={positionStyle}>{item.position}</div>
            <div style={durationStyle}>{item.duration}</div>
            <p style={descriptionStyle}>{item.description}</p>
            <div>
              {item.achievements.map((achievement, index) => (
                <div key={index} style={achievementStyle}>
                  ✓ {achievement}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperiencePage;
