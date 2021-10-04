import React from 'react';

const ServiceHome = (props) => {
    const {id,title,thumbnailUrl}=props.service;
    return (
        <div className="">
            <h1 className="font-bold text-4xl inline block">{id}.</h1>
            <h2 className="font-semibold text-4xl mb-5 inline-block" >{title}</h2>
            <img className="w-96 h-80" src={thumbnailUrl} alt=""></img>
            
        </div>
    );
};

export default ServiceHome;