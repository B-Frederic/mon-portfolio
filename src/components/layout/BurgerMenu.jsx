// React
import { NavLink } from "react-router-dom";
// Data
import data from "../../data/data_links";
// Icons
import { RxCross2 } from "react-icons/rx";
// Motion
import { motion } from "framer-motion"

const BurgerMenu = ({ setBurgerMenu }) => {

    const handleCloseBurgerMenu = () => {
        setBurgerMenu(false);
      };

    return (
        <motion.div
        initial={{x: -300}}
        animate={{x: 0}}
        transition={{
            duration: "0.5"
        }}
        className="container-responsive-menu">
            <div>
                <nav>
                    <ul>
                        {
                            data.map((element, index) => (          
                                <NavLink key={index} to={element.path} onClick={handleCloseBurgerMenu} className={(nav) => nav.isActive ? "active" : ""}><li>{element.link}</li></NavLink>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div
            className="container-responsive-menu--close">
                <RxCross2 onClick={handleCloseBurgerMenu} />
            </div>
        </motion.div>
    );
};

export default BurgerMenu;