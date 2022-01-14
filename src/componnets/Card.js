import React from 'react';

const Card = (props) => {
    // console.log(props);
    const {data} = props;
    return (
        <div className='card'>
            <div className="icon">
               <div className="circle">
                <i class={data.icon}></i>
              </div>
            </div>
            <div className="card-content">
                <h1>{data.title}</h1>
                <p>{data.content}</p>
            </div>
        </div>
    );
};

export default Card;