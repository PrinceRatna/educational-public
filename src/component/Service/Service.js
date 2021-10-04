import React from 'react';

const Service = (props) => {
    const{title,url}=props.detail;
    return (
        <div>
            <img className="w-96 h-72" src={url} alt=''/>
            <h1 className="text-2xl font-semibold">{title}</h1>

        </div>
    );
};

export default Service;