import React from 'react';
import './HeaderMain.css';
import headerImage from '../../Images/user-2.png';
import Typed from 'react-typed';

const HeaderMain = () => {
    return (
        <main style={{ height: '550px' }} className="row d-flex align-items-center mx-5">
            <div className="col-md-4 offset-md-1 mt-5">
                <h1 className="mt-5" style={{ color: 'white' }}>Hello! I am<br /> Samiul Hasan Sheikh</h1>
                <Typed
                    className="typed-text"
                    strings={["Full Stack Developer", "React Developer", "MERN Stack Developer", "Software Engineer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <div className="my-4">
                    <a href="https://www.linkedin.com/in/samiul-sheikh/" target="_blank">
                        <button className="btn btn-primary mr-3">Hire Me</button>
                    </a>
                    <a href="https://drive.google.com/uc?export=download&id=1RIUN0VscdRVynEbBS6cdOsObRUs8OnuW">
                        <button className="btn btn-primary">Resume</button>
                    </a>
                </div>
            </div>
            <div className="col-md-6">
                <img src={headerImage} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;