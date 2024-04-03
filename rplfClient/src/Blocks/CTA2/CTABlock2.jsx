import "./css.css"

const CTA2 = ({block}) => {
    //console.log(block)
    const goTo = (type ,page, url , newTab) =>{
        if(type == "page"){
            if(page.title == "Home"){
                navigate(`/`)
            }else{
                navigate(`/${page.title}`)
            }
           
        }
    }
    return (
        <div className="cta2__outer__container">
            <div className="header">
                <h3>{block[0].headline}</h3>
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
            <div className="cta2_content">
                <p>{block[0].paragraph}</p>
                <div className="cta2_buttons">
                    {
                        block[0].buttons.map(button => (
                            <button onClick={() =>goTo(button.type,button.page,button.url, button.newTab)}>
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