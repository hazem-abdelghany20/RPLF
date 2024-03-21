import "./css.css"

const CTA2 = ({block}) => {

    const goTo = (url , newTab) =>{
        
    }

    return (
        <div className="cta2__outer__container">
            <div className="header">
                {block.content[0].type === "h1" && (
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
                )}
            </div>
            <div className="content">
                <p>{block.content[1].children[0].text}</p>
                <div className="buttons">
                    {
                        block.buttons.map(button => (
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

export default CTA2