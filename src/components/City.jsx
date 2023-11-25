import React, { useEffect, useState } from 'react';

const City = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollRange = 1500;
      const progress = Math.min(scrollY / scrollRange, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const maxScale = 1;
  const minScale = 0.5;
  const scaleFactor = minScale + (maxScale - minScale) * Math.sin(scrollProgress * Math.PI);

  // Ajusta estos valores según tus preferencias
  const translateY = -50 + scrollProgress * 50; // Cambia de -50% a 0%
  const translateX = -50 + Math.sin(scrollProgress * Math.PI) * 50; // Cambia de -50% a 50%

  return (
    <section className='w-full h-screen relative top-18 overflow-hidden'>
      <div className='absolute top-1/2 left-0 right-0 z-10 flex items-center justify-center'>
        <img
          src='https://api.vercel.com/now/files/e76627aa412ae64f57d6335f1d9430c8f0e057d8/bg233%201.png'
          alt='City Image'
          className='z-4'
        />
      </div>

      <div className='absolute top-1/3 left-1/3 right-0 z-20 flex items-end justify-center' style={{ transform: `translateY(${translateY}%) translateX(${translateX}%)` }}>
        <img
          src='https://api.vercel.com/now/files/d52383569074810cc6a9ecdb2b21eb605c3e2c55/CITY.png'
          alt='City Image'
          style={{ transform: `scale(${scaleFactor})`, zIndex: 1 }}
        />
      </div>

      <video
        autoPlay
        muted
        loop
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
        style={{ zIndex: 0 }}
      >
        <source src='https://api.vercel.com/now/files/b5e93ab43de8a6cbd83f22fcca5c834b331fe416/Dubai-City-Under-A-Could-Of-Heavy-Fog-Aerial-View-2022-09-30-17-54-26-Utc.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default City;
