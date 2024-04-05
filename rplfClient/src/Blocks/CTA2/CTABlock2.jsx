const CTA2 = ({ block }) => {
    // Assuming `navigate` is defined or imported elsewhere in your real code
    const goTo = (type, page, url, newTab) => {
        if (type === "page") {
            if (page.title === "Home") {
                navigate(`/`);
            } else {
                navigate(`/${page.title}`);
            }
        }
    };

    return (
        <div className="flex flex-row bg-[#e1a54f] w-[80vw] lg:w-[30vw] h-[20vh] md:h-[15vh] lg:h-[30vh] mt-[25px] px-8 mx-auto lg:mx-1">
            <div className="header text-left">
                <h3>{block[0].headline}</h3>
            </div>
            <div className="flex flex-col justify-center items-center gap-[20px] text-left">
                <p>{block[0].paragraph}</p>
                <div className="flex flex-row justify-around w-full">
                    {block[0].buttons.map((button, index) => (
                        <button key={index} className="bg-[#55330B] w-full px-4 py-2 rounded-none text-white text-semibold border-2 border-[#55330B] hover:bg-transparent transition-colors" onClick={() => goTo(button.type, button.page, button.url, button.newTab)}>
                            {button.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CTA2;
