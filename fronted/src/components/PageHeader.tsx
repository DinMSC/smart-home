const MenuItem = ({ text }: { text: string }) => (
  <div className='cursor-pointer h-[70px] w-[70px] pt-[5px] flex flex-row justify-center items-center border-b-[5px] border-transparent hover:border-[#FF4D00] hover:text-[#FF4D00]'>
    <li>{text}</li>
  </div>
);

const PageHeader = () => {
  return (
    <div className='flex flex-row w-full gap-4 bg-black text-white font-semibold'>
      <div className='flex flex-row items-center pl-8'>LOGO</div>
      <div className='h-[70px] w-full flex justify-center items-center'>
        <ul
          id='menu'
          className='hidden fixed top-0 right-0 px-10 py-16 z-50 h-full justify-center items-center
              md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6'
        >
          <MenuItem text='Home' />
          <MenuItem text='Contact' />
          <MenuItem text='About us' />
        </ul>
      </div>
      <div className='flex flex-row justify-center items-center pr-8'>
        <button className='flex flex-row justify-center items-center w-[169px] h-[38px] bg-[#FF4D00] rounded-md px-2 py-1'>
          Schedule a demo
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
