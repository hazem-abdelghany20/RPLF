import NavBar from "../NavBar"


const Header = () => {

    return (
        <div>
            <div className="book__appointment">
                <div>
                    <p>Bravery, courage, fear and love in a time of war</p>
                </div>
                <div className="book__button">
                    <button>
                        Book an appointment
                    </button>
                </div>
            </div>

            <div>
                <div>

                </div>

                <div>
                    <div>
                        <img src="call.png"/>
                        <div>
                            <span> Call Us:</span>
                            <span>01000000000</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="call.png"/>
                        <div>
                            <span> Email Us:</span>
                            <span>01000000000</span>
                        </div>
                    </div>
                </div>
            </div>

            <NavBar items={["home", "home", "home", "home", "home", "home",]} />
        </div>
    )
}


export default Header