// React
import { NavLink } from "react-router-dom";
// Icons
import {BsArrowRightCircle} from "react-icons/bs";

const LeftBtn = (props) => {

    const handleToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="container-btn-right">
            {props.right && (
                <NavLink to={props.right} aria-label="page précédente">
                    <BsArrowRightCircle className="container-btn--prev" onClick={handleToTop} />
                </NavLink>
            )}
        </div>
    );
};

export default LeftBtn;