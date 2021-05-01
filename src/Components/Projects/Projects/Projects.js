import React from 'react';
import sheikhHome from '../../../Images/sheikh-home.PNG';
import fashionHome from '../../../Images/fashion-home.PNG';
import sportsHome from '../../../Images/sports-home.PNG';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const projectData = [
    {
        name: 'Sheikh Technology',
        img: sheikhHome
    },
    {
        name: 'Fashion House',
        img: fashionHome
    },
    {
        name: 'Sports Team',
        img: sportsHome
    }
]

const Projects = () => {
    return (
        <section>
            <div className="text-center">
                <h2>My Projects</h2>
                <h5>Here some of my successful projects.</h5>
            </div>
            <div className="container m-auto">
                {
                    projectData.map(project => <ProjectDetail project={project}></ProjectDetail>)
                }
            </div>
        </section>
    );
};

export default Projects;