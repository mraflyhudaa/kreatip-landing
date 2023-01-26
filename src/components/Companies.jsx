import Nestle from '../assets/companies/Nestle.svg';
import Asana from '../assets/companies/Asana.svg';
import CocaCola from '../assets/companies/cocacola.svg';
import Allianz from '../assets/companies/Allianz.svg';
import Vorkasse from '../assets/companies/vorkasse.svg';

const Companies = () => {
  return (
    <div className='lg:mx-20 md:mx-10 mx-2 lg:px-20 md:px-10 px-2 lg:mt-[100px] md:mt-20 mt-10'>
      <div className='flex md:flex-row flex-col gap-8 justify-between bg-[#09122B] lg:py-10 py-28 px-28'>
        <img src={Vorkasse} alt='Vorkasse' />
        <img src={Allianz} alt='Allianz' />
        <img src={Asana} alt='Asana' />
        <img src={Nestle} alt='Nestle' />
        <img src={CocaCola} alt='CocaCola' />
      </div>
    </div>
  );
};

export default Companies;
