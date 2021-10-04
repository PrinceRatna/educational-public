import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const[details,setDetails]=useState([]);
    useEffect(()=>{
        fetch('./service1.json')
        .then(res=>res.json())
        .then(data=>setDetails(data));
    },[])
    return (
        <div className="text-center">
        <div className="grid grid-cols-3 gap-4 my-10 ">
        {
            details.map(detail=><Service key={detail.id} detail={detail}></Service>)
        }
        </div>
        </div>
    );
};

export default Services;