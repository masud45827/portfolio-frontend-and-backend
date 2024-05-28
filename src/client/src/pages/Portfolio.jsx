import React from 'react';
import portfolio from "../assets/portfolio.png";
const Portfolio = () => {
    return (
        <div className='container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg'>
        <div className='text-center mb-8'>
            <h1 className='text-3xl  font-bold text-gray-800'>Project Name: Portfolio</h1>
            <p className='text-lg text-gray-600'>Technologies Used: React.js, Tailwind CSS</p>
        </div>
        <div className='flex justify-center'>
            <img src={portfolio} alt='online shop' className='w-3/4 rounded-lg shadow'/>
        </div>
    </div>
    );
};

export default Portfolio;