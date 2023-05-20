import React from 'react';
import Header from '../Sheard/Header/Header';

const ContactUs = () => {
    return (
        <div className='mb-10 mt-20'>
            <Header></Header>
            <h1 className='text-3xl font-bold ml-20 mb-20'>Question?</h1>
            <div className='mb-10 grid grid-cols-3 gap-6'>
                <div className='flex justify-center items-center'>
                    <div className='p-4 border-2 border-green-600 rounded-full hover:bg-green-300 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                    </div>
                    <div className='ml-4'>
                        <h1 className='text-2xl font-bold'>Our Office:</h1>
                        <p>Sadar Lakshmipur,Lakshmipur</p>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='p-4 border-2 border-green-600 rounded-full hover:bg-green-300 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>

                    </div>
                    <div className='ml-4'>
                        <h1 className='text-2xl font-bold'>Contact Number:</h1>
                        <p>+88017265442</p>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='p-4 border-2 border-green-600 rounded-full hover:bg-green-300 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>

                    </div>
                    <div className='ml-4'>
                        <h1 className='text-2xl font-semibold'>Email Us:</h1>
                        <p>Sadar12@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="hero">
                <div className="hero-content flex-col">

                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className='flex'>
                                <div className="form-control">

                                    <input name='name' type="text" placeholder="full -name" className="input input-bordered" />
                                </div>

                                <div className="form-control ml-4">

                                    <input name='email' type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control ml-4">

                                    <input name='subject' type="text" placeholder="subject" className="input input-bordered" />
                                </div>

                            </div>

                            <div className="form-control mt-5">

                                <textarea name='comment' rows="4" type="text" placeholder="comment" className="input input-bordered " />

                            </div>
                            <div className="form-control mt-4">
                                <button type='submit' className="btn btn-primary">Massege</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default ContactUs;