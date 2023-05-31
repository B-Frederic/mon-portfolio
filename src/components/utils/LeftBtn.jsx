// React
import { NavLink } from "react-router-dom";
// Icons
import {BsArrowLeftCircle} from "react-icons/bs";

const LeftBtn = (props) => {

    return (
        <div className="container-btn-left">
            {props.left && (
                <NavLink to={props.left}>
                    <BsArrowLeftCircle className="container-btn--prev" />
                </NavLink>
            )}
        </div>
    );
};

export default LeftBtn;