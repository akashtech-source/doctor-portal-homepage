import React from 'react';

const PatientReview = ({review}) => {
    return (
        <div style={{
            position: 'relative',
             left: '120px', 
             boxShadow: '1px 1px 5px lightGray',
             borderRadius: '5px',
             padding: '10px',
             marginRight: '50px',
             height: '370px'

            }
            } className="col-md-3">
            <p style={{marginBottom: '50px', padding: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis praesentium suscipit officiis sint voluptate eligendi ipsam est minima obcaecati, voluptates dolorem iusto velit. Totam amet iure praesentium? Dolor, earum facilis?</p>
            <div style={{float: 'left', marginLeft: '20px'}}>
            <img  src={review.img} alt=""/>
            </div>
            <div style={{position: 'relative', left: '20px', top: '10px'}}>
            <h5 style={{color: '#2596be'}}>{review.name}</h5>
            <h6>{review.location}</h6>
            </div>
        </div>
    );
};

export default PatientReview;