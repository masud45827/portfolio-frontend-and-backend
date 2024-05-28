
import React, { useEffect, useState } from "react";
import ProjectLink from "../../card/ProjectLink";
import axios from "axios";
import ProjectCreate from "../form/ProjectCreate";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
      

        const projectData = await axios.get(
          "http://localhost:3000/experience/project"
        );
        setProjects(projectData.data);
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
            Projects:{" "}
          </h1>
          <div className="flex justify-start mb-4 pl-5">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={handleClickOpen}
              >
                Add project
              </button>
            </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectLink
                key={index}
                name={project.name}
                technology={project.technology}
                link={project.link}
              />
            ))}
          </div>
          <ProjectCreate open={open} handleClose={handleClose} />
          
 
    </>
  );
};

export default ProjectPage;
