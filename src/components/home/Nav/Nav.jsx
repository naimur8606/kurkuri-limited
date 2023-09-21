// import { Link } from 'react-router-dom';
import './nav.css'
import { AiOutlineMenuUnfold,AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from 'react';
import NavItem from './NavItem/NavItem';
const Nav = () => {
    const [menu, setMenu] = useState(true)
    const [navItems, setNavItems] = useState([])
    useEffect(() =>{
        fetch("./navItems.json")
            .then(res =>res.json())
            .then(data =>setNavItems([...navItems,data]))
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <div className="bg-[#215D6B] z-[1] px-4 lg:px-16 py-1 flex justify-between items-center shadow-gray-600 shadow-lg">
            <img className='w-[22%] md:w-auto' src="https://kurkurilimited.com/upload_images/main_logo.png" alt="logo" />
            <ul className={`absolute z-[1] duration-1000 p-5 lg:p-0 lg:static rounded-l-lg text-white bg-[#215D6B] lg:bg-none space-y-2 lg:space-y-0 lg:flex items-center right-0 ${menu === false ? "top-8 md:top-16":"-top-60"}`}>
                {
                    navItems.map( (navItem) => navItem.map( (item,idx) => <NavItem key={idx} item={item}></NavItem>))
                }
            </ul>
            <div onClick={() => setMenu(!menu)} className='text-white text-3xl lg:hidden'>
                {menu === false ?
                    <AiOutlineClose></AiOutlineClose> :
                   <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                }
            </div>
        </div>
    );
};

export default Nav;