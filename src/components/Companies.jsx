import Nestle from '../assets/companies/Nestle.svg';
import Asana from '../assets/companies/Asana.svg';
import CocaCola from '../assets/companies/cocacola.svg';
import Allianz from '../assets/companies/allianz.svg';
import Vorkasse from '../assets/companies/vorkasse.svg';

const Companies = () => {
  return (
    <div className='mx-20 px-20 mt-[100px]'>
      <div className='flex flex-row justify-between bg-[#09122B] py-10 px-28'>
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
