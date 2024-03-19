

const NavBar = ({ items }) => {
    return (
        <div className="navbar">
            {items.map((item, index) => (
                <div key={index}>
                    <button>
                        {item}
                    </button>
                </div>
            ))}
            <div>
                <img src='search-icon.png' alt='search icon' />
            </div>
        </div>
    )
}


export default NavBar