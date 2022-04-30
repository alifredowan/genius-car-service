import React from 'react';

const Service = ({service}) => {
    const {name, price, description, img} = service;
    return (
        <div className='rounded-md border-solid border-2 border-gray-100  hover:border-dotted py-2 text-center'>
            <img className='w-full' src={img} alt=''/>
            <h1>name: {name}</h1>
            <h5>Price: {price}</h5>
            <p>{description}</p>
            <button>BOOK : {name}</button>
        </div>
    );
};

export default Service;