// React
import { useState } from "react";
import { NavLink } from "react-router-dom";
// Component layout
import BurgerMenu from "./BurgerMenu";
// Data
import data from "../../data/data_links";
// Icons
import { RxHamburgerMenu } from "react-icons/rx";
// Motion
import { motion } from "framer-motion";

const Header = () => {

    const [burgerMenu, setBurgerMenu] = useState(false);

    const handleBurgerMenu = () => {
        setBurgerMenu(!burgerMenu);
    }

    return (
        <div className="container-header">
            <motion.div
            initial={{y: -200}}
            animate={{y: 0}}
            transition={{
                duration: "2"
            }}
            className="container-header--navbar">
                <nav>
                    <ul>
                        {
                            data.map((element, index) => (
                                
                                <NavLink key={index} to={element.path} className={(nav) => nav.isActive ? "active" : ""}><li>{element.link}</li></NavLink>
                            ))
                        }
                    </ul>
                </nav>
            </motion.div>
            <motion.div
            initial={{scale: 0, rotateX: 720}}
            animate={{scale: 1, rotateX: 0}}
            transition={{
                duration: "2.5"
            }}
            className="container-header--menu-burger">
                <RxHamburgerMenu onClick={handleBurgerMenu} />
            </motion.div>
            {burgerMenu && <BurgerMenu setBurgerMenu={setBurgerMenu} />}
        </div>
    );
};

export default Header;