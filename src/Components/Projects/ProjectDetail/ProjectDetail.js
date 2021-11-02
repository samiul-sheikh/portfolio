import React from 'react';
import './ProjectDetail.css';
import userManagement from '../../../Images/userManagement.png';
import fashionHome from '../../../Images/fashion-home.PNG';
import sportsHome from '../../../Images/sports-home.PNG';
import perfectClick from '../../../Images/perfectClick.PNG';
import news24 from '../../../Images/news24.png';

const ProjectDetail = () => {

    return (
        <div className="mt-5">
            <div className="mt-5">
                <div className="row d-flex align-items-center individual-project">
                    <div className="col-md-4">
                        <img className="img-fluid" src={perfectClick} alt="" />
                    </div>
                    <div className="col-md-8">
                        <h2>Perfect Click</h2>
                        <h6>Technology used:</h6>
                        <p>JavaScript(ES6), React JS, Node JS, Express JS, mongo DB, Bootstrap, Axios, React Hook, Context API, Firebase, Heroku, SweetAlert</p>
                        <h6>Features:</h6>
                        <ul>
                            <li>Full Stack photography service providing based react application..</li>
                            <li>Users see all the services in homepage. Every Service has two buttons one is view more another is buy now.</li>
                            <li>Users can view service details or buy after login with valid Google account.</li>
                            <li>By default order status is pending, users view their all taking services in dashboard order list.</li>
                            <li>Users can give review from dashboard add review option which dynamically display in homepage.</li>
                            <li>There are two different dashboards for users and admins with different kinds of features.</li>
                            <li>An Admin can view all user orders; add new services also make new admins.</li>
                            <li>Only valid admin can delete service, another admin also change the order status.</li>
                        </ul>
                        <div>
                            <a href="https://perfect-click-bd.web.app/" target="_blank">
                                <button type="button" className="btn btn-info mr-5">Live Site</button>
                            </a>
                            <a href="https://github.com/samiul-sheikh/perfect-click-client" target="_blank">
                                <button type="button" className="btn btn-info">Github</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="row d-flex align-items-center individual-project">
                    <div className="col-md-4">
                        <img className="img-fluid" src={news24} alt="" />
                    </div>
                    <div className="col-md-8">
                        <h2>News24</h2>
                        <h6>Technology used:</h6>
                        <p>React JS, Node JS, Express JS, mongo DB, Bootstrap, Firebase, Heroku</p>
                        <h6>Features:</h6>
                        <ul>
                            <li>News Portal react application.</li>
                            <li>Users can view all types of news articles in homepage.</li>
                            <li>Users can register/login with Google and custom authentication to view the full article.</li>
                            <li> Users can views different types of news by category.</li>
                            <li> Route will be changed dynamically for different kinds of news.</li>
                            <li>An Admin can add new news, top news, new admin and manage news.</li>
                        </ul>
                        <div>
                            <a href="https://newsbd-24.web.app/" target="_blank">
                                <button type="button" className="btn btn-info mr-5">Live Site</button>
                            </a>
                            <a href="https://github.com/samiul-sheikh/news24-client" target="_blank">
                                <button type="button" className="btn btn-info">Github</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="row d-flex align-items-center individual-project">
                    <div className="col-md-4">
                        <img className="img-fluid" src={fashionHome} alt="" />
                    </div>
                    <div className="col-md-8">
                        <h2>Fashion House</h2>
                        <h6>Technology used:</h6>
                        <p>ReactJS, Node JS, Express JS, mongo DB, React Bootstrap, Firebase Authentication, React Router</p>
                        <h6>Features:</h6>
                        <ul>
                            <li>Full Stack shopping related e-commerce react application.</li>
                            <li>Private Route used most of features in this application so that only authenticated users can access the application.</li>
                            <li>When users click buy product route will be changed dynamically, view order products info.</li>
                            <li>Then users can place order, view their all-ordered products in navbar order option.</li>
                            <li>Users can add or delete product from admin option which dynamically display/remove from homepage.</li>
                        </ul>
                        <div>
                            <a href="https://fashion-house-bd.web.app/" target="_blank">
                                <button type="button" className="btn btn-info mr-5">Live Site</button>
                            </a>
                            <a href="https://github.com/samiul-sheikh/fashion-house-client" target="_blank">
                                <button type="button" className="btn btn-info">Github</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="row d-flex align-items-center individual-project">
                    <div className="col-md-4">
                        <img className="img-fluid" src={userManagement} alt="" />
                    </div>
                    <div className="col-md-8">
                        <h2>User Management System</h2>
                        <h6>Technology used:</h6>
                        <p>React JS, Node JS, Express JS, mongo DB, Bootstrap, Firebase Authentication, React Router, React hooks, Axios</p>
                        <h6>Features:</h6>
                        <ul>
                            <li>User management react application.</li>
                            <li>Using Private Route and implement firebase authentication system</li>
                            <li>Users can view all people’s information in homepage</li>
                            <li>Using Pagination to display all people’s information from database</li>
                            <li>Users can search specific people by name or phone number</li>
                            <li>An User can add new people after successfully logged in.</li>
                        </ul>
                        <div>
                            <a href="https://user-management-bd.web.app/" target="_blank">
                                <button type="button" className="btn btn-info mr-5">Live Site</button>
                            </a>
                            <a href="https://github.com/samiul-sheikh/user-management" target="_blank">
                                <button type="button" className="btn btn-info">Github</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="row d-flex align-items-center individual-project">
                    <div className="col-md-4">
                        <img className="img-fluid" src={sportsHome} alt="" />
                    </div>
                    <div className="col-md-8">
                        <h2>Sports Team</h2>
                        <h6>Technology used:</h6>
                        <p>React JS, React Bootstrap, React Router, Rest API</p>
                        <h6>Features:</h6>
                        <ul>
                            <li>Dynamic API based Sports type react application.</li>
                            <li>Users can view all information’s about their favorite team by clicking explore team.</li>
                            <li>Route will be changed dynamically for different kinds of team.</li>
                        </ul>
                        <div>
                            <a href="https://sports-team-details.netlify.app//" target="_blank">
                                <button type="button" className="btn btn-info mr-5">Live Site</button>
                            </a>
                            <a href="https://github.com/samiul-sheikh/sports-team" target="_blank">
                                <button type="button" className="btn btn-info">Github</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5 mb-5">
                <a href="https://sheikh-samiul.web.app/portfolio">
                    <button type="button" className="btn btn-info mr-5">See More</button>
                </a>
            </div>
        </div>
    );
};

export default ProjectDetail;