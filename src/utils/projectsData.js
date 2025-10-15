import project1Img from "../assets/project1.jpg";
import project2Img from "../assets/project2.jpg";
import project3Img from "../assets/project3.jpg";

const projectsData = [
  {
    id: 1,
    name: "School Portal Website",
    title: "School Portal Website",
    image: project1Img,
    problem: "Needed a simple and engaging school portal for students to view their profile, courses, and contact the school easily.",
    solution: "Built a small school website using HTML, CSS, and JavaScript with four pages — Home, Student Profile, Courses, and Contact. Implemented interactive features like greetings, course filtering, and a validated contact form. Styled with Flexbox, hover effects, and gradients for a clean responsive design.",
    outcome: "Delivered a user-friendly school portal that improves communication and engagement between students and the school.",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: true,
    liveLink: "https://marwa2050-hub.github.io/School-Website/",
    codeLink: "https://github.com/marwa2050-hub/School-Website",
    date: "2025"
  },
  {
    id: 2,
    name: "Freelance Invoice App",
    title: "Freelance Invoice & Client Manager",
    image: project2Img,
    problem: "Freelancers needed a simple and efficient way to track clients and manage invoices without complex tools.",
    solution: "Built a clean and functional web app using HTML, CSS, and JavaScript. It includes client management, invoice tracking, and motivational dashboard quotes. Data persistence is handled via localStorage, ensuring that information stays available between sessions.",
    outcome: "Created a lightweight and reliable solution for freelancers to organize clients and invoices effectively.",
    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    featured: false,
    liveLink: "https://marwa2050-hub.github.io/freelance-invoice-app/",
    codeLink: "https://github.com/marwa2050-hub/freelance-invoice-app",
    date: "2025"
  },
  {
    id: 3,
    name: "Developer Portfolio",
    title: "Personal Developer Portfolio",
    image: project3Img,
    problem: "Needed a professional online space to present my web development skills, projects, and experience effectively.",
    solution: "Designed and developed a modern, responsive portfolio using HTML, CSS, and JavaScript. The portfolio follows clean design principles and showcases my journey as a developer through well-structured sections and smooth user experience.",
    outcome: "Built a professional personal portfolio that highlights skills and projects with modern design and clear navigation.",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: true,
    liveLink: "https://marwa2050-hub.github.io/Developer-Portfolio-Part-1-/",
    codeLink: "https://github.com/marwa2050-hub/Developer-Portfolio-Part-1-",
    date: "2025"
  }
];

export default projectsData;
