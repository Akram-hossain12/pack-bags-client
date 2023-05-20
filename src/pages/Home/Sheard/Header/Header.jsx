import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';


const Header = () => {
    const { user, logoutAuth } = useContext(AuthContext)
    const hendalLogout = () => {
        logoutAuth()
            .then()
            .catch()
    }
    return (
        <div className=''>
            <div className="navbar bg-black text-white fixed z-10 top-0">
                <div className='w-[1200px] mx-auto'>
                    <div className="flex-1">
                        <Link to='/' className="btn btn-ghost normal-case text-3xl">PACK BAGS .traveler</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 text-xl">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About us</Link></li>
                            <li><Link>Contact</Link></li>
                            {
                                user?.email ?
                                    <>
                                        <li> <Link to='/places'>Places</Link></li>
                                        <li><Link to='/gallary'>Gallery</Link></li>
                                        <li><Link to='/reviwe'>Review</Link></li>
                                        <li><button onClick={hendalLogout}>Log Out</button></li>
                                    </>
                                    :
                                    <>
                                        <li><Link to="/login">Login</Link></li>

                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;