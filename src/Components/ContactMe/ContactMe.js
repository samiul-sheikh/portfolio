import React from 'react';
import Navbar from '../ReUse/Navbar/Navbar';
import SocialMedia from '../ReUse/SocialMedia/SocialMedia';

const ContactMe = () => {
    return (
        <div className="container mt-5">
            <Navbar></Navbar>
            <div className="text-center"  style={{marginTop: '100px'}}>
                <h3>Contact Me</h3>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="https://formspree.io/f/xzbydgoq" method="POST">
                    <div className="form-group">
                        <h6>Your Name</h6>
                        <input type="text" className="form-control" name="name" />
                    </div>
                    <div className="form-group">
                        <h6>Your Email</h6>
                        <input type="email" className="form-control" name="email" />
                    </div>
                    <div className="form-group">
                        <h6>Your Message</h6>
                        <textarea type="text" className="form-control" name="message" rows="10" col="30"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-info">Submit</button>
                    </div>
                </form>
            </div>
            <SocialMedia></SocialMedia>
        </div>
    );
};

export default ContactMe;