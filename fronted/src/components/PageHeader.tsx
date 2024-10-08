const PageHeader = () => {
  return (
    <div className='flex flex-row w-full gap-4 bg-black text-white font-semibold'>
      <div className='flex flex-row items-center pl-8'>LOGO</div>
      <div className='h-[70px] w-full flex justify-center items-center'>
        <ul
          id='menu'
          className='hidden fixed top-0 right-0 px-10 py-16 z-50
              md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6 cursor-pointer'
        >
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
      <div className='flex flex-row items-center pr-8'>BUTTON</div>
    </div>
  );
};

export default PageHeader;
