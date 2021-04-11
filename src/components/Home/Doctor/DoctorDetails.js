import React from 'react';

const DoctorDetails = ({doctor}) => {
    return (
        <div className="col-md-3 mt-5">
            <div >
                <img style={{width: '130%'}} src={doctor.img} alt=""/>
            </div>
            <div style={{marginTop: '20px', position: 'relative', left: '20px'}} className="text-center ml-5 text-secondary">
                <h5>{doctor.name}</h5>
                <p>{doctor.phone}</p>
            </div>
        </div>
    );
};

export default DoctorDetails;