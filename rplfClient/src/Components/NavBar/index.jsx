import { useEffect, useState } from "react"
import axios from 'axios'
import './css.css'
import NavButton from "../NavButton"
const NavBar = ({ items , docs}) => {
    const [data, setData] = useState(null)


    useEffect(() => {
        axios.get('http://localhost:3000/api/globals/nav-bar?locale=undefined&draft=false&depth=1').then(response => {
            setData(response.data["main-links"])
            //console.log(response.data)
        })
    })
    if (data !== null) {
        return (
            <div className="navbar">
                {data.map((item, index) => {
                    switch (item.link) {
                        case "About Us":
                            // const navbar = document.querySelector('.navbar')
                            // console.log(navbar)
                            // const navbarWidth = navbar.offsetWidth;
                            // console.log(navbarWidth)
                            return (
                                <NavButton key={index} title={item.link} width={75} height={200} pages={docs.filter(page => page.linked_to == "about_us")} />
                            )
                        case "Practice Areas":
                            return (
                                <NavButton key={index} title={item.link} width={75} height={200} pages={docs.filter(page => page.linked_to == "practice_areas")} />
                            )
                        case "People":
                            return (
                                <NavButton key={index} title={item.link} width={75} height={200} pages={docs.filter(page => page.linked_to == "people")} />
                            )
                        case "Partners In Success":
                            return (
                                <NavButton key={index} title={item.link} width={75} height={200} pages={docs.filter(page => page.linked_to == "partners_in_success")} />
                            )
                        case "Immigration":
                            return (
                                <NavButton key={index} title={item.link} width={75} height={200}pages={docs.filter(page => page.linked_to == "immigration")} />
                            )
                        case "Legal Translation":
                            return (
                                <NavButton key={index} title={item.link} width={75} height={200} pages={docs.filter(page => page.linked_to == "legal_translation")} />
                            )
                        case "Careers":
                            return (
                                <NavButton key={index} title={item.link} width={75} height={200} pages={docs.filter(page => page.linked_to == "careers")} />
                            )
                        case "Contact Us":
                            return (
                                <NavButton key={index} title={item.link} width={75} height={200} pages={docs.filter(page => page.linked_to == "contact_us")} />
                            )
                        case "Laws & News":
                            return (
                                <NavButton key={index} title={item.link} width={75} height={200} pages={docs.filter(page => page.linked_to == "laws_&_news")} />
                            )

                    }
                })}
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