import React from 'react';
import Blog from '../../Blog/Blog';
import ContactMe from '../../ContactMe/ContactMe';
import Header from '../../Header/Header';
import Projects from '../../Projects/Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Blog></Blog>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;