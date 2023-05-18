import React from 'react';

const ServicesCard = ({ service }) => {
    const { title, picture, details, place,price } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img className='h-60 w-80' src={picture} alt=""/></figure> 
                <div className="card-body">
                    <h2 className="card-title">
                      {title}
                    </h2>
                    <p>{place}</p>
                    <p className='text-yellow-400 text-xl font-bold'>{price}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;