import Hero from '../components/Hero';
import OurProductsCard from '../components/OurProductsCard';
import SliderCard from '../components/SliderCard';
import { products } from '../constants/products';
const HomePage = () => {
  return (
    <div className='relative'>
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
      </div>
      <SliderCard />
    </div>
  );
};

export default HomePage;
