import React from 'react';
import './Header.css';
import Particles from 'react-particles-js';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../ReUse/Navbar/Navbar';

const Header = () => {
    return (
        <div className="header-container">
            <Particles />
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;