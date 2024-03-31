import "./css.css"

const NumbersBlock = ({ block }) => {

    return (
        <div className="outer__container">
            <div className="header">
                <h2 className="title">{block.headline}</h2>
                <div className="description">
                    <span style={{width:"55%",color:"white"}} >{block.paragraph}</span>
                </div>
            </div>

            <div className="numbers__outer__container">
                <div className="left__block">
                    <div className="upper__half">
                        <p>{block.number1}</p>
                    </div>

                    <div className="lower__half">
                        <h5>{block.sub_headline_1}</h5>
                        <span>{block.sub_paragraph_1}</span>
                    </div>

                </div>

                <div className="centre__block">

                    <div className="upper__half">
                        <p>{block.number2}</p>
                    </div>

                    <div className="lower__half" style={{ backgroundColor: "#d59a45" }}>
                        <h5>{block.sub_headline_2}</h5>
                        <span>{block.sub_paragraph_2}</span>
                    </div>



                </div>

                <div className="right__block">

                    <div className="upper__half">
                        <p>{block.number3}</p>
                    </div>

                    <div className="lower__half">
                        <h5>{block.sub_headline_3}</h5>
                        <span>{block.sub_paragraph_3}</span>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default NumbersBlock