import React from 'react'
import { portfolioData } from '../data/data'
import Button from '../components/common/Button'

const Home = () => {
  return (
    <>
      <style>
        {`

          .hero {
            position: relative;
            height: 100vh;

            background-image: url('src/images/hero-bg.svg');
            background-size: cover;
            background-position: center;

            display: flex;
            align-items: center;

            padding: 0 80px;

            overflow: hidden;
          }

          /* Dark + Blur Overlay */
          .hero-overlay {
            position: absolute;
            inset: 0;

            background: rgba(0, 0, 0, 0.6);

            backdrop-filter: blur(4px);
          }

          /* Text Content */
          .hero-content {
            position: relative;
            z-index: 2;

            color: white;

            max-width: 700px;
          }

          .hero-content h1 {
            font-size: 4rem;
            margin-bottom: 10px;

            font-weight: bold;
          }

          .hero-content h2 {
            font-size: 2rem;

            color: #00bcd4;

            margin-bottom: 20px;
          }

          .hero-content p {
            font-size: 1.1rem;

            line-height: 1.8;

            margin-bottom: 30px;

            color: #ddd;
          }

          /* Mobile Responsive */
          @media(max-width: 768px){

            .hero{
              padding: 0 30px;
            }

            .hero-content h1{
              font-size: 2.5rem;
            }

            .hero-content h2{
              font-size: 1.5rem;
            }

            .hero-content p{
              font-size: 1rem;
            }

          }

        `}
      </style>

      <section className="hero">

        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <div className="hero-content">

          <h1>{portfolioData.hero.title}</h1>

          <h2>{portfolioData.hero.subtitle}</h2>

          <p>{portfolioData.hero.description}</p>
<div className="btns" style={{gap: '20px'}}>
          <Button text="Download CV" variant='primary' onClick={() => window.open(portfolioData.hero.cv)} style={{marginRight: '10px'}} disabled />
          <a href="#projects">
          <Button text="View My Work" variant="secondary" style={{marginLeft: '10px'}} />
          </a>
          </div>

        </div>

      </section>
    </>
  )
}

export default Home