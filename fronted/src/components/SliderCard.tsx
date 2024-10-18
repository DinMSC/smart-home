import { ReactNode } from 'react';
import Quotes from '/Quotes.svg';

interface SliderCardProps {
  name: string;
  description: string;
  image: ReactNode;
  position: string;
}

const SliderCard = ({
  name,
  description,
  image,
  position,
}: SliderCardProps) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '434px',
        height: '486px',
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
          <p style={{ color: '#CFCFCF', fontSize: 25 }}>{name}</p>
          <p style={{ color: '#CFCFCF' }}>{position}</p>
          <img
            className='w-[66px] h-[66px] pb-4 pt-4'
            src={Quotes}
            alt='Quotes'
          />
          <p style={{ color: '#CFCFCF', width: 310, paddingLeft: 16 }}>
            {description}
          </p>
        </div>
      </div>
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          position: 'absolute',
          zIndex: 3,
          top: '11%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {image}
      </div>
    </div>
  );
};

export default SliderCard;
