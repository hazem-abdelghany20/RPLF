import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const NavButton = ({ id, title, pages, width, height, maxWidth }) => {
    const [hover, setHover] = useState(false);
    const [leftPosition, setLeftPosition] = useState(0);
    const [moveLeft, setMoveLeft] = useState(0);

    const navButtonRef = useRef(null); 
    width = width + (pages.length / 16) * width;

    useEffect(() => {
        const navButtonElement = navButtonRef.current; 
        if (navButtonElement) {
            const left = navButtonElement.getBoundingClientRect().left;
            setLeftPosition(left);
            if (width + (left + (0.1 * window.innerWidth)) > window.innerWidth) {
                setMoveLeft((20 / 4) * 50);
            }
        }
    }, [width]);

    const mouseEnter = () => setHover(true);
    const mouseLeave = () => setHover(false);

    return (
        <div id={id} ref={navButtonRef} className="relative">
            <button 
                className="rounded-none bg-transparent h-full hover:bg-white text-xs xl:text-sm 2xl:text-md hover:text-[#063948]"
                onMouseEnter={mouseEnter} 
                onMouseLeave={mouseLeave}
            >
                {title}
            </button>

            {hover && (
                <div 
                    className="dropdown absolute bg-[#063948] text-xs 2xl:text-md text-left flex flex-col flex-wrap p-5 px-0 mx-0"
                    style={{ 
                        width: `${width}px`, 
                        height: `${height}px`, 
                        left: `${moveLeft === 0 ? "0px" : `${leftPosition - moveLeft}px`}`,
                    }} 
                    onMouseEnter={mouseEnter} 
                    onMouseLeave={mouseLeave}
                >
                    {pages.map((page, index) => (
                        <li key={index} className="list-none text-white hover:text-[#e1a54f]">
                            <Link to={`/${page.title}`} className="px-3 text-white no-underline hover:text-[#e1a54f]">{page.title}</Link>
                        <hr className="my-1"/>
                        </li>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavButton;
