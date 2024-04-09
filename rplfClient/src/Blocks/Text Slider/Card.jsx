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
            <div className={"h-2 w-90 xs:w-full bg-[#d59a45]"}></div>
            <div className={ "bg-[#544c33] text-left h-[200px] w-80  p-8"} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <h2 className='text-xl md:text-2xl font-medium'>{text}</h2>
            </div>
        </div>
    );
};

export default Card;
