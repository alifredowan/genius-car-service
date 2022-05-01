import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
   const [services, setServices] = useState([])
   useEffect(() => {
       fetch("services.json")
       .then(res => res.json())
       .then(data => setServices(data))
   }, [])
    return (
        <div>
            <h1 className='text-5xl my-5'>Our Services</h1>
            <div className='grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;