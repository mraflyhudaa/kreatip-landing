import HeroImage from '../assets/Hero.png';

const Hero = () => {
  return (
    <div className='flex lg:mx-20 mx-2 px-2 lg:px-20 lg:mt-[70px] sm:mt-4 w-fit'>
      <div className='glow-circle lg:block hidden'></div>
      <div className='flex flex-row -space-x-[220px] '>
        <div className='w-full lg:w-10/12 lg:mt-13 mt-7 lg:pt-13 p-8 z-10'>
          <h1 className='md:text-5xl text-4xl lg:text-[90px] font-bold text-white leading-[1.05]'>
            Increase sales with the best video ads
          </h1>
          <p className='text-[#BCC1D3] lg:w-[74%]  leading-loose mt-10'>
            We help your business to create video ads with profesional cameramen
            and you get at a cheap price. you can save time for marketing your
            business.
          </p>
          <button className='text-white font-bold lg:text-xl text-lg lg:px-19 px-9 py-3 lg:py-6  mt-10 bg-primary'>
            Get Started
          </button>
        </div>
        <div className='w-4/6 sm:block hidden overflow-visible z-0'>
          <img src={HeroImage} alt='HeroImage' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
