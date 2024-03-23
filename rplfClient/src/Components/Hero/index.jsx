import CTA from "../../Blocks/CTA/CTABlock"
import CTA2 from "../../Blocks/CTA2/CTABlock2"
import Content from "../../Blocks/Content/ContentBlock"
import Slider from "../../Blocks/Slider/Slider"
import './css.css'

const Hero = ({ layout }) => {
    //const style = layout.filter(block => block.blockType == "content").block_type
    console.log(layout)
    //const [left_cta, right_cta] = layout
    //const content = layout.filter(block => block.blockType == "content")
    //console.log(content)
    //image.filename = image.filename.replace(/\s+/g, "").toLowerCase();

    return (
        <div>
            {
                layout.map(hero => (
                    <div>
                        <div style={{
                            backgroundImage: `url(${hero['background_image'].filename})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover', // Set background size to cover
                            width: "100%",
                            height: "800px",
                            zIndex: "-99",
                        }}>
                            <div style={{display:"flex" , flexDirection : "row" , justifyContent : "center"}}>
                                <div style={{ paddingTop: "7rem", width: "950px" }}>
                                    <img src={hero.logo.filename}></img>
                                    <h1>{hero.headline}</h1>

                                </div>
                            </div>


                            <div className="ctas__container">
                                <CTA block={hero.left_cta} />
                                <CTA2 block={hero.right_cta} />
                            </div>
                        </div>
                        <Slider images={hero.image_slider[0].images} />
                    </div>
                ))
            }


        </div>
    )
}

export default Hero