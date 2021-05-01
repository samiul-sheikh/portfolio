import React from 'react';

const BlogDetail = ({ blog }) => {

    const { img, title } = blog;

    return (
        <div className="col-md-4 text-center px-3 py-3">
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" style={{ height: '200px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <button type="button" className="btn btn-info">view article</button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;