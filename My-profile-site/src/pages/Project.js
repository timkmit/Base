import { useParams } from "react-router-dom";

import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import axios from 'axios';
import { useState, useEffect } from 'react';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.photo}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
            <p>{project.descriptions}</p>
            <p>Price: {project.price} rub</p>
          </div>

          {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
        </div>
      </div>
    </main>
  );
};

export default Project;