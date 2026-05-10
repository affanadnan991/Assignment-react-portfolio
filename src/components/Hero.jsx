import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 h-72 w-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-floate"></div>
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-floate"></div>
      </section>
    </div>
  )
}

export default Hero
