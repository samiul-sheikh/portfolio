import React from 'react';

const BlogDetail = ({ blog }) => {

    const { img, title, view } = blog;

    return (
        <div className="col-md-4 text-center py-3">
            <div className="card">
                <img src={img} className="card-img-top" style={{ height: '200px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a href={view} target="_blank">
                        <button type="button" className="btn btn-info">View Article</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;