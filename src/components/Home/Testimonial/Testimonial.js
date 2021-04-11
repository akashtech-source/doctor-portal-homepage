import React from 'react';
import Elipse1 from '../../../images/Ellipse 1.png';
import Elipse2 from '../../../images/Ellipse 2.png';
import Elipse3 from '../../../images/Ellipse 3.png';
import PatientReview from './PatientReview';

const Testimonial = () => {
    const testimonial = [
        {
            img: Elipse1,
            name: 'Winson Harrry',
            location: 'California'
        },
        {
            img: Elipse2,
            name: 'Winson Harrry',
            location: 'California'
        },
        {
            img: Elipse3,
            name: 'Winson Harrry',
            location: 'California'
        },
    ]
    return (
        <div className="testimonial-container mt-5 ml-5">
            <div className="ml-5">
            <h5 style={{color: '#2596be'}}>TESTIMONIAL</h5>
            <h1>What Our Patient <br/> Says</h1>
            </div>
            <div className="row pt-5 w-100">
                {
                    testimonial.map(review => <PatientReview review={review}></PatientReview>)
                }
            </div>
        </div>
    );
};

export default Testimonial;