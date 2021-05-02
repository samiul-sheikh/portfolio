import React from 'react';
import './Header.css';
import Particles from 'react-particles-js';
import NavItem from '../ReUse/NavItem/NavItem';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div className="header-container">
            <Particles />
            <NavItem></NavItem>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;