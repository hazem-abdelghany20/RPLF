import { useState } from 'react';

const Card = ({ title, text }) => {
    const [hovering, setHovering] = useState(false);

    const handleEnter = () => {
        setHovering(true);
    };

    const handleLeave = () => {
        setHovering(false);
    };

    return (
        <div className="flex flex-col gap-0 h-308 xs:w-full">
            <div className={hovering ? "h-2 w-90 xs:w-full bg-[yellow]" : "h-2 w-80 xs:w-full bg-[lightskyblue] "}></div>
            <div className={hovering ? "bg-[#14656B] text-left h-[200px] w-80  p-8" : "bg-opacity-15 bg-white text-left  h-[200px] w-80 p-8"} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <h2 className='text-xl md:text-2xl font-medium'>{text}</h2>
            </div>
        </div>
    );
};

export default Card;
