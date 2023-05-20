import React, { useEffect, useState } from 'react';
import Header from '../Home/Sheard/Header/Header';
import Bannare from '../Home/Bannere/Bannare';
import PlacesesCard from './PlacesesCard';
import useTitle from '../../hooks/useTitle';


const Places = () => {
    const [places, setPlaces] = useState([]);
    useTitle("Services")

    useEffect(() => {
        fetch("http://localhost:5001/allServices")
            .then(res => res.json())
            .then(data => {
                setPlaces(data)
            })
    }, [])
    return (
        <div>
            <Header></Header>
           
            <div  className='my-20 mx-auto w-[1200px]'>

            <h1 className='text-5xl font-bold mb-12'>Popular Tour Places</h1>

                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        places.map(placess => <PlacesesCard
                            key={placess._id}
                            placess={placess}
                        >

                        </PlacesesCard>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Places;