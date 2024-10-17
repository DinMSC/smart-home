const SliderCard = () => {
  return (
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
            className='w-[66px] h-[66px] pb-4 pt-4'
            // src={Quotes}
            alt='Quotes'
          />
          <p style={{ color: 'white', width: 310, paddingLeft: 16 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
            nibh in turpis. Consequat duis diam lacus arcu.
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
        {/* <img src={Face} alt='faca' /> */}
      </div>
    </div>
  );
};

export default SliderCard;
