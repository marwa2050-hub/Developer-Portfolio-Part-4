const projectsData = [
  {
    id: 1,
    name: "Bloom Portfolio",
    title: "Bloom Portfolio",
    image: "/project1.jpg", // put image in public/
    shortDescription: "A modern portfolio showcasing projects with animations and responsive design.",
    longDescription: "Built with React and Framer Motion. Includes theme switching, project details pages, and an interactive contact form.",
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
    image: "/project2.jpg",
    shortDescription: "A task management app with persistence, filters and drag-n-drop UI.",
    longDescription: "TaskFlow supports adding, editing, filtering, and localStorage persistence. Focused on UX and accessibility.",
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
    image: "/project3.jpg",
    shortDescription: "A weather dashboard fetching API data with a clean visual layout.",
    longDescription: "SkyWeather uses OpenWeather API to show current and forecasted weather, along with animations and accessibility support.",
    techStack: ["React", "API", "CSS"],
    featured: false,
    liveLink: "https://example.com/skyweather",
    codeLink: "https://github.com/marwa2050-hub/skyweather",
    date: "2024"
  }
];

export default projectsData;
