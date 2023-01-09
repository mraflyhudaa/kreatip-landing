import people1 from '../assets/testimonials/people1.png';
import people2 from '../assets/testimonials/people2.png';
import people3 from '../assets/testimonials/people3.png';

const Testimonials = () => {
  return (
    <div className='mt-36'>
      <div className='flex flex-col mx-auto'>
        <div className='relative'>
          <span className='absolute font-bold text-white -translate-x-1/2 text-9xl opacity-5 left-1/2 -z-10'>
            Testimonials
          </span>
        </div>
        <div className='p-16 mx-auto text-center'>
          <h1 className='w-2/3 mx-auto text-5xl font-bold leading-tight text-white'>
            What our Customer about Kreatip
          </h1>
          <p className='text-[#BCC1D3] w-[47%] mx-auto mt-8'>
            Some input from clients who have collaborated with us.
          </p>
        </div>
        <div className='flex'>
          <div className='flex flex-row gap-10 mx-auto overflow-clip'>
            <div className='w-[521px] h-[488px] bg-[#081024] my-auto'>
              <div className='w-full text-center opacity-50 p-14 '>
                <img
                  className='w-[60px] h-[60px] mx-auto rounded-full'
                  src={people1}
                  alt='Testimonial1'
                />
                <h3 className='mt-5 text-xl font-semibold'>Reny Renyy</h3>
                <span className='opacity-60'>CEO Taneman</span>
                <p className='text-xl font-medium leading-relaxed mt-14'>
                  “Very good job with creativity, I am very satisfied with the
                  results.”
                </p>
              </div>
            </div>
            <div className='w-[589px] h-[552px] bg-[#061337]'>
              <div className='w-full text-center p-14'>
                <img
                  className='w-[88px] h-[88px] mx-auto rounded-full'
                  src={people2}
                  alt='Testimonial1'
                />
                <h3 className='mt-5 text-2xl font-semibold'>Steven Budy</h3>
                <span className='opacity-60'>CEO Cupangmania</span>
                <p className='text-2xl font-medium leading-relaxed mt-14'>
                  “It is highly recommended for companies to create cool and
                  great video ads to attract their customers.”
                </p>
              </div>
            </div>
            <div className='w-[521px] h-[488px] bg-[#081024] my-auto'>
              <div className='w-full text-center opacity-50 p-14'>
                <img
                  className='w-[60px] h-[60px] mx-auto rounded-full '
                  src={people3}
                  alt='Testimonial1'
                />
                <h3 className='mt-5 text-xl font-semibold'>Susi similikity</h3>
                <span className='opacity-60'>CEO Nesle</span>
                <p className='text-xl font-medium leading-relaxed mt-14'>
                  “Amazing work, looks so profesional team.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-4 mt-14'>
        <div className='w-10 h-[6px] bg-[#0F1C39]'></div>
        <div className='w-10 h-[6px] bg-[#0F1C39]'></div>
        <div className='w-10 h-[6px] bg-[#502DD8]'></div>
        <div className='w-10 h-[6px] bg-[#0F1C39]'></div>
        <div className='w-10 h-[6px] bg-[#0F1C39]'></div>
      </div>
    </div>
  );
};

export default Testimonials;
