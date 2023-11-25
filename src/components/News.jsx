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
          src='https://api.vercel.com/now/files/5a8564c0180f665b2dbe48e45d36a21e3bb6d38f/NEWS.png'
          alt='City Image'
          style={{ transform: `scale(${scaleFactor})` }}
        />
      </div>

      {/* Botón */}
      <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 text-white bg-black rounded-xl hover:bg-gray-800 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 text-5xl z-40">
        CONTACT
      </button>

      <div className='fixed right-12 top-1/2 transform -translate-y-1/2'>
        <img src='https://api.vercel.com/now/files/b6b9765db4323feb8d5ff90e0e16ddc722c826b7/facebook.png' className='mb-5'/>
        <img src='https://api.vercel.com/now/files/3a6f574e3f5b9d1dd63bca3ad4b17a32232ca563/twitter.png' className='mt-5 mb-5'/>
        <img src='https://api.vercel.com/now/files/9e7a62c9e5f5c379c8ea3875b8ab8f61e28fe9ac/instagram.png' className='mt-5'/>  
      </div>
      
    </section>
  );
};

export default News;
