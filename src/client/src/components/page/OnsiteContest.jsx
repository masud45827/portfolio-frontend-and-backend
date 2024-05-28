import React, { useEffect, useState } from "react";
import OnsiteContestCard from "../../card/OnsiteContestCard";
import axios from "axios";
import OnsiteContestCreate from "../form/OnsiteContestCreate";
const OnsiteContest = () => {
  const [onSiteContest, setonSiteContest] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const onsiteData = await axios.get(
          "http://localhost:3000/experience/onsite-contest"
        );
        setonSiteContest(onsiteData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [open]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
        <h1 className="p-2 font-bold pt-10 text-2xl text-center">
          Onsite Contest Achievements:{" "}
        </h1>
        <div className="flex justify-start mb-4 pl-5">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={handleClickOpen}
          >
            Add Onnsite Contest
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {onSiteContest.map((contest, index) => (
            <OnsiteContestCard
              key={index}
              name={contest.name}
              rank={contest.rank}
              teamName={contest.teamName}
              link={contest.link}
            />
          ))}
        </div>

      <OnsiteContestCreate open={open} handleClose={handleClose} />
    </>
  );
};

export default OnsiteContest;
