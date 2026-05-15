import React from 'react';
import { portfolioData } from '../data/data';
import Section from '../components/common/Section';
import Card from '../components/common/Card';

const SkillsPage = () => {
  const { skills } = portfolioData;

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '40px'
  };

  const skillItemStyle = {
    padding: '20px',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#374151',
    borderLeft: '4px solid #667eea'
  };

  const categoryTitleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#1f2937'
  };

  return (
    <Section title="Skills" subtitle="Technologies and expertise I work with">
      <div style={gridStyle}>
        {skills.map((skillGroup) => (
          <Card key={skillGroup.id} title={skillGroup.category}>
            <div>
              {skillGroup.items.map((item, index) => (
                <div key={index} style={skillItemStyle}>
                  {item}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default SkillsPage;
