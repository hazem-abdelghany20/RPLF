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
                    {block.buttons.map((button, index) => (
                        <button
                            key={index}
                            className="rounded-none bg-[#d59a45] text-white py-2 px-4 hover:bg-[#bf8836] transition-colors"
                            onClick={() => goTo(button.type, button.page, button.url, button.newTab)}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CTABlock3;
