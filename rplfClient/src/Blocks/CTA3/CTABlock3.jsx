import { useNavigate } from 'react-router';

const CTABlock3 = ({ block }) => {
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
        <div className="flex flex-col bg-[#dee5f6] p-4 py-7">
            <div className="header text-center text-black">
                <h2 className="font-semibold text-2xl mb-2">{block.headline}</h2>
                <span>{block.paragraph}</span>
            </div>
            <div className="flex justify-center mt-7">
                <div className="flex flex-col md:flex-row justify-center gap-5">
                    {block.buttons.map((button) => {
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
                        <button
                            key={button.label} // Added for React keys
                            className="px-4 py-2 rounded-none text-white text-semibold bg-[#B48034] border-2 border-[#B48034] hover:bg-transparent transition-colors"
                            onClick={() => goTo(button.type, button.page, button.url, button.newTab)}
                        >
                            {button.label}
                        </button>
                    })}
                </div>
            </div>
        </div>
    );
};

export default CTABlock3;
