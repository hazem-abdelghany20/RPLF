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
        <div className="flex flex-row bg-[#e1a54f] w-[280px] lg:w-[400px] h-[150px] md:h-[200px] lg:h-[200px] mt-[25px] px-8 mx-auto lg:mx-1">
            <div className="header text-left">
                <h3>{block[0].headline}</h3>
            </div>
            <div className="flex flex-col justify-center items-center gap-[20px] text-left">
                <p>{block[0].paragraph}</p>
                <div className="flex flex-row justify-around w-full">
                    {block[0].buttons.map((button) => {
                        if (button.type == 'page') {
                            return (
                                <button
                                    key={button.label} // Added for React keys
                                    className="px-4 py-2 rounded-none text-white text-semibold bg-[#55330B] border-2 border-[#B48034] hover:bg-transparent transition-colors"
                                    onClick={() => goTo(button.type, button.page, button.url, button.newTab)}
                                >
                                    {button.label}
                                </button>
                            )
                        } else {
                            if (button.newTab) {
                                let url = button.url.startsWith("http://") || button.url.startsWith("https://") ? button.url : `https://${button.url}`;
                                return (

                                    <a href={url} target="_blank" className="cursor-pointer text-[white]">
                                        <button
                                            key={button.label} // Added for React keys
                                            className="px-4 py-2 rounded-none text-white text-semibold bg-[#55330B] border-2 border-[#B48034] hover:bg-transparent transition-colors"
                                        >
                                            {button.label}
                                        </button>
                                    </a>
                                )
                            } else {
                                let url = button.url.startsWith("http://") || button.url.startsWith("https://") ? button.url : `https://${button.url}`;
                                return (
                                    <a href={url} className="cursor-pointer text-[white]">
                                        <button
                                            key={button.label} // Added for React keys
                                            className="px-4 py-2 rounded-none text-white text-semibold bg-[#55330B] border-2 border-[#B48034] hover:bg-transparent transition-colors"
                                        >
                                            {button.label}
                                        </button>
                                    </a>
                                )
                            }
                        }
                        
                    })}
                </div>
            </div>
        </div>
    );
};

export default CTA2;
