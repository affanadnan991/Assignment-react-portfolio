import React, { useState } from 'react';
import { portfolioData } from '../data/data';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

const ContactPage = () => {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    maxWidth: '1200px',
    margin: '0 auto',
    alignItems: 'start'
  };

  const contactInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  };

  const infoItemStyle = {
    paddingBottom: '24px',
    borderBottom: '1px solid #e5e7eb'
  };

  const labelStyle = {
    fontSize: '12px',
    fontWeight: '600',
    color: '#667eea',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '8px',
    display: 'block'
  };

  const valueStyle = {
    fontSize: '16px',
    color: '#1f2937',
    fontWeight: '500'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  };

  const inputStyle = {
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: 'inherit',
    transition: 'border-color 0.3s ease'
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '150px',
    fontFamily: 'inherit'
  };

  const socialStyle = {
    display: 'flex',
    gap: '16px',
    marginTop: '16px'
  };

  const socialLinkStyle = {
    display: 'inline-block',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#667eea',
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease'
  };

  return (
    <Section title={contact.title} subtitle="Let's connect and discuss your next project">
      <div style={containerStyle}>
        <div style={contactInfoStyle}>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Email</span>
            <a href={`mailto:${contact.email}`} style={{ ...valueStyle, color: '#667eea', textDecoration: 'none' }}>
              {contact.email}
            </a>
          </div>
          
          <div style={infoItemStyle}>
            <span style={labelStyle}>Phone</span>
            <a href={`tel:${contact.phone}`} style={{ ...valueStyle, color: '#667eea', textDecoration: 'none' }}>
              {contact.phone}
            </a>
          </div>
          
          <div style={infoItemStyle}>
            <span style={labelStyle}>Location</span>
            <p style={{ ...valueStyle, margin: '0' }}>{contact.address}</p>
          </div>

          <div>
            <span style={labelStyle}>Follow</span>
            <div style={socialStyle}>
              {contact.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  title={link.name}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {link.name.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form style={formStyle} onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>
          
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              style={textareaStyle}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <Button text="Send Message" variant="primary" />
        </form>
      </div>
    </Section>
  );
};

export default ContactPage;
