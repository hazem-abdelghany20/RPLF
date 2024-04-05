import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const AccordionItem = ({ title, pages }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-[#063948]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-2 px-4 w-full text-left text-[#063948] hover:bg-[#e1a54f] focus:outline-none"
      >
        {title}
      </button>
      {isOpen && (
        <div className="p-4 bg-[#063948] text-white">
          <ul>
            {pages.map((page, index) => (
              <li key={index} className="list-none hover:text-[#e1a54f]">
                <Link to={`/${page.title}`} className="no-underline hover:underline">{page.title}</Link>
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
        // Replace with your API URL
        const response = await axios.get('http://localhost:3000/api/globals/nav-bar?locale=undefined&draft=false&depth=1');
        setData(response.data["main-links"]);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="divide-y divide-[#063948]">
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.link} pages={docs.filter(doc => doc.linked_to === item.link.toLowerCase().replace(/\s/g, '_'))} />
      ))}
    </div>
  );
};

export default Accordion;
