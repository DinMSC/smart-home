import ContactComponent from './ContactComponent';

const Hero = () => {
  return (
    <div className='relative'>
      <img
        src='/Frame 26085865.png'
        alt='Description of the image'
        className='w-full'
      />
      <div className='absolute top-[12%] right-[14%] text-white '>
        <img src='/iPhone 14 (1) 1.svg' alt='gogi' />
      </div>

      <div className='absolute top-[12%] left-[13%] text-[#FF4D00] text-3xl font-semibold '>
        <p className='pb-4'>Smart Living Starts Here:</p>
        <p className='pb-8'>Stay Connected, Stay Informed.</p>
        <p className='text-xl text-white w-[460px] font-normal'>
          <span className='text-[#FF4D00] underline'>WAVEZ</span> modernizes
          residential buildings by providing smart lobby tablets and a tenant
          app, enabling seamless communication, real-time updates, and remote
          camera access for{' '}
          <span className='font-normal text-xl text-[#FF4D00]'>
            a connected living experience
          </span>
          .
        </p>
        <div className='pt-[100px]'>
          <ContactComponent />
        </div>
      </div>
    </div>
  );
};

export default Hero;
