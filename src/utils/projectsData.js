import project1Img from "../assets/project1.jpg";
import project2Img from "../assets/project2.jpg";
import project3Img from "../assets/project3.jpg";

const projectsData = [
  {
    id: 1,
    name: "Bloom Portfolio",
    title: "Bloom Portfolio",
    image: project1Img,
    problem: "Needed a professional portfolio to showcase projects with modern design and smooth animations.",
    solution: "Built a responsive portfolio using React and Framer Motion, focusing on accessibility, animations, and performance.",
    outcome: "Enhanced online presence, with a polished showcase of projects and improved UX.",
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
    problem: "Users struggled to organize and track their daily tasks efficiently.",
    solution: "Developed a task management app with add/edit functionality, drag-n-drop UI, and persistent storage using LocalStorage.",
    outcome: "Increased productivity for users and simplified task tracking.",
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
    problem: "Users wanted a simple and clean way to check current weather and forecast.",
    solution: "Created a weather dashboard fetching real-time data from OpenWeather API, with clear visual layout and responsive design.",
    outcome: "Improved user experience and accessibility for weather tracking across devices.",
    techStack: ["React", "API", "CSS"],
    featured: false,
    liveLink: "https://example.com/skyweather",
    codeLink: "https://github.com/marwa2050-hub/skyweather",
    date: "2024"
  }
];

export default projectsData;
