import React from 'react';
import Header from '../Home/Sheard/Header/Header';
import banner3 from '../../asetss/gallary/photo8.jpg'

const Blogger = () => {
    return (
        <div>
            <Header></Header>
            <div className="carousel w-full mt-20 mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='carousel-img w-full h-[400px] overflow-hidden'>
                        <img src={banner3} alt="" className="" />
                    </div>
                    <div className="absolute text-center transform -translate-y-1/2 left-1/4 top-1/2">
                        <h2 className="text-amber-200 text-5xl font-bold">
                        Enjoy Vacation Blog With Pack Bags Team
                        </h2>
                        <h2 className='mt-12 text-5xl font-bold text-amber-500'> </h2>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Blogger;