import { useNavigate } from "react-router";

const CTA = ({ block }) => {
    const navigate = useNavigate();

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
        <div className="flex flex-col lg:flex-row bg-[#063948] gap-5 py-5 w-[250px] xsm:w-[350px] xsm:w-[70%] lg:w-[50%] lg:h-[30%] mx-auto lg:mx-2">
            <div className="text-left pl-5 lg:pl-12 w-full mt-[10px] my-auto">
                <h2 className="text-2xl md:text-5xl leading-normal">{block[0].headline}</h2>
            </div>
            <div className="text-left flex flex-col items-center gap-[20px] mx-5 w-[90%]">
                <p className="text-md md:text-lg">{block[0].paragraph}</p>
                <div className="flex flex-row justify-left w-full">
                    {block[0].buttons.map((button) => {
                        if (button.type == 'page') {
                            return (
                                <button
                                    key={button.label} // Added for React keys
                                    className="px-4 py-2 rounded-none text-white text-semibold bg-[#B48034] border-2 border-[#B48034] hover:bg-transparent transition-colors"
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
                                            className="px-4 py-2 rounded-none text-white text-semibold bg-[#B48034] border-2 border-[#B48034] hover:bg-transparent transition-colors"
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
                                            className="px-4 py-2 rounded-none text-white text-semibold bg-[#B48034] border-2 border-[#B48034] hover:bg-transparent transition-colors"
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

export default CTA;
