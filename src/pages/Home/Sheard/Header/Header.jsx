import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-[1200px] bg-black'>
            <div className="navbar text-white fixed z-50 top-0">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-3xl">PACK BAGS .traveler</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        <li><Link to='/'>Home</Link></li>
                        <li> <Link to='/places'>Places</Link></li>
                        <li><Link>About us</Link></li>
                        <li><Link>Contact</Link></li>
                        <li><Link>Gallery</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;