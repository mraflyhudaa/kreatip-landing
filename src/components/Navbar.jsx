import Kreatip from '../assets/Kreatip.svg';

const Navbar = () => {
  const navigation = ['Our service', 'Our Solution', 'Contact Us', 'About Us'];

  return (
    <div className='flex justify-between lg:px-40 px-4 py-6 h-[100px] sticky top-0 bg-kreatip z-50'>
      <div className='flex flex-row gap-[50px]'>
        <div className='flex'>
          <img className='w-8 h-8 my-auto' src={Kreatip} alt='Kreatip' />
          <span className='my-auto text-white'>reatip</span>
        </div>
        {navigation.map((nav, idx) => (
          <a key={idx} className='my-auto text-white hidden sm:flex' href='#'>
            {nav}
          </a>
        ))}
      </div>
      <div className='flex'>
        <button className='bg-primary text-white my-auto lg:py-[13px] py-[7px] px-4 lg:px-8 text-base'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
