import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import {Grid} from '@mui/material';
import axios from 'axios';


const Category = () => {
  const [projects, setProjects] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/category/')
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
    <Grid container spacing={1} columns={16} className="gridProject">
    <Grid item xs={6}  className="gridImg">
    <img
      src={project.photo}
      alt={project.title}
      className="projectt1"
    />
    
    </Grid>
    <Grid item xs={8} className="gridText">
    <h1 className="titlee">{project.title}</h1>
    <div className="projectt2">
      <p>{project.descriptions}</p>
      
    </div>
    
    </Grid>





    <Grid item xs={15} className="gridTextTel">
    <h1 className="titleeTel">{project.title}</h1>
    
    </Grid>
    <Grid item xs={16}  className="gridImgTel">
    <img
      src={project.photo}
      alt={project.title}
      className="projectt1Tel"
    />
    
    </Grid>
    <Grid item xs={16} className="gridTextTel">
    <div className="projectt2Tel">
      <p>{project.descriptions}</p>
      <p>Price: {project.price} rub</p>
    </div>
    </Grid>
    </Grid>
  );
};

export default Category;