import React from 'react';

const Event = () => {
    return (
        <div className=" mx-auto my-16">
            <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-semibold mb-12">Our  Online Events </h1>
           </div>
        
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-5 w-5/6 mx-auto ">
             <iframe max-width="350" max-height="250" src="https://www.youtube.com/embed/O_baUve-kB8" title='physics' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <iframe max-width="350" max-height="250" src="https://www.youtube.com/embed/zY38SV2BW7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <iframe max-width="350" max-height="250" src="https://www.youtube.com/embed/LqAW_mnPSlI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <iframe max-width="350" max-height="250" src="https://www.youtube.com/embed/HQSfLNnzpRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
    
    );
};

export default Event;