import React from 'react';
import featurePhoto from '../../../images/Mask Group 3.png'

const Feature = () => {
    return (
        <div className="row" style={{marginTop: '100px'}}>
            <div className="col-md-4">
            <img style={{width: '100%', marginLeft: '150px'}} src={featurePhoto} alt=""/>
            </div>
            <div className="col-md-6" style={{marginLeft: '150px', marginTop: '100px', width: '50px'}}>
                <h1 className="mt-5">Exceptional Dental <br/> Care, on Your Terms </h1>
                <p className="mt-5 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ullam <br/> molestiae tempora animi, quibusdam deserunt cum perferendis consequuntur quos <br/> esse aperiam nesciunt ad dicta, numquam molestias officiis sequi impedit voluptatem.

                </p>
                <button className="btn btn-primary mt-5">Learn More</button>
            </div>
        </div>
    );
};

export default Feature;