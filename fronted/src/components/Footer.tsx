import Logo from '/Logo.svg';
const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#FF4D00] py-8 gap-8 text-white'>
      <div>
        <img src={Logo} alt='logl' />
      </div>
      <div className='text-center w-[330px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </div>
      <div>
        <div className='flex flex-row gap-4'>
          <p>Campaigns</p>
          <p>Email</p>
          <p>Marketing</p>
          <p>Branding</p>
          <p>Offline</p>
          <p>Contact</p>
          <p>FAQs</p>
        </div>
      </div>

      <div className='flex flex-row justify-center items-center gap-12'>
        <img className='cursor-pointer' src='/Facebook.svg' alt='facebook' />
        <img className='cursor-pointer' src='/Twitter.svg' alt='twitter' />
        <img className='cursor-pointer' src='/Instagram.svg' alt='instagram' />
      </div>
    </div>
  );
};

export default Footer;
