import React from 'react';

const PortfolioDetails = ({ portfolio }) => {

    const { title, img, technology, live, github, feature1, feature2, feature3, feature4, feature5 } = portfolio;

    return (
        <div className="">
            <div className="mt-5">
                <div className="row d-flex align-items-center individual-project">
                    <div className="col-md-4">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-md-8">
                        <h2>{title}</h2>
                        <h6>Technology used:</h6>
                        <p>{technology}</p>
                        <h6>Features:</h6>
                        <ul>
                            <li>{feature1}</li>
                            <li>{feature2}</li>
                            <li>{feature3}</li>
                            <li>{feature4}</li>
                            <li>{feature5}</li>
                        </ul>
                        <div>
                            <a href={live} target="_blank">
                                <button type="button" className="btn btn-info mr-5">Live Site</button>
                            </a>
                            <a href={github} target="_blank">
                                <button type="button" className="btn btn-info">Github</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetails;