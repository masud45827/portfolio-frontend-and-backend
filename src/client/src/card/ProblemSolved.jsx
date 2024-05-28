// ProblemSolved.js
import React from 'react';

const ProblemSolved = ({ name, handle,rating, solved, link }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      <h1 className="text-xl font-bold mb-2">Online Judge: {name}</h1>
      <h1 className="text-lg mb-2">max rating: {rating}</h1>
      <h1 className="text-lg mb-2">Problems Solved: {solved}</h1>
      <h1 className="text-lg mb-2">Handle: <a href={link} className="text-blue-500 hover:underline">{handle}</a></h1>
    </div>
  );
};

export default ProblemSolved;
