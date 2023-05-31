// React
import { useState } from "react";
import { NavLink } from "react-router-dom";
// Component layout
import BurgerMenu from "./BurgerMenu";
// Data
import data from "../../data/data_links";
// Icons
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {

    const [burgerMenu, setBurgerMenu] = useState(false);

    const handleBurgerMenu = () => {
        setBurgerMenu(!burgerMenu);
    }

    return (
        <div className="container-header">
            <div className="container-header--navbar">
                <nav>
                    <ul>
                        {
                            data.map((element, index) => (
                                
                                <NavLink key={index} to={element.path} className={(nav) => nav.isActive ? "active" : ""}><li>{element.link}</li></NavLink>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div className="container-header--menu-burger">
                <RxHamburgerMenu onClick={handleBurgerMenu} />
            </div>
            {burgerMenu && <BurgerMenu setBurgerMenu={setBurgerMenu} />}
        </div>
    );
};

export default Header;