import React from 'react';
import blog0 from '../../../src/Images/blog-0.png';
import blog1 from '../../../src/Images/blog-1.png';
import blog2 from '../../../src/Images/blog-2.png';
import BlogDetail from '../BlogDetail/BlogDetail';

const blogData = [
    {
        title: 'Become a Developer',
        img: blog0
    },
    {
        title: 'New Developer',
        img: blog1
    },
    {
        title: 'MERN Developer',
        img: blog2
    }
]

const Blog = () => {
    return (
        <section className="container mt-5">
            <div className="text-center">
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