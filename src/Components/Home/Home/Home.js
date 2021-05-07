import React from 'react';
import Blog from '../../Blog/Blog';
import ContactMe from '../../ContactMe/ContactMe';
import Header from '../../Header/Header';
import Projects from '../../Projects/Projects/Projects';
import SocialMedia from '../../SocialMedia/SocialMedia';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Blog></Blog>
            <ContactMe></ContactMe>
            <SocialMedia></SocialMedia>
        </div>
    );
};

export default Home;