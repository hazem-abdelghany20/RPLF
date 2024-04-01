import { useEffect, useState, useRef } from "react"
import './css.css'
import { Link } from "react-router-dom"

const NavButton = ({ id, title, pages, width, height, maxWidth }) => {
    const [hover, setHover] = useState(false)
    const [leftPosition, setLeftPosition] = useState(0)
    const [moveLeft, setMoveLeft] = useState(0)

    const navButtonRef = useRef(null); 
    width = width + (pages.length / 16) * width
    useEffect(() => {
        const navButtonElement = navButtonRef.current; 
        if (navButtonElement) {
            const left = navButtonElement.getBoundingClientRect().left;
            setLeftPosition(left);
            console.log(title)
            console.log(left)
            if (width + (left + (0.1 * window.innerWidth)) > window.innerWidth) {
                console.log('here')
                if (left === 0) {
                    //setMoveLeft((20 / 3) * 50);
                } else {
                    setMoveLeft((20 / 4) * 50);
                    console.log(left)
                    console.log(moveLeft)
                    console.log(left - moveLeft)
                }
            }
        }
    }, [width]); // Dependency on width to update when it changes

    const mouseEnter = () => {
        setHover(true)
    }

    const mouseLeave = () => {
        setHover(false)
    }

    return (
        <div id={id} ref={navButtonRef}> {/* Attach ref to the component */}
            <button className="navigation__button" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                {title}
            </button>

            {
                hover &&
                (
                    <div className="dropdown" style={{ width: `${width}px`, height: `${height}px`, backgroundColor: "white", position: "absolute", left: `${moveLeft == 0? "0px" : leftPosition - moveLeft}px`, color: "black", textAlign: "left", display: "flex", flexDirection: "column", flexWrap: "wrap", paddingLeft: "20px", paddingTop: "20px" }} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        {
                            pages.map((page, index) => (
                                <li key={index}>
                                    <Link to={`/${page.title}`}>{page.title}</Link>
                                </li>
                            ))
                        }
                        {/* Additional test links
                        {[...Array(20)].map((_, index) => (
                            <li key={index}>
                                <Link>{"Test"}</Link>
                            </li>
                        ))} */}
                    </div>
                )
            }
        </div>
    )
}

export default NavButton
