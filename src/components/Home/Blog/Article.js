import React from 'react';

const Article = ({article}) => {
    return (
        <div style={{ width: '350px',
        height: '350px',
        marginRight: '20px',
        position: 'relative',
        left: '450px',
        top: '-350px',
        boxShadow: '1px 1px 5px lightGray',
        boderRadius: '10px',
        padding: '20px'
        }}>
            <div className="d-flex ">
           <div>
                <img src={article.img} alt=""/>
           </div>
           <div className="ml-5">
               <h6>{article.name}</h6>
               <p>{article.date}</p>
           </div>

        </div>
        <div className="mt-5">
        <h5>{article.title}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ut, voluptatibus doloremque. Consectetur illo ex deserunt 
            saepe vero impedit natus eum.</p>
        </div>
        </div>
    );
};

export default Article;