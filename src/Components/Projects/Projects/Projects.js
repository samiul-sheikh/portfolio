import React from 'react';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const Projects = () => {
    return (
        <div>
            <div className="text-center">
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