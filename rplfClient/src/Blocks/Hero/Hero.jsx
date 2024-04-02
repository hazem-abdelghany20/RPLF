import CTA from "../CTA/CTABlock"
import CTA2 from "../CTA2/CTABlock2"
import Slider from "../Slider/Slider"
import "./css.css"

const Hero = ({ hero }) => {
    //console.log(style)
    //console.log(media)
    return (
        <div>
            <div className="image" style={{
                backgroundImage: `url(${hero['background_image'].filename})`
            }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <div className="content">
                        <img src={hero.logo.filename} alt="logo" style={{ maxWidth: "100%" }} /> {/* Make the logo responsive */}
                        <h1 style={{textAlign:"center"}} className="headline">{hero.headline}</h1>
                    </div>
                </div>

                <div className="ctas__container">
                    <CTA block={hero.left_cta} />
                    <CTA2 block={hero.right_cta} />
                </div>
            </div>

            
        </div>
    )
}

export default Hero