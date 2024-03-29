import './Card.css'
import { useState } from 'react'

const Card = ({ title, text }) => {
    const [hovering, setHovering] = useState(false)
    const handleEnter = () => {
        setHovering(true)
    }
    const handleLeave = () => {
        setHovering(false)
    }
    return (
        <div className='outer__container__card'>
            <div className={hovering ? "first__part__hover" : "first__part"}>
            </div>
            <div className={hovering ? "second__part__hover" : "second__part"} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <span style={{
                    fontSize: "12px",
                    fontWeight: "500", lineHeight: "16px",
                    margin: "0px 0px 12px", color: 'lightskyblue'
                }}>{title}</span>
                <h2>{text}</h2>
            </div>
        </div >
    )
}
export default Card