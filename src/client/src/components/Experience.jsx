// Experience.js
import React, { useEffect, useState } from "react";
import ProblemSolved from "../card/ProblemSolved";
import OnsiteContestCard from "../card/OnsiteContestCard";
import ProjectLink from "../card/ProjectLink";
import axios from "axios";
import OnlineContestCreate from "./form/OnlineContestCreate";
import OnsiteContestCreate from "./form/OnsiteContestCreate";
import OnlineContest from "./page/OnlineContest";
import OnsiteContest from "./page/OnsiteContest";
import ProjectPage from "./page/ProjectPage";

const ExperienceTest = () => {
  const [OnlineJudge, setOnlineJudge] = useState([]);
  const [onSiteContest, setonSiteContest] = useState([]);
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [openOnsite, setOpenopenOnsite] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/experience/online-contest"
        );
        setOnlineJudge(response.data);
        const onsiteData = await axios.get(
          "http://localhost:3000/experience/onsite-contest"
        );
        setonSiteContest(onsiteData.data);

        const projectData = await axios.get(
          "http://localhost:3000/experience/project"
        );
        setProjects(projectData.data);
        console.log(projectData.data);
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
  const handleClickOpenOnsite = () => {
    setOpenopenOnsite(true);
  };

  const handleCloseOnsite = () => {
    setOpenopenOnsite(false);
  };

  return (
    <>
      <div className="p-4 bg-indigo-50">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="pt-2 w-3/4 pb-5 text-3xl text-center font-bold">
            Experience
          </h1>
          <hr className="h-[3px] w-[150px] sm:w-[200px] md:w-[300px] lg:w-[300px] bg-black text-center" />
        </div>

        <div>
          <div className="pt-5">
            <OnlineContest />
            <OnsiteContest />
            <ProjectPage />
          </div>

          <div className="flex flex-col justify-center items-center p-5 text-3xl">
            <h1 className="py-4 text-center font-bold">
              Professional Experience
            </h1>
            <h1 className="font-bold">0</h1>
          </div>
        </div>
      </div>

      <OnlineContestCreate open={open} handleClose={handleClose} />
      <OnsiteContestCreate open={openOnsite} handleClose={handleCloseOnsite} />
    </>
  );
};

export default ExperienceTest;

