import "./css.css"

const NumbersBlock = ({ block }) => {

    return (
        <div className="outer__container">
            <div className="header">
                <h2 className="title">{"Our Work in Numbers"}</h2>
                <div className="description">
                    <span style={{width:"55%"}} >{"orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim,condimentum nec ultricies."}</span>
                </div>
            </div>

            <div className="numbers__outer__container">
                <div className="left__block">
                    <div className="upper__half">
                        <p>{"34"}</p>
                    </div>

                    <div className="lower__half">
                        <h5>{"Trials"}</h5>
                        <span>{"Sample text. Click to select the text box. Click again or double click to start editing the text."}</span>
                    </div>

                </div>

                <div className="centre__block">

                    <div className="upper__half">
                        <p>{"1000"}</p>
                    </div>

                    <div className="lower__half" style={{ backgroundColor: "#d59a45" }}>
                        <h5>{"Awards won"}</h5>
                        <span>{"Sample text. Click to select the text box. Click again or double click to start editing the text."}</span>
                    </div>



                </div>

                <div className="right__block">

                    <div className="upper__half">
                        <p>{"34"}</p>
                    </div>

                    <div className="lower__half">
                        <h5>{"Offices"}</h5>
                        <span>{"Sample text. Click to select the text box. Click again or double click to start editing the text."}</span>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default NumbersBlock