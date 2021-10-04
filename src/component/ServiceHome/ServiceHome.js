import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceHome = (props) => {
    const {id,title,thumbnailUrl,price}=props.service;
    return (
        <div className="">
            <h1 className="font-bold text-4xl inline block">{id}.</h1>
            <h2 className="font-semibold text-4xl mb-5 inline-block" >{title}</h2>
            <img className="w-96 h-80" src={thumbnailUrl} alt=""></img>
            <p className="font-semibold text-2xl my-3">Price:$ {price}</p>
            
        </div>
    );
};

export default ServiceHome;