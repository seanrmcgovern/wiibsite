import React from "react";
import {
  FaLaptopCode,
  FaReact,
  FaHtml5,
  FaGraduationCap,
} from "react-icons/fa";
import { SiCsharp } from "react-icons/si";

export const TimelineEvents = [
  {
    position: "Software Developer II",
    location: "Crutchfield Corporation",
    date: "Oct. 2021 - present",
    description: "C#, SQL Server, TypeScript development",
    skills: ".NET API, ASP.NET Web applications, VueJS",
    icon: <FaLaptopCode />,
  },
  {
    position: "Software Engineering Intern",
    location: "Investure LLC",
    date: "Sept. 2019 - May 2021",
    description: "C#, JavaScript development",
    skills: ".NET API, ReactJS",
    icon: <SiCsharp />,
  },
  {
    position: "Software Engineering Intern",
    location: "Reonomy",
    date: "June 2019 - Aug. 2019",
    description: "JavaScript development",
    skills: "ReactJS",
    icon: <FaReact />,
  },
  {
    position: "Program Lead",
    location: "HackCville",
    date: "Jan. 2019 - May 2019",
    description: "Instructed two beginner level courses",
    skills: "React-Native, ReactJS, HTML, CSS",
    icon: <FaHtml5 />,
  },
  {
    position: "Bachelor's Degree in Computer Science",
    location: "University of Virginia",
    date: "Aug. 2017 - May 2021",
    description: "UVA Class of 2021",
    skills: "3.91 GPA",
    icon: <FaGraduationCap />,
  },
];

export default TimelineEvents;
