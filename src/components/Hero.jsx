import React, { useRef, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import videoBackground from '../assets/video.mp4';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Video playback failed:', error.message);
      });
    }
  }, []);

  return (
    <div className='relative bg-black overflow-hidden'>
      <video ref={videoRef} className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted playsInline>
        <source src={videoBackground} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='relative z-10 max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center text-white'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold'> Wanna Explore The Universe?</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>We have:</p>
          <ReactTyped className='md:text-4xl sm:text-3xl text-xl font-bold pl-2'  strings={['Astronomy Photo Of The Day', 'Mars Rover Photos', 'Wild Fire']} typeSpeed={100} backSpeed={50} loop />
        </div>
      </div>
    </div>
  );
};

export default Hero;
