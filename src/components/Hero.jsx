import HeroImage from '../assets/Hero.png';

const Hero = () => {
  return (
    <div className='flex mx-20 px-20 mt-[70px] w-fit'>
      <div className='glow-circle'></div>
      <div className='flex flex-row -space-x-[220px] '>
        <div className='w-10/12 mt-13 pt-13 z-10'>
          <h1 className='text-[90px] font-bold text-white leading-[1.05]'>
            Increase sales with the best video ads
          </h1>
          <p className='text-[#BCC1D3] w-[74%] leading-loose mt-10'>
            We help your business to create video ads with profesional cameramen
            and you get at a cheap price. you can save time for marketing your
            business.
          </p>
          <button className='text-white font-bold text-xl px-19 py-6 mt-10 bg-[#502DD8]'>
            Get Started
          </button>
        </div>
        <div className='w-4/6 overflow-visible z-0'>
          <img src={HeroImage} alt='HeroImage' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
