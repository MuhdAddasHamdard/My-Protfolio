import {
  FaReact,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
  { name: "React", color: "text-blue-500", icon: FaReact },
  { name: "JavaScript", color: "text-yellow-400", icon: SiJavascript },
  { name: "Tailwind CSS", color: "text-sky-400", icon: SiTailwindcss },
  { name: "GitHub", color: "text-gray-400", icon: FaGithub },
  { name: "Git", color: "text-orange-500", icon: FaGitAlt },
  { name: "HTML5", color: "text-orange-600", icon: FaHtml5 },
  { name: "CSS3", color: "text-blue-500", icon: FaCss3Alt },
  { name: "Vite", color: "text-purple-400", icon: SiVite },
];

export default skills;
