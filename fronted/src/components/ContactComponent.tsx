const ContactComponent = () => {
  return (
    <div className='py-4 px-4 bg-[#FF4D00] w-[317px] h-[179px] rounded-tr-3xl rounded-tl-sm rounded-bl-sm rounded-br-sm'>
      <div className='flex flex-row'>
        <p className='w-[220px] font-semibold text-xl text-black'>
          Interested in a modernizing your residential complex?
        </p>
        <div className='rounded-full w-[60px] h-[60px] bg-white flex flex-row justify-center items-center'>
          <img src='/arrow.svg' alt='arrow' />
        </div>
      </div>
      <p className='w-[260px] text-white font-semibold text-xl'>
        Schedule a meeting with just a few clicks right now.
      </p>
    </div>
  );
};

export default ContactComponent;
