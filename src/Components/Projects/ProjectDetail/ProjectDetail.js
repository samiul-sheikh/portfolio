import React from 'react';
import './ProjectDetail.css';

const ProjectDetail = ({ project }) => {

    return (
        <div className="single-project" style={{border: '1px solid red'}}>
            <img style={{height: '200px'}} src={project.img} alt="" />
            <h2>{project.name}</h2>
        </div>
    );
};

export default ProjectDetail;