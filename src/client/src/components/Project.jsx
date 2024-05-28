import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

import ProjectCard from '../card/ProjectCard';
import onlineShop from "../assets/online shop.png";
import questionBank from "../assets/question_bank.png";
import equation_solver from "../assets/equation_solver.png";
import restaurants from "../assets/restaurants.png";
import todo from "../assets/todo.png";
import portfolio from "../assets/portfolio.png";

const Project = () => {
    const texts = ["Online Shop", "Portfolio", "Todo App", "Question Bank", "Equation Solver", "Restaurent Management"];
    const images = [onlineShop, portfolio, todo, questionBank, equation_solver, restaurants];
    const gitLink =['https://github.com/masud45827/Online-Shop-Project','https://github.com/masud45827/Equation-solver-Java-project','']
    const pages = [
        "/project/onlineshop",
        "/project/portfolio",
        "/project/todo",
        "/project/questionbank",
        "/project/equation-solver",
        "/project/restaurants"
    ];

    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-indigo-50">
                <h1 className="pt-10 w-3/4 pb-5 text-3xl text-center font-bold">Project</h1>
                <hr className="h-[3px] w-[150px] sm:w-[200px] md:w-[300px] lg:w-[300px] bg-black text-center" />
            </div>
            <div className="w-full flex pt-5 flex-col justify-center items-center bg-indigo-50 sm:flex-col md:flex-row  lg:flex-row lg: gap-4 xl:flex-row  flex-wrap">
                {texts.map((text, index) => (
                    <ProjectCard key={index} text={text} image={images[index]} link={<Link to={pages[index]} className='bg-teal-400 border rounded-md px-5 py-1'>Details</Link>} />
                ))}
            </div>
        </div>
    );
};

export default Project;
