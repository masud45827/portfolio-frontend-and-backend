import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isListVisible, setListVisible] = useState(false);
    const [iconMenu, setIcon] = useState(faBars);

    const toggleListVisibility = () => {
        setListVisible(!isListVisible);
    };

    const showBarFun = () => {
        setIcon((prevState) => (prevState === faBars ? faXmark : faBars));
        toggleListVisibility();
    };

    return (
        <div>
            <FontAwesomeIcon className="m-2 z-10 relative sm:block md:hidden lg:hidden" icon={iconMenu} onClick={showBarFun} />
            <ul className={`absolute w-full z-1 left-0 top-0 text-center md:relative md:flex md:flex-row ${isListVisible ? 'block' : 'hidden'}`}>
                <li className='hover:bg-gray-200 md:mr-5 lg:text-xl'>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-white' : '')}>About</NavLink>
                </li>
                <li className='hover:bg-gray-200 md:mr-5 lg:text-xl'>
                    <NavLink to="/experience" className={({ isActive }) => (isActive ? 'text-white' : '')}>Experience</NavLink>
                </li>
                <li className='hover:bg-gray-200 md:mr-5 lg:text-xl'>
                    <NavLink to="/project" className={({ isActive }) => (isActive ? 'text-white' : '')}>Project</NavLink>
                </li>
                <li className='hover:bg-gray-200 md:mr-5 lg:text-xl'>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-white' : '')}>Contact</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
