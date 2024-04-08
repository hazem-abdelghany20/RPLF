import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import CollapseNavbar from "../CollapseNavbar";
import Accordion from "../NavAccordion";

const Header = ({ docs }) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row justify-around items-center bg-[#b48034]">
                <div className="text-sm md:text-md">
                    <p>Bravery, courage, fear and love in a time of war</p>
                </div>
                <div>
                    <button className="bg-[#e1a54f] hover:bg-[#b48034] border-2 text-sm md:text-md border-[#e1a54f] rounded-none flex flex-row justify-center my-1 py-1 px-4">
                        Book<span className="md:inline-block hidden ml-1">an appointment</span>
                    </button>
                </div>
            </div>

            <div className="flex flex-row justify-around items-center bg-[#0b2c35] h-[150px] md:gap-20">
                <div className="flex flex-row items-center justify-around mr-5">
                {/* <Accordion docs={docs}/> */}
                    <Link to={"/"}>
                        <img src="logo.png" className="ml-3 w-[280px] h-[70px] md:w-[400px] md:h-[100px]" />
                    </Link>
                <CollapseNavbar docs={docs}/>
                </div>
                

                <div className="hidden lg:flex flex-row text-sm md:text-md">
                    <div className="flex flex-col w-[100px] md:flex-row md:w-[200px]">
                        <div className="flex flex-col items-center justify-around">
                            <img src="call.png" className="size-[40px] md:size-[75px]" />
                        </div>
                        <div className="flex flex-col text-left justify-center">
                            <span>Call Us:</span>
                            <span>01000000000</span>
                        </div>
                    </div>

                    <div className="flex flex-col w-[100px] md:flex-row md:w-[200px]">
                        <div className="flex flex-col items-center justify-around">
                            <img src="mail-icon.svg" className="size-[40px] md:size-[75px]" />
                        </div>
                        <div className="flex flex-col text-left justify-center">
                            <span>Email Us:</span>
                            <span>info@example.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <NavBar docs={docs} />
        </div>
    );
};

export default Header;
