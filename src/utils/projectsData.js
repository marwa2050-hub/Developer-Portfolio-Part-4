import project1Img from "../assets/project1.jpg";
import project2Img from "../assets/project2.jpg";
import project3Img from "../assets/project3.jpg";

const projectsData = [
  {
    id: 1,
    name: "Bloom Portfolio",
    title: "Bloom Portfolio",
    image: project1Img, // <-- استفاده از import
    shortDescription: "A modern portfolio showcasing projects with animations and responsive design.",
    longDescription: "Built with React and Framer Motion...",
    techStack: ["React", "Framer Motion", "CSS"],
    featured: true,
    liveLink: "https://example.com/bloom-portfolio",
    codeLink: "https://github.com/marwa2050-hub/bloom-portfolio",
    date: "2025"
  },
  {
    id: 2,
    name: "TaskFlow",
    title: "TaskFlow",
    image: project2Img,
    shortDescription: "A task management app with persistence, filters and drag-n-drop UI.",
    longDescription: "TaskFlow supports adding, editing...",
    techStack: ["React", "LocalStorage", "ARIA"],
    featured: false,
    liveLink: "https://example.com/taskflow",
    codeLink: "https://github.com/marwa2050-hub/taskflow",
    date: "2024"
  },
  {
    id: 3,
    name: "SkyWeather",
    title: "SkyWeather",
    image: project3Img,
    shortDescription: "A weather dashboard fetching API data with a clean visual layout.",
    longDescription: "SkyWeather uses OpenWeather API...",
    techStack: ["React", "API", "CSS"],
    featured: false,
    liveLink: "https://example.com/skyweather",
    codeLink: "https://github.com/marwa2050-hub/skyweather",
    date: "2024"
  }
];

export default projectsData;
