import React, { useEffect, useState } from 'react';
import baner from '../../images/6663.jpg';
import ServiceHome from '../ServiceHome/ServiceHome';

const Home = () => {
    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./service2.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div>
            
        <div className='mb-32 flex flex-col justify-center justify-items-center '>
             <div className=" w-full mb-24"><img src={baner} alt=" "/></div>
             <h1 className="text-center font-semibold text-5xl mb-10">Our Services</h1>
            <div className="grid grid-cols-2 gap-6 w-11/12 mx-auto ">
                {
                services.map(service=><ServiceHome key={service.id} service={service}></ServiceHome>)
                }
            </div>
           
        </div>
        </div>
    );
};

export default Home;