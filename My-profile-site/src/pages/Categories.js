import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import ProjectCategory from '../components/project/ProjectCategory';
import CatStr from '../components/strUnderHeader/CatStr';

export default function Categories() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/category/')
      .then(response => {
        setProjects(response.data);

      })
      .catch(error => {
        console.log(error);
      });
  }, []); 

  return (
    <>
    <CatStr/>
      <main className="section">
      <div className="container">
        
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <ProjectCategory key={project.id}
                title={project.title}
                description={project.descriptions}
                img={project.photo}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
    </>
  )
}
