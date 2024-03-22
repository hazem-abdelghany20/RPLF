import CTA from "../../Blocks/CTA/CTABlock"
import CTA2 from "../../Blocks/CTA2/CTABlock2"
import Content from "../../Blocks/Content/ContentBlock"
import './css.css'

const Hero = ({ image, layout }) => {
    const style = layout.filter(block => block.blockType == "content").block_type
    const ctas = layout.filter(block => block.blockType == "cta")
    const content = layout.filter(block => block.blockType == "content")
    console.log(content)
    image.filename = image.filename.replace(/\s+/g, "").toLowerCase();

    return (
        <div>
            <div style={{
                backgroundImage: `url(${image.filename})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', // Set background size to cover
                width: "100%",
                height: "800px",
                zIndex: "-99"
            }}>
                <div style={{ paddingTop: "7rem" }}>
                    {
                        content.map(block => (
                            <Content content={block.content.filter(one => one.type !== "upload")} media={block.content.filter(one => one.type === "upload")} style={block.block_type} />
                        ))
                    }

                </div>


                <div className="ctas__container">
                    <CTA block={ctas[0]} />
                    <CTA2 block={ctas[1]} />
                </div>
            </div>


        </div>
    )
}

export default Hero