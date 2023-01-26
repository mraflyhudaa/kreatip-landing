import feature1 from '../assets/feature/feature_1.png';
import feature2 from '../assets/feature/feature_2.png';
import feature3 from '../assets/feature/feature_3.png';

const Featured = () => {
  const features = [
    {
      name: 'We craete profesional video ads',
      description:
        'We help your business create the highest quality video ads and attract your customers.',
      img: feature1,
    },
    {
      name: 'We give you the best prices',
      description: `Don't worry about high prices, we provide the best prices and best quality.`,
      img: feature2,
    },
    {
      name: 'We have a professional team',
      description:
        'You will work with a professional team and you will get a good idea.',
      img: feature3,
    },
  ];

  return (
    <div className='lg:px-20 md:px-10 px-2 lg:mx-20 md:mx-10 mx-2 lg:mt-36 md:mt-16 mt-8'>
      <div className='flex flex-col lg:gap-35 md:gap-24 gap-8'>
        <div className='flex justify-between gap-6'>
          <div className='relative lg:w-1/2 w-full '>
            <span className='absolute font-bold text-white -z-10 opacity-5 text-9xl'>
              01
            </span>
            <div className='md:pt-9 md:pl-9 p-8'>
              <h1 className='text-5xl font-bold leading-tight text-white'>
                {features[0].name}
              </h1>
              <p className='text-base text-[#BCC1D3] md:w-3/5 mt-6 leading-relaxed'>
                {features[0].description}
              </p>
            </div>
          </div>
          <div className='relative w-auto md:block hidden'>
            <div className='absolute xl:block hidden w-[250px] h-[147px] bg-primary right-0 -z-10 rounded-tr-md'></div>
            <div className='absolute xl:block hidden w-[100px] h-[93px] bg-[#C30195] bottom-0 -z-10 rounded-bl-md'></div>
            <img
              className='z-0 p-[15px]'
              src={`${features[0].img}`}
              alt='Feature1'
            />
          </div>
        </div>

        <div className='flex justify-between gap-6'>
          <div className='relative w-auto md:block hidden'>
            <div className='absolute xl:block hidden w-[250px] h-[147px] bg-primary right-0 -z-10 rounded-tr-md'></div>
            <div className='absolute xl:block hidden w-[100px] h-[93px] bg-[#A08678] bottom-0 -z-10 rounded-bl-md'></div>
            <img
              className='z-0 p-[15px]'
              src={`${features[1].img}`}
              alt='Feature1'
            />
          </div>
          <div className='relative max-w-fit lg:w-1/2 w-full'>
            <span className='absolute font-bold text-white -z-10 opacity-5 text-9xl'>
              02
            </span>
            <div className='md:pt-9 md:pl-9 p-8'>
              <h1 className='text-5xl font-bold leading-tight text-white'>
                {features[1].name}
              </h1>
              <p className='text-base text-[#BCC1D3] md:w-3/5 mt-6 leading-relaxed'>
                {features[1].description}
              </p>
            </div>
          </div>
        </div>

        <div className='flex justify-between gap-6'>
          <div className='relative lg:w-1/2 w-full '>
            <span className='absolute font-bold text-white -z-10 opacity-5 text-9xl'>
              03
            </span>
            <div className='md:pt-9 md:pl-9 p-8'>
              <h1 className='text-5xl font-bold leading-tight text-white'>
                {features[2].name}
              </h1>
              <p className='text-base text-[#BCC1D3] md:w-3/5 mt-6 leading-relaxed'>
                {features[2].description}
              </p>
            </div>
          </div>
          <div className='relative w-auto md:block hidden'>
            <div className='absolute xl:block hidden w-[250px] h-[147px] bg-primary right-0 -z-10 rounded-tr-md'></div>
            <div className='absolute xl:block hidden w-[100px] h-[93px] bg-[#29D28B] bottom-0 -z-10 rounded-bl-md'></div>
            <img
              className='z-0 p-[15px]'
              src={`${features[2].img}`}
              alt='Feature1'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
