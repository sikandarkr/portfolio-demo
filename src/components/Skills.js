import React, { useState } from "react";
import '../styles/Skills.css';

const Skills = () => {
  const [skills] = useState([
    { id: '1', name: "JavaScript (ES6+)" },
    { id: '2', name: "Node.js" },
    { id: '3', name: "Python Basics" },
    { id: '5', name: "React.js" },
    { id: '6', name: "Redux" },
    { id: '7', name: "Express.js" },
    { id: '8', name: "MongoDB" },
    { id: '9', name: "HTML5 & CSS3" },
    { id: '10', name: "Git & GitHub" },
    { id: '11', name: "Responsive Web Design" },
    { id: '12', name: "GitLab" },
    { id: '13', name: "Camunda(6 month)" },
    { id: '14', name: "Kibana" },
    { id: '15', name: "MySQL" },
    { id: '16', name: "AWS" },
    { id: '17', name: "Workbench" },
    { id: '18', name: "S3 Bucket" },
    { id: '19', name: "Media query" },
    { id: '20', name: "flexbox and grid system" },
    { id: '21', name: "antd, Material design, sementic ui, bootstrap" }
  ]);

  return (
    <section className="skills">
      <h2>Skills & Technologies</h2>
      <ul className="skills-list">
        {skills.map(({ id, name }) => (
          <li key={id} className="skill-item">
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
