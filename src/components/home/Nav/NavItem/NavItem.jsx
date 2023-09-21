/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import NavItemsOfItem from "./NavItemsOfItem/NavItemsOfItem";

const NavItem = ({ item }) => {
    const { path, name, items } = item;
    console.log(items);

    return (
        <div>
            <li className='relative'>
                <Link to={path}>{name}
                    <ol className={`hidden duration-1000 lg:absolute space-y-2 ${items.length? "bg-white":""} text-[#215D6B] p-3 font-bold`}>
                        {items.map((subItem, idx) => <NavItemsOfItem key={idx} items={subItem}></NavItemsOfItem>)}
                    </ol>
                </Link>
            </li>
        </div>
    );
};

export default NavItem;
