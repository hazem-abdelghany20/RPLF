import CTA1 from "../CTA/CTABlock";
import CTA2 from "../CTA2/CTABlock2";
import Slider from "../Slider/Slider";

const Hero = ({ hero }) => {
    return (
        <div className="h-full">
            <div
                className="h-[1000px] lg:h-[800px] bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${hero['background_image'].filename})` }}
            >
                <div className="flex flex-row justify-center pt-32">
                    <div className="max-w-full mx-auto text-center">
                        <img src={hero.logo.filename} alt="logo" className="max-w-full" />
                        <div className="w-full md:w-[80vw] lg:w-[60vw] px-5 font-bold text-3xl md:text-5xl">{hero.headline}</div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row m-5 mt-36 mb-12 flex flex-row gap-5 justify-center md:mx-0">
                    <CTA1 block={hero.left_cta} />
                    <CTA2 block={hero.right_cta} />
                </div>
            </div>
        </div>
    );
};

export default Hero;
