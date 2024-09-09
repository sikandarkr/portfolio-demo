import React from "react";
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaWhatsapp, FaGithub } from 'react-icons/fa';
import '../styles/Home.css';

const userData = {
  name: "John Doe",
  role: "Software Engineer",
  description: "I'm a dedicated Software Engineer with a knack for building robust and user-friendly applications. Let's collaborate and innovate together.",
  email: "johndoe@example.com",
  phone: "+1234567890",
  whatsapp: "+1234567890",
  linkedin: "https://www.linkedin.com/in/johndoe",
  github: "https://github.com/johndoe",
  college: {
    name: "Tech University",
    location: "California, USA",
    duration: "2010 - 2014"
  },
  experience: "8 years of experience in software development",
  languages: ["English", "Spanish"],
  imageUrl: "https://randomuser.me/api/portraits/men/10.jpg"
};

const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <div className="text-content">
          <h1>Hello, I'm <span className="highlight">{userData.name}</span></h1>
          <h2 className="role">{userData.role}</h2>
          <p className="description">{userData.description}</p>
          <div className="contact-info">
            <p><FaEnvelope className="icon" /> Email: <a href={`mailto:${userData.email}`}>{userData.email}</a></p>
            <p><FaPhoneAlt className="icon" /> Phone: {userData.phone}</p>
            <p><FaWhatsapp className="icon" /> WhatsApp: <a href={`https://wa.me/${userData.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat with me</a></p>
            <p><FaGithub className="icon" /> GitHub: <a href={userData.github} target="_blank" rel="noopener noreferrer">{userData.github}</a></p>
            <p>College: <span className="college-name">{userData.college.name}</span>, {userData.college.location} <br />
              <span className="college-duration">{userData.college.duration}</span></p>
            <p>Experience: {userData.experience}</p>
            <p>Languages: {userData.languages.join(", ")}</p>
          </div>
        </div>
        <div className="image-content">
          <img src={userData.imageUrl} alt={userData.name} />
          <a href={userData.linkedin} target="_blank" rel="noopener noreferrer" className="connect-btn">
            <FaLinkedin className="linkedin-icon" /> Connect with me
          </a>
        </div>
      </div>
      <div className="waving-smiley">
        👋
        <div className="bubble-text">Hello!</div>
      </div>
    </div>
  );
};

export default Home;
