import CTA1 from "../CTA/CTABlock";
import CTA2 from "../CTA2/CTABlock2";
import ImageSlider from "../Slider/Slider";
import Slider from "../Slider/Slider";

const Hero = ({ hero }) => {
    console.log(hero.logo.filename)
    return (
        <div className="h-full">
            <div
                className="h-[1000px] lg:h-[800px] bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(http://localhost:3000/block-media/${hero['background_image'].filename})` }}
            >
                <div className="flex flex-row justify-center pt-32">
                    <div className="max-w-full mx-auto text-center">
                        <div className="flex flex-row justify-center">
                            <img src={`http://localhost:3000/assets/${hero.logo.filename}`} alt="logo" width={100} height={100} className="max-w-full" />
                        </div>
                        <div className="w-full md:w-[80vw] lg:w-[60vw] px-5 font-bold text-3xl md:text-5xl">{hero.headline}</div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row m-5 mt-36 mb-12 flex flex-row gap-5 justify-center md:mx-0">
                    <CTA1 block={hero.left_cta} />
                    <CTA2 block={hero.right_cta} />
                </div>

            </div>
            {
                hero.image_slider &&
                (
                    <ImageSlider images={hero.image_slider[0].images} />
                )
            }
        </div>
    );
};

export default Hero;
