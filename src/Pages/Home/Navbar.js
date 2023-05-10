import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdLogIn } from 'react-icons/io';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/login');
    }
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60">
                                <div className="form-control">
                                    <input type="text" placeholder="Search" className="input input-bordered" />
                                </div>
                            </ul>
                        </div>
                        <Link className="btn btn-ghost normal-case text-xl">Dobby Ads</Link>
                    </div>

                    <div className="navbar-end">
                        <ul className="menu menu-horizontal px-1 gap-1">
                            <div className="form-control hidden md:flex">
                                <input type="text" placeholder="Search" className="input input-bordered" />
                            </div>
                            {
                                user ?
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt='user' />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-24">
                                            <li><Link onClick={handleLogout}>Logout</Link></li>
                                        </ul>
                                    </div>
                                    :
                                    <li><Link className='text-2xl' to='/login'><IoMdLogIn></IoMdLogIn></Link></li>
                            }
                        </ul>
                    </div>
                </div>

            </div>


        </>
    );
};

export default Navbar;