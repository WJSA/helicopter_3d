import React from 'react';

const Adventure = () => {
  return (
    <section className='w-full h-screen relative top-18 overflow-hidden'>
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        className='absolute top-0 left-0 w-full h-full object-cover z-40'
      >
        <source src='https://api.vercel.com/now/files/6ffe48a1afe33649eacfd20311221a165eac1193/day_-_22555%20(720p).mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Texto "Adventure" */}
      <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 font-bold'>
        <img
          src='https://api.vercel.com/now/files/3303ae500f2eaf659d5d2849f73980eaaf439118/ADVENTURE.png'
          alt='City Image'
          className='w-full h-full'
        />
      </div>
    </section>
  );
};

export default Adventure;

