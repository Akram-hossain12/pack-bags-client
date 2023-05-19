import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesCard = ({ service }) => {
    const { title, picture, details, place, price } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img className='h-60 w-80 mx-auto' src={picture} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p>{place}</p>
                    <p className='text-yellow-400 text-xl font-bold'>{price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;