import React from 'react';
import './ProjectDetail.css';
import sheikhHome from '../../../Images/sheikh-home.PNG';
import fashionHome from '../../../Images/fashion-home.PNG';
import sportsHome from '../../../Images/sports-home.PNG';

const ProjectDetail = () => {

    return (
        <div className="mt-5">
            <div className="mt-5">
                <div className="row d-flex align-items-center" style={{ border: '1px solid red' }}>
                    <div className="col-md-4">
                        <img className="img-fluid" src={sheikhHome} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>Sheikh</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt suscipit quas sequi harum laborum illum iusto cupiditate sint perspiciatis ut?</p>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="row d-flex align-items-center" style={{ border: '1px solid red' }}>
                    <div className="col-md-4">
                        <img className="img-fluid" src={fashionHome} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>Hello</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt suscipit quas sequi harum laborum illum iusto cupiditate sint perspiciatis ut?</p>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="row d-flex align-items-center" style={{ border: '1px solid red' }}>
                    <div className="col-md-4">
                        <img className="img-fluid" src={sportsHome} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>Hello</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt suscipit quas sequi harum laborum illum iusto cupiditate sint perspiciatis ut?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;