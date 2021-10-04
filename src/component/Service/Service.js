import React from 'react';

const Service = (props) => {
    const{title,url,price}=props.detail;
    return (
        <div className=" mx-auto rounded">
            <img className="w-96 h-72" src={url} alt=''/>
            <h1 className="text-lg md:text-2xl font-semibold">{title}</h1>
            <h1 className="text-lg md:text-2xl font-semibold">Price: ${price}</h1>

        </div>
    );
};

export default Service;