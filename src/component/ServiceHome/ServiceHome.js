import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceHome = (props) => {
    const {id,title,thumbnailUrl,price}=props.service;
    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl md:text-4xl inline block text-green-600">{id}.</h1>
            <h2 className="font-semibold text-2xl md:text-4xl mb-5 inline-block text-green-600" >{title}</h2>
            <img className="w-96 h-80" src={thumbnailUrl} alt=""></img>
            <p className="font-semibold text-xl md:text-2xl my-3 text-green-700">Price:$ {price}</p>
            
        </div>
    );
};

export default ServiceHome;