import React from 'react';
import Navbar from './Navbar';
import logo from "../assets/image2.png";

const Header = () => {
    return (
        <div>
        <div className='fixed w-full m-0 pr-5 h-[100px] md:h-[70px] flex justify-between items-center bg-cyan-400'>
            <img className='w-30 h-12' src={logo} alt='logo'/>
            <Navbar/> 
            
        </div>
        <div  className='pt-[100px] bg-indigo-50' ></div>
        </div>
    );
};

export default Header;
