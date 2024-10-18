import Hero from '../components/Hero';
import OurProductsCard from '../components/OurProductsCard';
import { clients } from '../constants/clients';
import SliderCard from '../components/SliderCard';
import { products } from '../constants/products';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <>
      <Hero />

      <div className='bg-black px-[13%]'>
        <p className='text-semibold text-3xl text-white pb-10'>Our Products</p>
        {products.map((product, index) => (
          <OurProductsCard
            key={index}
            svg={<img src={product.svg} alt={product.alt} />}
            text={product.text}
            header={product.header}
            reverseLayout={product.reverseLayout}
          />
        ))}

        <div className='flex flex-row justify-center items-center pt-20'>
          <p className='text-white text-3xl font-semibold'>
            What Our Clients Say About Us
          </p>
        </div>

        <Slider {...settings} className='pt-8'>
          {clients.map((client, index) => (
            <SliderCard
              key={index}
              name={client.name}
              position={client.position}
              description={client.description}
              image={
                <img
                  src={client.image}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  alt='image'
                />
              }
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HomePage;
