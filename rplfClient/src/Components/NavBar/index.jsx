import { useEffect, useState } from "react"
import axios from 'axios'
import './css.css'
const NavBar = ({ items }) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:3000/api/globals/nav-bar?locale=undefined&draft=false&depth=1').then(response => {
            setData(response.data["main-links"])
           console.log(response.data)
        })
    })
    if (data !== null) {
        return (
            <div className="navbar">
                {data.map((item, index) => (
                    <div key={index}>
                        <button className="navigation__button">
                            {item.link}
                        </button>
                    </div>
                ))}
                <div>
                    <button className="navigation__button">
                        <img src='search-icon.png' alt='search icon' />
                    </button>
                </div>
            </div>
        )
    }
}


export default NavBar