import Hero from '../components/Hero';
import OurProductsCard from '../components/OurProductsCard';
import Cameras from '/Cameras.svg';

const HomePage = () => {
  return (
    <div className='relative'>
      <Hero />

      <div className='bg-black px-[13%]'>
        <p className='text-semibold text-3xl text-white pb-10'>Our Products</p>
        <OurProductsCard
          svg={<img src={Cameras} alt='Cameras' />}
          text='Providing 4K surveillance cameras that will allow you tenants to access the video stream. The video stream will be available 24/7 and the tenants will be able to access it remotely. The cameras enable a greater peace of mind for all the tenants in your residential complex.'
          header='4K Surveillance Cameras'
        />
        <OurProductsCard
          svg={<img src={Cameras} alt='Cameras' />}
          text='Providing 4K surveillance cameras that will allow you tenants to access the video stream. The video stream will be available 24/7 and the tenants will be able to access it remotely. The cameras enable a greater peace of mind for all the tenants in your residential complex.'
          header='4K Surveillance Cameras'
          reverseLayout
        />
      </div>
    </div>
  );
};

export default HomePage;
