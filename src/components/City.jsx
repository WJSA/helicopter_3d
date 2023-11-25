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
          src='./dist/bg233 1.png'
          alt='City Image'
          className='z-4'
        />
      </div>

      <div className='absolute top-1/3 left-1/3 right-0 z-20 flex items-end justify-center' style={{ transform: `translateY(${translateY}%) translateX(${translateX}%)` }}>
        <img
          src='./dist/CITY.png'
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
        <source src='./dist/cityvideo.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default City;
