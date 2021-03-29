import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <h6>Contact Us</h6>
                        </div>
                        <div className="col-4">
                            <h6><a href="AboutUs">About Us</a></h6>
                        </div>
                        <div className="col-4">
                            <h6>Copyright</h6>
                        </div>

                    </div>
                    <div className="footer-bootom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()}, Examgenics.com | All Right Reserved
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

