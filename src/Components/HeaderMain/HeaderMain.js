import React from 'react';
import './HeaderMain.css';
import headerImage from '../../Images/user-2.png';
import Typed from 'react-typed';

const HeaderMain = () => {
    return (
        <main style={{ height: '550px', padding: '10px 10px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: 'white' }}>Hello! I am<br /> Samiul Hasan Sheikh</h1>
                <Typed
                    className="typed-text"
                    strings={["React Developer", "MERN Stack Developer", "JavaScript Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <div className="mt-3">
                    <button className="btn btn-primary mr-3">Hire Me</button>
                    <button className="btn btn-primary">Resume</button>
                </div>
            </div>
            <div className="col-md-6">
                <img src={headerImage} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;