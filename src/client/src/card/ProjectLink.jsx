import React from 'react';

const ProjectLink = ({ name, technology, link }) => {
    return (
        <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h1 className="text-xl font-bold mb-2">{name}</h1>
            <h1 className="text-lg mb-2">Technology: {technology}</h1>
            <h1 className="text-lg mb-2">Link: <a href={link} className="text-blue-500 hover:underline">GitHub</a></h1>
        </div>
    );
};

export default ProjectLink;
