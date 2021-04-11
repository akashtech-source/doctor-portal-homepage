import React from 'react';
import removeBg from '../../../images/5790-removebg.png';
const Appointment = () => {
    return (
        <div style={{height: '380px', width: '1200px', position: 'relative', left: '100px', marginTop: '220px'}} className="row appointment-container bg-secondary">
            <div className="col-md-6">
                <img style={{width: '100%', marginTop: '-190px'}} src={removeBg} alt=""/>
            </div>
            <div className="col-md-6 mt-2 pt-5">
                <h5 style={{color: '#6acece'}}>APOINTMENT</h5>
                <br/>
                <h1 className="text-white">Make anappointment <br/> Today</h1>
                <br/>
                <h6  className="text-white">It is a long established fact that a reader will be distracted by the readable <br/> content of a page when looking at its </h6>
                <br/>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
    );
};

export default Appointment;