import Kreatip from '../assets/Kreatip.svg';
import facebookIcon from '../assets/footer/facebook.svg';
import instagramIcon from '../assets/footer/instagram.svg';
import skypeIcon from '../assets/footer/skype.svg';
import youtubeIcon from '../assets/footer/youtube.svg';
import arrowIosDown from '../assets/footer/arrow-ios-down.svg';
import globeIcon from '../assets/footer/globe.svg';

const Footer = () => {
  return (
    <div className='md:py-23 py-4 md:px-18 lg:px-36 px-8 bg-white'>
      <div className='flex md:flex-row flex-col justify-between'>
        <div className='flex flex-col md:text-start text-center gap-4 max-w-full mb-4 md:mb-0'>
          <div className='flex md:justify-start justify-center mb-4 md:mb-0'>
            <img className='w-8 h-8 my-auto ' src={Kreatip} alt='Kreatip' />
            <span className='my-auto text-primary font-medium text-base'>
              reatip
            </span>
          </div>
          <p className='text-[#040D21] leading-relaxed md:w-11/12 opacity-60'>
            We help your business to create video ads with profesional cameramen
            and you get at a cheap price.
          </p>
        </div>
        <div className='flex sm:flex-row flex-col md:justify-start justify-center md:text-left text-center text-[#040D21] md:gap-10 lg:gap-20 gap-4'>
          <ul className='space-y-2'>
            <li className='font-semibold text-xl mb-3'>Service</li>
            <li className='opacity-80'>
              <a href='#'>Creat Video Ads</a>
            </li>
            <li className='opacity-80'>
              <a href='#'>Creat Content</a>
            </li>
            <li className='opacity-80'>
              <a href='#'>Film Productions</a>
            </li>
            <li className='opacity-80'>
              <a href='#'>Film Animasi</a>
            </li>
          </ul>
          <ul className='space-y-2'>
            <li className='font-semibold text-xl mb-3'>Features</li>
            <li className='opacity-80'>
              <a href='#'>Home</a>
            </li>
            <li className='opacity-80'>
              <a href='#'>Benefit</a>
            </li>
            <li className='opacity-80'>
              <a href='#'>Pricing</a>
            </li>
          </ul>
          <ul className='space-y-2'>
            <li className='font-semibold text-xl mb-3'>Supports</li>
            <li className='opacity-80'>
              <a href='#'>Customer Service</a>
            </li>
            <li className='opacity-80'>
              <a href='#'>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-29 flex md:flex-row flex-col justify-between'>
        <div className='flex flex-row justify-center md:gap-10 gap-2'>
          <a href='#'>
            <img src={skypeIcon} alt='Skype' className='w-auto' />
          </a>
          <a href='#'>
            <img src={facebookIcon} alt='Facebook' className='w-auto' />
          </a>
          <a href='#'>
            <img src={youtubeIcon} alt='Youtube' className='w-auto' />
          </a>
          <a href='#'>
            <img src={instagramIcon} alt='Instagram' className='w-auto' />
          </a>
        </div>
        <div className='flex flex-col md:flex-row text-[#040D21] text-center md:gap-10 gap-2'>
          <a href='#' className='opacity-80 my-auto'>
            Terms of Service
          </a>
          <a href='#' className='opacity-80 my-auto'>
            Privacy Policy
          </a>
          <div className='flex flex-row justify-center'>
            <img src={globeIcon} alt='Globe' className='w-6 h-6 my-auto mx-1' />
            <span className='font-semibold text-xs my-auto'>USA</span>
            <img
              src={arrowIosDown}
              alt='ArrowIosDown'
              className='w-6 h-6 my-auto ml-4'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
