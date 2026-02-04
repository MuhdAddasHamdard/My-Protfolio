import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Vite", icon: SiVite, color: "text-purple-400" },
];
export default skills;
