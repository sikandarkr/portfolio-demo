import React, { useEffect, useState, useMemo } from "react";
import '../styles/Projects.css';

const Projects = () => {
  const jsonData = useMemo(() => [
    {
      "title": "EconoShop",
      "description": "EconoShop is an e-commerce platform designed to provide small businesses with an easy way to set up and manage their online stores. The platform offers customizable storefronts, secure payment gateways, and integration with major shipping providers, making it easier for businesses to reach a global audience.",
      "techStack": "React.js, Node.js, MongoDB, Express, Redux",
      "Tools": "Jira, VS Code, GitHub",
      "rolesResponsibilities": "Developed the front-end interface, integrated RESTful APIs for product management, implemented authentication, and optimized the site for performance.",
      "company": "Tech Innovators Inc."
    },
    {
      "title": "HealthTrack",
      "description": "HealthTrack is a comprehensive health monitoring app that allows users to track their fitness, diet, and medical records. The app provides personalized health insights based on the data entered, helping users maintain a healthy lifestyle.",
      "techStack": "React Native, Firebase, Redux, Chart.js",
      "Tools": "Trello, Visual Studio Code, Git",
      "rolesResponsibilities": "Implemented user authentication, integrated real-time data synchronization with Firebase, and designed interactive charts to display health metrics.",
      "company": "FitTech Solutions"
    },
    {
      "title": "EduPortal",
      "description": "EduPortal is a cloud-based learning management system that enables educators to create, manage, and deliver online courses. The platform supports live classes, assignment submissions, and progress tracking, making it an all-in-one solution for remote learning.",
      "techStack": "Angular, Node.js, MySQL, AWS",
      "Tools": "Jira, WebStorm, GitLab",
      "rolesResponsibilities": "Designed and implemented course management features, integrated video conferencing tools, and developed an automated grading system.",
      "company": "EduTech Global"
    },
    {
      "title": "AutoRent",
      "description": "AutoRent is a car rental service platform that connects customers with local car rental companies. The platform offers a user-friendly interface for booking vehicles, managing reservations, and handling payments, making car rentals easy and accessible.",
      "techStack": "Vue.js, Laravel, MySQL, Stripe API",
      "Tools": "Asana, Sublime Text, Bitbucket",
      "rolesResponsibilities": "Developed the booking system, integrated payment processing with Stripe, and optimized the search functionality for better user experience.",
      "company": "DriveTech Ltd."
    },
    {
      "title": "EventMaster",
      "description": "EventMaster is an event management platform that simplifies the planning and execution of events. From creating guest lists to sending out invitations and tracking RSVPs, EventMaster provides all the tools needed to organize successful events.",
      "techStack": "React.js, Node.js, PostgreSQL, AWS Lambda",
      "Tools": "Confluence, IntelliJ IDEA, Git",
      "rolesResponsibilities": "Built the guest management module, integrated third-party APIs for event notifications, and designed a dashboard for real-time event tracking.",
      "company": "Eventify Co."
    },
    {
      "title": "TravelMate",
      "description": "TravelMate is a travel planning app that offers personalized itineraries, booking assistance, and real-time travel updates. The app curates travel experiences based on user preferences, ensuring a hassle-free journey from start to finish.",
      "techStack": "React Native, Node.js, MongoDB, Redux",
      "Tools": "Jira, VS Code, GitHub",
      "rolesResponsibilities": "Developed the itinerary planning feature, integrated third-party APIs for flight and hotel bookings, and implemented push notifications for travel updates.",
      "company": "Global Adventures"
    },
    {
      "title": "ShopEase",
      "description": "ShopEase is an AI-driven shopping assistant that helps users find the best deals online. The platform scans multiple e-commerce sites in real-time, comparing prices and recommending the best offers based on user preferences.",
      "techStack": "React.js, Python, TensorFlow, Elasticsearch",
      "Tools": "Trello, PyCharm, Git",
      "rolesResponsibilities": "Developed the real-time price comparison engine, implemented machine learning algorithms for personalized recommendations, and optimized the search functionality.",
      "company": "AI Commerce Solutions"
    },
  ], []); // Empty dependency array to ensure the array is created only once

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setProjects(jsonData);
  }, [jsonData]);

  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <p><strong>Tech Stack:</strong> {project.techStack}</p>
          <p><strong>Tools: </strong>{project.Tools}</p>
          <p><strong>Roles & Responsibilities:</strong> {project.rolesResponsibilities}</p>
          <p><strong>Company:</strong> {project.company}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
