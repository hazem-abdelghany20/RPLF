import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const AccordionItem = ({ title, pages }) => { // Removed `key` from here
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-[#0b2c35]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-2 pb-1 px-4 w-full text-left text-white bg-[#0b2c35] hover:bg-[#e1a54f] focus:outline-none rounded-none">
          {title}
      </button>
      {isOpen && (
        <div className="p-4 pt-1 bg-[#0b2c35] text-white">
          <hr className='pb-2'/>
          <ul>
            {pages.map((page, index) => (
              <li key={index} className="list-none rounded-none text-left">
                <Link to={`/${page.title}`} className="text-white hover:text-[#e1a54f] no-underline bg-[#0b2c35] rounded-none">{page.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ docs }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/globals/nav-bar?locale=undefined&draft=false&depth=1');
        setData(response.data["main-links"]);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="divide-y divide-[#063948] px-5">
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.link} pages={docs.filter(doc => doc.linked_to === item.link.toLowerCase().replace(/\s/g, '_'))} />
      ))}
      {/* { !data || data.length === 0 && <AccordionItem key="fallback" title={'In case the data isn\'t fetched'} pages={['lol','this','is','my','list']}/>} */}
    <div className='my-2 flex flex-col items-center justify-center'>Call us: 01000000000</div>
    <div className='my-2 flex flex-col items-center justify-center'>Email us: info@example.com</div>
    <hr />
    </div>
  );
};

export default Accordion;
