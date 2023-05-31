// React
import { NavLink } from "react-router-dom";
// Data
import data from "../../data/data_links";
// Icons
import { RxCross2 } from "react-icons/rx";

const BurgerMenu = ({ setBurgerMenu }) => {

    const handleCloseBurgerMenu = () => {
        setBurgerMenu(false);
      };

    return (
        <div className="container-responsive-menu">
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
            <div className="container-responsive-menu--close">
                <RxCross2 onClick={handleCloseBurgerMenu} />
            </div>
        </div>
    );
};

export default BurgerMenu;