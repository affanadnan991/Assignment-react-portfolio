import React from 'react';
import { portfolioData } from '../data/data';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import project1 from '../images/project1.svg';
import project2 from '../images/project2.svg';
import project3 from '../images/project3.svg';

const ProjectsPage = () => {
  const { projects } = portfolioData;
  const images = [project1, project2, project3];

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '32px'
  };

  const projectContentStyle = {
    padding: '20px'
  };

  const techStackStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '12px'
  };

  const tagStyle = {
    display: 'inline-block',
    padding: '4px 12px',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '500'
  };

  const linkStyle = {
    display: 'inline-block',
    marginTop: '16px',
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'color 0.3s ease'
  };

  return (
    <Section title="Projects" subtitle="Recent work and featured projects">
      <div style={gridStyle}>
        {projects.map((project, index) => (
          <Card key={project.id} image={images[index]} variant="image">
            <div style={projectContentStyle}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: '600', color: '#1f2937' }}>
                {project.title}
              </h3>
              <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
                {project.description}
              </p>
              <div style={techStackStyle}>
                {project.technologies.map((tech, i) => (
                  <span key={i} style={tagStyle}>{tech}</span>
                ))}
              </div>
              <a href={project.link} style={linkStyle}>
                View Project →
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsPage;
