// React
import { NavLink } from "react-router-dom";
// Icons
import {BsArrowRightCircle} from "react-icons/bs";

const LeftBtn = (props) => {

    return (
        <div className="container-btn-right">
            {props.right && (
                <NavLink to={props.right}>
                    <BsArrowRightCircle className="container-btn--prev" />
                </NavLink>
            )}
        </div>
    );
};

export default LeftBtn;