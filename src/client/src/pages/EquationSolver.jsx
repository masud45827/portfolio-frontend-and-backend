import React from 'react';
import equation_solver from "../assets/equation_solver.png";
const EquationSolver = () => {
    return (
        <div className='container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg'>
        <div className='text-center mb-8'>
            <h1 className='text-3xl  font-bold text-gray-800'>Project Name: Equation Solver</h1>
            <p className='text-lg text-gray-600'>Technologies Used: Java Swing</p>
        </div>
        <div className='flex justify-center'>
            <img src={equation_solver} alt='online shop' className='w-3/4 rounded-lg shadow'/>
        </div>
    </div>
    );
};

export default EquationSolver;