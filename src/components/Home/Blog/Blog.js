import React from 'react';
import DrCaudi from '../../../images/Ellipse 1.png';
import DrJohn from '../../../images/Ellipse 2.png';
import Article from './Article';
const Blog = () => {
    const articles = [
        
        {
            img: DrCaudi,
            name: 'Dr. Caudi',
            date: '23 Apr 2021',
            title: '2 times brush in a day keeps you healthy',
            
        },
        {
            img: DrJohn,
            name: 'Dr. John Mitchel',
            date: '23 Apr 2021',
            title: '2 times brush in a day keeps you healthy',
            
        }
    ]

    return (
        <div style={{height: '500px'}}>
            <div  className="text-center mt-5">
                <h5 style={{color: 'lime'}}>OUR BLOG</h5>
                <h1 className="mt-5">From Our Blog News</h1>
            </div>
            <div style={{backgroundColor: 'cyan', borderRadius: '5px', width: '350px', height: '350px', marginTop: '60px', marginLeft: '100px', padding: '20px'}}
            className="text-white">
                <h6>Rashed Kabir</h6>
                <p>22 Aug 2020</p>
                <br/>
                <h5 className="mt-5">Check at least a doctor in a <br/> year for your teeth</h5>
            </div>
            <div className="row ml-5">
            {
                articles.map(article => <Article article={article}></Article>)
            }
            </div>
        </div>
    );
};

export default Blog;