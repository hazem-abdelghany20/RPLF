import "./css.css"

const CTA = ({block}) => {
    console.log(block)
    const goTo = (url , newTab) =>{
        
    }

    return (
        <div className="cta__outer__container">
            <div className="cta1_header">
                <h2 style={{fontSize : "40px"}}>{block[0].headline}</h2>
                {/* {block.content[0].type === "h1" && (
                    <h1>{block.content[0].children[0].text}</h1>
                )}
                {block.content[0].type === "h2" && (
                    <h2>{block.content[0].children[0].text}</h2>
                )}
                {block.content[0].type === "h3" && (
                    <h3>{block.content[0].children[0].text}</h3>
                )}
                {block.content[0].type === "h4" && (
                    <h4>{block.content[0].children[0].text}</h4>
                )}
                {block.content[0].type === "h5" && (
                    <h5>{block.content[0].children[0].text}</h5>
                )} */}
            </div>
            <div className="cta1_content">
                <p>{block[0].paragraph}</p>
                <div className="cta1_buttons">
                    {
                        block[0].buttons.map(button => (
                            <button onClick={() => goTo(button.url, button.newTab)}>
                                {button.label}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CTA