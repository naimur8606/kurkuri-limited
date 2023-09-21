import { Link } from "react-router-dom";

const NavItemsOfItem = ({items}) => {
    const {path,name} = items;
    // console.log(items)
    return (
        <li><Link to={path}>{name}</Link></li>
    );
};

export default NavItemsOfItem;