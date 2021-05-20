import React from 'react';
import Navbar from '../../ReUse/Navbar/Navbar';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const Projects = () => {
    return (
        <div  style={{marginTop:'80px'}}>
            <Navbar></Navbar>
            <div className="text-center mt-5">
                <h2>My Projects</h2>
                <h5>Here some of my successful projects.</h5>
            </div>
            <div className="container">
                <ProjectDetail></ProjectDetail>
            </div>
        </div>
    );
};

export default Projects;