import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div className='my-20 mx-auto w-[1200px]'>
              <h1 className='text-5xl font-bold mb-12'>Popular Tour Places</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    >

                    </ServicesCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;