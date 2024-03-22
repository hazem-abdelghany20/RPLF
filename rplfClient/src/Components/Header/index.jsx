import NavBar from "../NavBar"
import './css.css'

const Header = () => {

    return (
        <div className="outer__container">
            <div className="book__appointment">
                <div>
                    <p>Bravery, courage, fear and love in a time of war</p>
                </div>
                <div>
                    <button className="book__button">
                        Book an appointment
                    </button>
                </div>
            </div>

            <div className="main">
                <div className="logo__container">
                    <img src="logo.png" width={"400px"} height={"100px"} />
                </div>

                <div style={{display:"flex",flexDirection:"row"}}>
                    <div className="outer__contact">
                        <div className="img__container">
                            <img src="call.png" width={"75px"} height={"75px"} />
                        </div>
                        <div className="contact__info">
                            <span> Call Us:</span>
                            <span>01000000000</span>
                        </div>
                    </div>

                    <div className="outer__contact">
                        <div className="img__container">
                            <img src="call.png" width={"75px"} height={"75px"} />
                        </div>
                        <div className="contact__info">
                            <span> Email Us:</span>
                            <span>01000000000</span>
                        </div>
                    </div>
                </div>
            </div>

            <NavBar/>
        </div>
    )
}


export default Header