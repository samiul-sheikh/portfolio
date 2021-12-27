import React from 'react';
import Navbar from '../ReUse/Navbar/Navbar';
import slider1 from '../../../src/Images/slider1.PNG';
import dream1 from '../../../src/Images/dream1.PNG';
import sheikhHome from '../../Images/sheikh-home.PNG';
import shutter from '../../../src/Images/shutters.PNG';
import hungry1 from '../../../src/Images/hungry1.png';
import bpl1 from '../../../src/Images/bpl1.PNG';
import discover1 from '../../../src/Images/discover1.PNG';
import panda1 from '../../../src/Images/panda1.PNG';
import doctor1 from '../../../src/Images/doctor1.PNG';
import volunteer1 from '../../../src/Images/volunteer1.PNG';
import hotel1 from '../../../src/Images/hotel1.PNG';
import PortfolioDetails from '../PortfolioDetails/PortfolioDetails';

const portfolioData = [
    {
        title: 'Hotel Management System',
        img: hotel1,
        technology: 'HTML, React JS, Material UI, JWT Token, React Router, React Hook, Firebase Authentication ',
        feature1: 'full stack hotel management based react application',
        feature2: 'users can book room after login with valid google account.',
        feature3: 'user can view their own all booking history',
        feature4: 'using jwt token for secure user info and api',
        feature5: 'user can choose their favorite from different kinds of rooms.',
        live: 'https://hotel-management-burj.web.app/',
        github: 'https://github.com/samiul-sheikh/hotel-management-system'
    },
    {
        title: 'Team Selection - BPL',
        img: bpl1,
        technology: 'HTML, CSS, React JS',
        feature1: 'React single page application.',
        feature2: 'Create different components for different types of role.',
        feature3: 'using destructuring for extract multiple properties in one statement.',
        feature4: 'In left side you can view all players information and when you hire player selected players will be added in right side and display cost.',
        feature5: 'you can hire more than one player and your total budget will be display below automatically.',
        live: 'https://team-selection-bpl.netlify.app/',
        github: 'https://github.com/samiul-sheikh/team-selection-bpl'
    },
    {
        title: 'Image Slider',
        img: slider1,
        technology: 'HTML, CSS, Bootstrap, JavaScript, Rest API',
        feature1: 'user can search any image just type keyword and hit search button.',
        feature2: 'user must be select at least two or more images for slideshow.',
        feature3: 'if double click on a selected image, image will be unselected for slideshow.',
        feature4: 'users can set manually slider time duration(in milliseconds) for view slideshow. if they given negative value(like -3000) view slideshow by default after 1 second.',
        feature5: 'display a colorful spinner before loading data and implement keyboard enter button.',
        live: 'https://samiul-sheikh.github.io/image-slider/',
        github: 'https://github.com/samiul-sheikh/image-slider'
    },
    {
        title: 'Sheikh Technology',
        img: sheikhHome,
        technology: 'React JS, Node JS, Express JS, mongo DB, Bootstrap, Firebase Authentication, React Router',
        feature1: 'Users can take services after login with valid google account.',
        feature2: 'Users view their all taking services in dashboard order list.',
        feature3: 'Users can give review from dashboard add review option which dynamically display in homepage.',
        feature4: 'Same Dashboard of different kinds of features for admin and users.',
        feature5: 'Only valid admin can make another admin, add /delete service, all users order services.',
        live: 'https://sheikh-technologies.web.app/',
        github: 'https://github.com/samiul-sheikh/sheikh-technology-client'
    },
    {
        title: 'Doctors Portal',
        img: doctor1,
        technology: 'HTML, CSS, Bootstrap, React JS, React Hook, React Router, Firebase Authentication, Font-Awesome',
        feature1: 'Full Stack doctor service providing based react application.',
        feature2: 'Users can take appointment after login with valid google account.',
        feature3: 'Users view their all taking appointment in dashboard appointment calender.',
        feature4: 'Same Dashboard of different kinds of features for admin and users.',
        feature5: 'an admin can make another admin.',
        live: 'https://doctor-portal-bd.web.app/',
        github: 'https://github.com/samiul-sheikh/doctors-portal-client'
    },
    {
        title: 'Volunteer Network',
        img: volunteer1,
        technology: 'HTML, CSS, React JS, React Hook, React Router',
        feature1: 'full Stack social work based react application.',
        feature2: 'different kinds of events are display from server.',
        feature3: 'user can add an event with a title and image from navbar add event option.',
        feature4: 'user can delete an event.',
        feature5: 'more features are upcoming....',
        live: 'https://volunteer-network-team.netlify.app/',
        github: 'https://github.com/samiul-sheikh/volunteer-network'
    },
    {
        title: 'Dream Rider',
        img: dream1,
        technology: 'HTML, CSS, React JS, React Bootstrap, React Router, Font-Awesome',
        feature1: 'professional looks UI design.',
        feature2: 'There are four types of ride category (bike, car, bus, train)',
        feature3: 'In this project no using api, fake data prepared by me in json file.',
        feature4: 'dynamically price update with every ride.',
        feature5: 'In this project also a map view option.',
        live: 'https://dream-rider-info.web.app/',
        github: 'https://github.com/samiul-sheikh/dream-rider'
    },
    {
        title: "Shutter's Moment",
        img: shutter,
        technology: 'HTML, Tailwind CSS, React JS',
        feature1: 'Photography website',
        feature2: 'different kinds of services display for user',
        feature3: 'user can view all information',
        feature4: 'responsive for all devices',
        feature5: 'basically practicing tailwind css in this project',
        live: 'https://shutters-moment.netlify.app/',
        github: 'https://github.com/samiul-sheikh/shutters-moment'
    },
    {
        title: 'Hungry Monster',
        img: hungry1,
        technology: 'HTML, CSS, Bootstrap, JavaScript',
        feature1: 'Vanilla JavaScript Project',
        feature2: 'User Interface is looking great.',
        feature3: 'users can easily search any food by name or name first letter.',
        feature4: 'display all matches food items in UI by searching keyword.',
        feature5: 'if users want to view which materials is used for cook this food just click on a food item.',
        live: 'https://samiul-sheikh.github.io/hungry-monstrar-api/',
        github: 'https://github.com/samiul-sheikh/hungry-monstrar-api'
    },
    {
        title: 'Discover-Fly',
        img: discover1,
        technology: 'HTML, CSS, JavaScript',
        feature1: 'users can easily book their flights to travel all over the world.',
        feature2: 'there are two types of ticket category (economy & first class).',
        feature3: 'When they purchase ticket view their total cost.',
        feature4: 'price will be auto updated with 10% vat.',
        feature5: 'users can select their departure and return date.',
        live: 'https://samiul-sheikh.github.io/Discover-Fly/',
        github: 'https://github.com/samiul-sheikh/Discover-Fly'
    },
    {
        title: 'Panda E-commerce',
        img: panda1,
        technology: 'HTML, Bootstrap',
        feature1: 'Responsive an e-commerce website landing page.',
        feature2: 'User interface is looking professional.',
        feature3: 'an e-commerce website Frontend design complete.',
        feature4: 'Links with different kinds of pages added.',
        feature5: 'Using only bootstrap.',
        live: 'https://samiul-sheikh.github.io/panda-e-commerce-bootstrap/',
        github: 'https://github.com/samiul-sheikh/panda-e-commerce-bootstrap'
    },
    /*
    {
        title: '',
        img: dream1,
        technology: 'HTML, CSS, JavaScript, React JS, React Bootstrap, React Router, Rest API',
        feature1: '',
        feature2: '',
        feature3: '',
        feature4: '',
        feature5: '',
        live: '',
        github: ''
    },
    */
]

const Portfolio = () => {
    return (
        <section className="container mt-5">
            <Navbar></Navbar>
            <div className="text-center" style={{ marginTop: '100px' }}>
                <h3>My Projects</h3>
                <h5>Here some of my successful projects.</h5>
            </div>
            <div className="row">
                {
                    portfolioData.length === 0 && <div class="spinner-border text-primary mx-auto my-auto" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                {
                    portfolioData.map(portfolio => <PortfolioDetails portfolio={portfolio}></PortfolioDetails>)
                }
            </div>
        </section>
    );
};

export default Portfolio;