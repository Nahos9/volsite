import React, { useState } from 'react';
import Card from './Card';
import { InfoData } from '../data/info';

const Cards = () => {
    const [info,setInfo] = useState(InfoData);
    // const data = setInfo(info);
    // console.log(info);
    return (
        <div className='cards'>
            {info.map((data) =>(
               <Card data={data} key={data.id} />
               ))}
        </div>
    );
};

export default Cards;