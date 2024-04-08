import { useState } from 'react';
import Accordion from '../NavAccordion';

const CollapseNavbar = ({ docs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='block lg:hidden'>
      <button
        onClick={() => {setIsMenuOpen(!isMenuOpen); console.log(isMenuOpen)}}
        className="p-2 m-2 text-white bg-transparent rounded hover:bg-[#063948] focus:outline-none transition duration-300"
      >
        <img src="./menu-icon2.svg" alt="menu" className='size-[80%]' />
      </button>
      {isMenuOpen && (
        <div className="absolute top-40 left-0 w-full h-screen bg-[#0b2c35] shadow-md z-50">
          <Accordion docs={docs} />
        </div>
      )}
    </div>
  );
};

export default CollapseNavbar;
