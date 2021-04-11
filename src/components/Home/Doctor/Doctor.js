import React from 'react';
import doctor from '../../../images/5790-removebg.png';
import DoctorDetails from './DoctorDetails';

const Doctor = () => {
    const doctors = [
        {
            img: doctor,
            name: 'Dr Caudi',
            phone: '+12662525'
        },
        {
            img: doctor,
            name: 'Dr Caudi',
            phone: '+12662525'
        },
        {
            img: doctor,
            name: 'Dr Caudi',
            phone: '+12662525'
        },
    ]
    return (
        <div style={{height: '500px',
        marginTop: '100px',
         }} className="row">
            <div style={{color: 'lime', position: 'relative', left: '650px'}}>
                <h4>Our Doctors</h4>
            </div>
            {
                doctors.map(doctor => <DoctorDetails doctor={doctor}></DoctorDetails>)
            }
        </div>
    );
};

export default Doctor;