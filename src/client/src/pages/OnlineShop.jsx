import React from 'react';
import onlineShop from "../assets/online shop.png";

const OnlineShop = () => {
    return (
        <div className='container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg'>
            <div className='text-center mb-8'>
                <h1 className='text-3xl  font-bold text-gray-800'>Project Name: Online Shop</h1>
                <p className='text-lg text-gray-600'>Technologies Used: React.js, Node.js, Express.js, MongoDB</p>
            </div>
            <div className='flex justify-center'>
                <img src={onlineShop} alt='online shop' className='w-3/4 rounded-lg shadow'/>
            </div>
        </div>
    );
};

export default OnlineShop;
