import { useState } from "react"
import './css.css'
import { Link } from "react-router-dom"

const NavButton = ({ title, pages, width, height, left }) => {
    const [hover, setHover] = useState(false)
    width = (10 / 3) * width
    const variable = "About Us"
    //console.log(pages)
    const mouseEnter = () => {
        setHover(true)
    }

    const mouseLeave = () => {
        setHover(false)
    }
    return (
        <div>
            <button className="navigation__button" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                {title}
            </button>


            {
                hover &&
                (
                    <div className="dropdown" style={{ width: `${width}px`, height: `${height}px`, backgroundColor: "white", position: "absolute", left: `${left}px`, color: "black", textAlign: "left", display: "flex", flexDirection: "column", flexWrap: "wrap", paddingLeft: "20px" , paddingTop:"20px" }} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        {
                            pages.map((page , index) => (
                                <li>
                                    <Link to={`/${page.title}`}>{page.title}</Link>
                                </li>
                            ))
                        }
                        
                    </div>
                )
            }

        </div>
    )
}

export default NavButton