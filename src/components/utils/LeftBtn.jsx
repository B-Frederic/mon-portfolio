// React
import { NavLink } from "react-router-dom";
// Icons
import {BsArrowLeftCircle} from "react-icons/bs";

const LeftBtn = (props) => {

    const handleToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="container-btn-left">
            {props.left && (
                <NavLink to={props.left} aria-label="page suivante">
                    <BsArrowLeftCircle className="container-btn--prev" onClick={handleToTop}/>
                </NavLink>
            )}
        </div>
    );
};

export default LeftBtn;