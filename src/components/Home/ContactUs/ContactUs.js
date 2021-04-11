import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-container text-center">
            <div className="text">
            <h5>CONTACT US</h5>
            <h1>Always Connect With Us</h1>
            </div>
            <form className="form-container" action="">
                <input className="form-control name" type="text" name="" id="" placeholder="name"/>
                <br/>
                <input className="form-control email"  type="text" name="" id="" placeholder="email"/>
                <br/>
                <input className="form-control message"  type="text" name="" id="" placeholder="message"/>
                <br/>
                <input className="btn btn-primary submit-button" type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default ContactUs;