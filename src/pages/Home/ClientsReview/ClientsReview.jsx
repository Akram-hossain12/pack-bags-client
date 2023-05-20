import React, { useEffect, useState } from 'react';
import ClientsReviewCard from './ClientsReviewCard';

const ClientsReview = () => {
    const [reviewes, setReviewes] = useState([]);
    console.log(reviewes)

    useEffect(() => {
        fetch("http://localhost:5001/reviewes")
            .then(res => res.json())
            .then(data => {
                setReviewes(data)
            })
    }, [])
    return (
        <div className='mt-20 mb-20 bg-yellow-500 p-10'>
            <h1 className='mb-11 ml-20 text-3xl font-bold '>Happy Clients Review</h1>
            
            <div className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                {
                    reviewes.map(review => <ClientsReviewCard
                        key={review._id}
                        review={review}

                    ></ClientsReviewCard>)
                }
            </div>

        </div>
    );
};

export default ClientsReview;