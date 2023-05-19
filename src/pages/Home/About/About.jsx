import React from 'react';
import photo from '../../../asetss/istockphoto-1434742171-170667a.jpg'


const About = () => {
    return (
        <div className='mb-20'>

            <h1 className='text-center text-5xl font-bold mb-8'>Who we are?</h1>
            <div className="card card-side w-[1000px] mx-auto bg-stone-300 shadow-xl">
                <figure><img className='ml-12 rounded-md' src={photo} alt="Movie" /></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title">We Are Travel Experts</h2>
                     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;