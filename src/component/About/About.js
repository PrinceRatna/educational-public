import React from 'react';
import planImg from '../../images/current.PNG';

const About = () => {
    return (
        <div className="flex flex-wrap justify-around my-12">
            <div className="">
                <h1 className="text-2xl md:text-4xl font-semibold">Teachers List</h1>
                <ul className="m-5 list-inside list-disc">
                    <li className="text-xl md:text-2xl  font-medium">Rabiul Islam</li>
                    <li className="text-xl md:text-2xl  font-medium">Price Ratno</li>
                    <li className="text-xl md:text-2xl  font-medium">Bipro Barai</li>
                    <li className="text-xl md:text-2xl  font-medium">Nayon Bala</li>
                    <li className="text-xl md:text-2xl  font-medium">Nitol </li>
                    <li className="text-xl md:text-2xl  font-medium">Adib </li>
                    <li className="text-xl md:text-2xl  font-medium">Amitav barai</li>
                    <li className="text-xl md:text-2xl  font-medium">Adittya </li>
                </ul>
            </div>
            <div className="text-center ">
              <h1 className="text-2xl md:text-4xl font-semibold">Our Course Plan </h1>
              <div>
             <img className="w-80 md:w-96" src={planImg} alt=''/>
             </div>
            </div>
        </div>
    );
};

export default About;