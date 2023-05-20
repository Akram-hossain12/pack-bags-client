import React, { useContext } from 'react';
import Header from '../Home/Sheard/Header/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

import { ReactComponent as GoogleSvg  }from '../../asetss/icons8-google.svg'
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { loginAuth,googleAuth } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    useTitle("Login")

    const from = location.state?.from?.pathname || '/';
    const handelLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        form.reset()
        loginAuth(email, password)
            .then(result => {
                const user = result.user;
                alert('Log in Successfully')
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(err => console.error(err));
    }
    const handelGoogleAuth =()=>{
        googleAuth().then(result=>{const user=result.user;console.log(user);navigate(from,{replace:true})}).catch(err=>console.error(err))
    }
    return (
        <div >
            <Header></Header>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 text-xl text-green-500">Let's Become a world travelr with our expart team.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <p>Don't have an Account?   <Link to='/sginup' className="label-text-alt link link-hover text-indigo-400 text-xl">Sgin-Up</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-4">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='text-center pb-3'>
                            <h3>Another away to LogIn!</h3>
                           <button onClick={handelGoogleAuth} className=' text-blue-600 mt-5 p-2 rounded-full bg-stone-300 '> <GoogleSvg></GoogleSvg></button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;