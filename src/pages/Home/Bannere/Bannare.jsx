import React from 'react';
import banner from '../../../asetss/Banner/thailandguide.jpg';
import './banner.css'

const Bannare = () => {
    return (
        <div>
            <div className="carousel w-full mt-8">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='carousel-img'>
                        <img src={banner} alt="" className="w-full" />
                    </div>
                    <div className="absolute text-center transform -translate-y-1/2 left-1/4 top-1/2">
                        <h2 className="text-white text-5xl font-bold">
                        Enjoy Vacation With <span className='text-yellow-500'>Pack Bags.  Traveler</span>
                        </h2>
                        <p  className=" text-xl mt-5 text-cyan-200">Travel to the any corner of the world, without going around in circles.</p>
                        <button className='btn btn-secondary btn-outline mt-5 text-xl font-bold'>Book a Tour</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Bannare;