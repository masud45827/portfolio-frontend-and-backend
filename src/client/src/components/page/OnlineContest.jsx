import React, { useEffect, useState } from "react";
import ProblemSolved from "../../card/ProblemSolved";
import axios from "axios";
import OnlineContestCreate from "../form/OnlineContestCreate";

const OnlineContest = () => {
  const [OnlineJudge, setOnlineJudge] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/experience/online-contest"
        );
        setOnlineJudge(response.data);
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
        <div>
            {/* <h1 className="text-center text-3xl p-5 font-bold">Work Experience</h1> */}
            <div className="py-5 px-0">
              <h1 className="text-2xl text-center font-bold">Programming</h1>
              <h1 className="text-2xl p-2 text-center">
                I have solved 3500+ problems in different online judges.
              </h1>
            </div>
            <h1 className="text-2xl p-2 pt-5 font-bold text-center">
              Online judges:{" "}
            </h1>

            <div className="flex justify-start mb-4 pl-5">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={handleClickOpen}
              >
                Add Judge
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {OnlineJudge.map((o, index) => (
                <ProblemSolved
                  key={index}
                  name={o.name}
                  handle={o.handle}
                  rating={o.maxrating}
                  solved={o.solve}
                  link={o.link}
                />
              ))}
            </div>
        </div>

      <OnlineContestCreate open={open} handleClose={handleClose} />
    </>
  );
};

export default OnlineContest;
