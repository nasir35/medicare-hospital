import React from 'react';
import { NavLink } from 'react-router-dom';
import BorderBtn from '../../../components/Buttons/BorderBtn';
import BtnWithBg from '../../../components/Buttons/BtnWithBg';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner text-center flex flex-col items-center justify-center">
            <div className="banner-content m-2 lg:p-8 md:p-6 sm:p-4 p-3">
            <h1 className="md:text-4xl lg:pt-20 text-xl font-medium text-gray-800 md:py-6 sm:py-3 py-2">Welcome to Medicare Hospital!</h1>
            <p className="md:text-xl sm:text-base text-sm text-gray-600 lg:px-20 sm:p-8 p-4 md:pb-20 sm:pb-12 pb-8">We are here to serve you, to take care of your health. Be aware of your health, because it's the main source of happiness! Eat Healthy and Be Fit!</p>
            <div className="pb-6">
                <NavLink to="home" className="pr-3"><BorderBtn>Our Services</BorderBtn></NavLink>
                <NavLink to="team"><BtnWithBg>About US</BtnWithBg></NavLink>
            </div>
            </div>
        </div>
    );
};

export default Banner;