import React from 'react';
import blog0 from '../../../src/Images/basic.jpeg';
import blog1 from '../../../src/Images/important.png';
import blog2 from '../../../src/Images/tips.png';
import BlogDetail from '../BlogDetail/BlogDetail';
import Navbar from '../ReUse/Navbar/Navbar';

const blogData = [
    {
        title: 'Ten Basic JavaScript Topics',
        img: blog0,
        view: 'https://samiul-sheikh.medium.com/ten-basic-javascript-topics-7a287a3b926d'
    },
    {
        title: 'Important JS Topics',
        img: blog1,
        view: 'https://samiul-sheikh.medium.com/ten-important-javascript-topics-cf724326e70f'
    },
    {
        title: 'JavaScript Tips and Tricks',
        img: blog2,
        view: 'https://samiul-sheikh.medium.com/useful-javascript-tips-and-tricks-e24beb540941'
    }
]

const Blog = () => {
    return (
        <section className="container mt-5">
            <Navbar></Navbar>
            <div className="text-center" style={{ marginTop: '100px' }}>
                <h3>My Blog</h3>
                <h5>Here some of my articles about development</h5>
            </div>
            <div className="row mt-5">
                {
                    blogData.map(blog => <BlogDetail blog={blog}></BlogDetail>)
                }
            </div>
        </section>
    );
};

export default Blog;