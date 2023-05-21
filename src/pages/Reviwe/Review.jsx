import React from 'react';
import Header from '../Home/Sheard/Header/Header';
import banner3 from '../../asetss/gallary/photo8.jpg';


const Review = () => {

    const hendalsubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const address = form.address.value;
        const rating = form.rating.value;
        const comment = form.comment.value;
        const profassion =form.profassion.value;
        console.log(name, address, rating, comment)
        const reviewes = {
            name: name,
            address: address,
            rating: rating,
            comment: comment,
            profassion:profassion

        }
        fetch('https://pack-bags-server-akram-hossain12.vercel.app/reviewes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewes)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Thanks for Reviwe')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }
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
                            Are you happy with our service !
                        </h2>
                        <h2 className='mt-12 text-5xl font-bold text-amber-500'>  Please , Review?</h2>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Reviwe , now!</h1>
                        <p className="py-6 text-xl text-green-500">Let's Become a world travelr with our expart team.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={hendalsubmit} className="card-body">
                            <div className='flex'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="full -name" className="input input-bordered" />
                                </div>

                                <div className="form-control ml-4">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input name='address' type="text" placeholder="address" className="input input-bordered" />
                                </div>

                            </div>
                            <div className='flex'>
                                <div className="form-control ml-4">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input name='rating' type="number" placeholder="Rating" className="input input-bordered" />
                                </div>

                                <div className="form-control ml-4">
                                    <label className="label">
                                        <span className="label-text">Profassion</span>
                                    </label>
                                    <input name='profassion' type="text" placeholder="profassion" className="input input-bordered" />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>
                                <textarea name='comment' rows="4" type="text" placeholder="comment" className="input input-bordered " />

                            </div>
                            <div className="form-control mt-4">
                                <button type='submit' className="btn btn-primary">Submit</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;