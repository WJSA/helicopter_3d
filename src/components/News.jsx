import React, { useEffect, useState } from 'react';

const News = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scaleFactor = 1 + scrollY / 1000;

  return (
    <section className='w-full h-screen relative top-18 overflow-hidden'>

      {/* Texto CITY */}
      <div className='absolute top-1/3 px-16 z-9 flex items-end justify-center'>
        <img
          src='./dist/NEWS.png'
          alt='City Image'
          style={{ transform: `scale(${scaleFactor})` }}
        />
      </div>

      {/* Botón */}
      <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 text-white bg-black rounded-xl hover:bg-gray-800 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 text-5xl z-40">
        CONTACT
      </button>

      <div className='fixed right-12 top-1/2 transform -translate-y-1/2'>
        <img src='./dist/facebook.png' className='mb-5'/>
        <img src='./dist/twitter.png' className='mt-5 mb-5'/>
        <img src='./dist//instagram.png' className='mt-5'/>  
      </div>
      
    </section>
  );
};

export default News;
