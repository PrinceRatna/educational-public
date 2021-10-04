import React from 'react';

const Event = () => {
    return (
        <div className="text-center my-16">
            <h1 className="text-4xl font-semibold mb-12">Our  Online Events </h1>

        <div className="grid grid-cols-2 gap-5 w-5/6 mx-auto ">
             <iframe width="560" height="315" src="https://www.youtube.com/embed/O_baUve-kB8" title='physics' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/zY38SV2BW7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/LqAW_mnPSlI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/HQSfLNnzpRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
    );
};

export default Event;