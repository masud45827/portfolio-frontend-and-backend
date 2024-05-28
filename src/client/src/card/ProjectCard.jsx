import React from 'react';

const ProjectCard = ({ text, image,link }) => {
    return (
        <div className=" m-2 flex flex-col justify-center  items-center p-2 border-2 border-solid border-blue-300 rounded-lg w-4/5 md:w-2/5 lg:w-2/5 xl:w-2/5 bg-gray-50">
            <img src={image} alt="Project" className="pb-5 w-full h-[250px]"/>
            <p className="">{text}</p>
            {link}
        </div>
    );
};

export default ProjectCard;
