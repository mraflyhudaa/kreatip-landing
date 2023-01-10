const CallToAction = () => {
  return (
    <div className='mt-64 relative overflow-hidden'>
      <div className='cta-circle1'></div>
      <div className='cta-circle2'></div>
      <div className='p-17 bg-[#09122B]'>
        <div className='flex flex-col justify-center '>
          <div className=''>
            <h2 className='text-4xl font-bold leading-snug text-center z-10'>
              Start creating your video ads
            </h2>
          </div>
          <div className='mx-auto mb-15 mt-10  '>
            <button className='py-6 bg-white px-18 text-[#3400FF] text-xl font-bold mx-auto z-10'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
