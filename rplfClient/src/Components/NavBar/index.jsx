import { useEffect, useState } from "react";
import axios from 'axios';
import NavButton from "../NavButton";

const NavBar = ({ items, docs }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const callApi = async () => {
            const response = await axios.get('http://localhost:3000/api/globals/nav-bar?locale=undefined&draft=false&depth=1');
            setData(response.data["main-links"]);
        };
        callApi();
    }, []);

    return (
        // Adjusted for centering
        <div className="hidden md:block absolute w-4/5 left-1/2 top-[12rem] bg-[#063948] bg-opacity-70 transform -translate-x-1/2">
            <div className="flex flex-row justify-between">
                {data && data.map((item, index) => {
                    return (
                        <NavButton key={index} title={item.link} width={150} height={200} pages={docs.filter(page => page.linked_to === item.link.toLowerCase().replace(/\s/g, '_'))} maxWidth={window.innerWidth} />
                    );
                })}
                <div>
                    <button className="bg-transparent ">
                        <img src='search-icon.svg' alt='search icon' className="w-[50px]"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
