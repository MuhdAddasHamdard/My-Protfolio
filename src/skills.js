// skills.js

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#000000",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#111111",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#181717",
  },
];

export default skills;
