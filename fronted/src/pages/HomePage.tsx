import Hero from '../components/Hero';
import OurProductsCard from '../components/OurProductsCard';
import Cameras from '/Cameras.svg';
import Tablets from '/Tablets.svg';
import MobileApp from '/MobileApp.svg';
import Quotes from '/Quotes.svg';
import Face from '/Face.svg';

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
          svg={<img src={Tablets} alt='Tablets' />}
          text='The lobby is the busiest area of the residential building. This allows for a perfect placement of a tablet that would act as a information board. Your tenant will be able to see all of the important information, incorporated into a simple and effective design. The lobby tablet allows a modern and easier solution for information sharing among tenants.'
          header='Modern Information Board'
          reverseLayout
        />
        <OurProductsCard
          svg={<img src={MobileApp} alt='MobileApps' />}
          text='The WAVEZ mobile application provides a comprehensive information system for your tenants. Each tenant will be given access to the application. Via the application the tenants will be able to access the cameras, share and view important information and handle complaints, issues, etc.'
          header='Mobile Application'
        />
        <div
          style={{
            position: 'relative',
            width: '434px',
            height: '466px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#FF4D00',
              clipPath: 'polygon(16% 0%, 100% 16%, 90% 60%, 0% 99%)',
              borderRadius: '360px',
              position: 'absolute',
              zIndex: 1,
            }}
          ></div>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#1B1B1B',
              clipPath: 'polygon(0% 16%, 90% 0%, 100% 99%, 16% 100%)',
              borderRadius: '360px',
              position: 'absolute',
              zIndex: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='flex flex-col justify-center items-center'>
              <p style={{ color: 'white', fontSize: 25 }}>ELDAR DZUHO</p>
              <p style={{ color: 'white' }}>SOME RANDOM TEXT</p>
              <img
                className='w-[36px] h-[36px] pb-4'
                src={Quotes}
                alt='Quotes'
              />
              <p style={{ color: 'white', width: 310, paddingLeft: 16 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
              </p>
            </div>
          </div>
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              position: 'absolute',
              zIndex: 3,
              top: '10%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <img src={Face} alt='faca' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
