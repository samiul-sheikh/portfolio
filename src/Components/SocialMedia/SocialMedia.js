import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
    return (
        <div className="mt-5 text-center" style={{ background: '#495057' }}>
            <div className="fa-4x">
                <a href="https://github.com/samiul-sheikh" target="_blank">
                    <button className="btn btn-primary mr-3"><FontAwesomeIcon icon={faGithub} /></button>
                </a>
                <a href="https://www.linkedin.com/in/samiul-sheikh/" target="_blank">
                    <button className="btn btn-primary mr-3"><FontAwesomeIcon icon={faLinkedinIn} /></button>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100060598363389" target="_blank">
                    <button className="btn btn-primary mr-3"><FontAwesomeIcon icon={faFacebook} /></button>
                </a>
                <a href="https://twitter.com/SamiulWeb" target="_blank">
                    <button className="btn btn-primary mr-3"><FontAwesomeIcon icon={faTwitter} /></button>
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;