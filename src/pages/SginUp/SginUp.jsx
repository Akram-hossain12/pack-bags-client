import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Home/Sheard/Header/Header';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SginUp = () => {
      const {sginupAuth}=useContext(AuthContext)
      const location = useLocation()
      const navigate =useNavigate()
      useTitle('SginUp')

      const from = location.state?.from?.pathname || '/';
    const handelSginup=(event)=>{
        event.preventDefault()
        const form =event.target;
        const email = form.email.value;
        const password=form.password.value;
        console.log(email,password)
        form.reset()
        sginupAuth(email,password)
        .then(result => {
            const user = result.user;
            alert('Sgin up Successfully')
            console.log(user);
            navigate(from, { replace: true });
            
        })
        .catch(err => console.error(err));
    }

    
    return (
        <div className=''>
        <Header></Header>
        <div className="hero min-h-screen bg-base-200 mt-16">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6 text-xl text-green-500">Let's Become a world travelr with our expart team.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSginup} className="card-body">
                        
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input  name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input  name='address' type="text" placeholder="address" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input  name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p>Have an Account? <Link to='/login' className="label-text-alt link link-hover text-indigo-400 text-xl">Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Sgin Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
    );
};

export default SginUp;