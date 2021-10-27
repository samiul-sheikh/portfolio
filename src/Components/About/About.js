import React from 'react';
import Navbar from '../ReUse/Navbar/Navbar';
import graduate from '../../Images/graduate.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mt-5">
                <div className="row d-flex" style={{ marginTop: '100px' }}>
                    <div className="col-md-8 text-center" style={{ marginTop: '100px' }}>
                        <h1>Samiul Hasan Sheikh</h1>
                        <h4>MERN Stack Developer, React Developer, Front-End Developer</h4>
                        <p> <FontAwesomeIcon icon={faPhone} /> 01784097404 | <FontAwesomeIcon icon={faEnvelope} /> sheikh.samiul1971@gmail.com | <FontAwesomeIcon icon={faMapMarkerAlt} /> Dhaka, Bangladesh</p>
                    </div>
                    <div className="col-md-4">
                        <img src={graduate} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h2 className="text-primary">Technical Skills</h2>
                        <h4>Programming Langues</h4>
                        <h6>JavaScript, PHP</h6>
                        <h4>Front-End Development</h4>
                        <h6>HTML, CSS, REST API</h6>
                        <h4>Back-End Development</h4>
                        <h6>Node JS, Express JS</h6>
                        <h4>Framework</h4>
                        <h6>React JS, Bootstrap, React Bootstrap, Material UI</h6>
                        <h4>Database</h4>
                        <h6>mongo DB, mySQL</h6>
                        <h4>Knowledge</h4>
                        <h6>Git, Redux, NPM, JWT, React Hooks, Context API, SAAS, Nex.JS, Data Structure, Algorithm</h6>
                        <h4>Deployment</h4>
                        <h6>GitHub, Netlify, Firebase, Heroku</h6>
                        <h4>Debugging</h4>
                        <h6>Chrome developer’s tools</h6>
                        <h4>Operating System</h4>
                        <h6>Windows, Linux</h6>
                        <h4>Programming Tools</h4>
                        <h6>VS Code, Sublime Text, Visual Studio, Notepad++</h6>
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-primary">Education</h2>
                        <h4>Graduation</h4>
                        <h5>American International University-Bangladesh AIUB</h5>
                        <h5>B.Sc in Software Engineering | 2016-2020</h5>
                        <h6>CGPA: 3.00 out of 4.00</h6>
                        <h4>HSC</h4>
                        <h5>Rangpur Government College, Rangpur</h5>
                        <h5>Higher Secondary Certificate | Science | 2014 </h5>
                        <h6>GPA: 4.30 out of 5.00</h6>
                        <h4>SSC</h4>
                        <h5>Rabaitary S.B.M.L High School, Kurigram</h5>
                        <h5>Secondary School Certificate | Science | 2011 </h5>
                        <h6>GPA: 5.00 out of 5.00</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;