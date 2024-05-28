import React from "react";
import image from "../assets/image3.jpg";

const About = () => {
  return (
    <div className="bg-indigo-50">
      <div className="flex flex-col items-center justify-center">
        <h1 className="pt-5 pb-3 text-3xl font-bold text-center">About</h1>
        <hr className="h-[3px] w-[100px] sm:w-[100px] md:w-[200px] lg:w-[200px] bg-black text-center"/>
      </div>
      <div className="flex flex-col justify-center items-center sm:mt-10 p-5 sm:flex-col md:flex-row">
        <img className="border-2 border-solid border-blue-300 rounded-lg mb-5 md:w-2/5 lg:h-[320px] lg:w-[300px]" src={image} alt="Profile" />
        <div className="text-base text-justify md:w-3/5 md:pl-5 lg:text-lg">
          <p className="mb-5">
            I am a recent graduate from Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Gopalganj.
          </p>
          <p className="mb-5">
            I have strong technical skills in languages such as C/C++, Python, Java, JavaScript, HTML, and CSS. I'm familiar with frameworks like React and Bootstrap. My experience extends to working with databases like MySQL and MongoDB. I am comfortable using Linux (Ubuntu) as my operating system and am proficient with tools like Git and GitHub. These technical skills allow me to navigate various aspects of software development with ease and contribute effectively to any team or project.
          </p>
          <p className="mb-5">
            I really enjoy solving problems and have solved 3500+ Problems in Online Judges including Codeforces, Codechef, Atcoder, LeetCode, CSES, Lightoj, and Hackerearth. I am also an Expert in Codeforces. In 2022, I worked with a team and secured the 67th position at BUET IUPC-2022. In 2023, our team achieved the 42nd position at the SUST IUPC 2023. In the same year, we secured the 97th position at the ICPC Dhaka Regional Programming Contest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
