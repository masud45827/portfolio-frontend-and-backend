import React from 'react';
import ProblemSolved from "../card/ProblemSolved";

const OnsiteContestCard = ({ name, rank, teamName, link }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      <h1 className="text-xl font-bold mb-2">Contest Name: {name}</h1>
      <h1 className="text-lg mb-2">Rank: {rank}</h1>
      <h1 className="text-lg mb-2">Team Name: {teamName}</h1>
      <h1 className="text-lg mb-2">Link: <a href={link} className="text-blue-500 hover:underline">View Standings</a></h1>
    </div>
  );
};

export default OnsiteContestCard;