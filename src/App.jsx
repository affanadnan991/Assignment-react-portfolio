import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navStyle = {
    position: 'fixed',
    width: '100%',
    top: '0',
    zIndex: '50',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    height: '70px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#667eea',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#374151',
    fontWeight: '500',
    fontSize: '14px',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    padding: '8px 0',
    borderBottom: '2px solid transparent'
  };

  const mobileMenuStyle = {
    position: 'fixed',
    left: '0',
    top: '70px',
    width: '100%',
    backgroundColor: '#fff',
    display: mobileMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    zIndex: '40'
  };

  const mainContentStyle = {
    marginTop: '70px',
    minHeight: 'calc(100vh - 70px)'
  };

  return (
    <>
      <nav style={navStyle}>
        <div style={containerStyle}>
          <Link to="/" style={logoStyle}>
            <span>&lt;</span>
            AFFAN
            <span>/&gt;</span>
          </Link>

          <div style={{ ...navLinksStyle, '@media': '(max-width: 768px)' }}>
            <Link
              to="/"
              style={linkStyle}
              onMouseEnter={(e) => {
                e.target.style.color = '#667eea';
                e.target.style.borderBottomColor = '#667eea';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#374151';
                e.target.style.borderBottomColor = 'transparent';
              }}
            >
              Home
            </Link>
            <Link
              to="/skills"
              style={linkStyle}
              onMouseEnter={(e) => {
                e.target.style.color = '#667eea';
                e.target.style.borderBottomColor = '#667eea';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#374151';
                e.target.style.borderBottomColor = 'transparent';
              }}
            >
              Skills
            </Link>
            <Link
              to="/projects"
              style={linkStyle}
              onMouseEnter={(e) => {
                e.target.style.color = '#667eea';
                e.target.style.borderBottomColor = '#667eea';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#374151';
                e.target.style.borderBottomColor = 'transparent';
              }}
            >
              Projects
            </Link>
            <Link
              to="/experience"
              style={linkStyle}
              onMouseEnter={(e) => {
                e.target.style.color = '#667eea';
                e.target.style.borderBottomColor = '#667eea';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#374151';
                e.target.style.borderBottomColor = 'transparent';
              }}
            >
              Experience
            </Link>
            <Link
              to="/about"
              style={linkStyle}
              onMouseEnter={(e) => {
                e.target.style.color = '#667eea';
                e.target.style.borderBottomColor = '#667eea';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#374151';
                e.target.style.borderBottomColor = 'transparent';
              }}
            >
              About
            </Link>
            <Link
              to="/contact"
              style={{
                ...linkStyle,
                backgroundColor: '#667eea',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '6px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#5558d1';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#667eea';
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main style={mainContentStyle}>
        <Outlet />
      </main>
    </>
  )
}

export default App
