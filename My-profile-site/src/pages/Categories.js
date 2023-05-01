import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Project from '../components/project/Project'

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
      <main className="section">
      <div className="container">
        <h2 className="title-2">Категории товаров</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project key={project.id}
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
