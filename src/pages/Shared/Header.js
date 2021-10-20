import React, { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    const location = useLocation();

    const btn = useRef();
    const menu = useRef();
    const handleMenu = () => {
        menu.current.classList.toggle('hidden');
        menu.current.classList.add('flex', 'flex-col')
    }

    return (
        <div className="bg-gray-200 sticky top-0 shadow z-50 py-1">
            <div className="lg:w-5/6 md:w-11/12 w-5/6 grid grid-cols-3 mx-auto items-center">
                <NavLink to="/home"><img src="https://i.ibb.co/WsLCP8y/Logo.png" alt="" className="lg:w-2/5 md:w-3/6" /></NavLink>
                <i onClick={handleMenu} ref={btn} className="fas fa-bars md:hidden col-span-2 sm:text-3xl text-2xl text-right"></i>
                <nav ref ={menu} className="hidden menu md:col-span-2 col-span-3 md:flex md:flex-row items-center justify-end">
                    <NavLink to="/home" activeClassName="text-red-600 border-b-2 border-red-600" className={`lg:px-2.5 px-2 hover:text-red-600 md:text-sm lg:text-base font-medium ${location.pathname === '/' ? 'text-red-600 border-b-2 border-red-600' : ''} lg:uppercase capitalize`}>Home</NavLink>
                    <NavLink to="/team" activeClassName="text-red-600 border-b-2 border-red-600" className={`lg:px-2.5 px-2 hover:text-red-600 md:text-sm lg:text-base font-medium ${location.pathname === '/team' ? 'text-red-600 border-b-2 border-red-600' : ''} lg:uppercase capitalize`}>Our Team</NavLink>
                    <NavLink to = "/appointment" activeClassName="text-red-600 border-b-2 border-red-600" className="lg:px-2.5 px-2 lg:text-base text-sm hover:text-red-600 font-medium lg:uppercase capitalize">AppointMent</NavLink>
                    {user?.email ? <span className="md:inline flex flex-col">
                        <img src={user.photoURL} alt="" className="lg:w-8 md:w-7 w-12 mx-auto rounded-xl md:inline-block block md:ml-3" />
                        <h5 className="md:inline-block block px-1 md:text-sm lg:text-base font-medium">{user?.displayName?.slice(0,15)}</h5>
                        <button className="md:inline-block text-green-600 block font-medium lg:mx-0.5 px-2 hover:text-red-600 md:text-sm lg:text-base border rounded-lg shadow-inner border-gray-600" onClick={logOut}><i class="fas fa-sign-out-alt"></i></button>
                    </span> :
                    <span className="md:inline text-center flex flex-col">
                        <NavLink to="/login" activeClassName="text-red-600 border-b-2 border-red-600" className="lg:uppercase capitalize font-medium md:text-sm lg:text-base lg:px-2.5 px-2 hover:text-red-600">Login</NavLink>
                        <NavLink to="/register" activeClassName="text-red-600 border-b-2 border-red-600" className="lg:uppercase capitalize font-medium md:text-sm lg:text-base lg:px-2.5 px-2 hover:text-red-600">Register</NavLink>
                    </span>}
                </nav>
            </div>
        </div>
    );
};

export default Header;