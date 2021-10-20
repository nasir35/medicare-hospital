import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-gray-900 p-4">
            <div className="w-5/6 mx-auto grid md:grid-cols-3 sm:grid-cols-2 text-white lg:gap-10 gap-6 gap-y-2 mb-5 pb-4 border-b-2 border-white">
                <div>
                    <h2 className="lg:text-2xl text-xl">&#10063; Medicare Hospital</h2>
                    <p className="mb-6 text-gray-300 pl-5">Medicare Hospital is for ensuring the health care of you. We have specialist of various kind of disease. Come and take service.</p>
                </div>
                <div>
                    <h2 className="lg:text-2xl text-xl">&#10063; Useful links</h2>
                    <NavLink to="services">&emsp;&#128279; Our Services</NavLink><br />
                    <NavLink to="blogs">&emsp;&#128279; Blogs</NavLink><br />
                    <NavLink to="about">&emsp;&#128279; About Us</NavLink><br />
                </div>
                <div className="md:col-span-1 sm:col-span-2 sm:text-center text-left md:block sm:flex gap-x-4 items-center">
                    <h2 className="lg:text-2xl text-xl pb-2">&#10063; Connect With Us <span className="md:hidden inline-block">:</span></h2>
                    <div className="">
                    <a href="#" target="_blank" className="mr-4 text-2xl sm:text-xl font-medium"><i className="fab fa-youtube text-red-700 bg-gradient-to-r from-white to-blue-300 hover:from-blue-300 hover:to-white transition px-3 py-1 rounded"></i></a>
                    <a href="#" target="_blank" className="mr-4 text-2xl sm:text-xl font-medium"><i className="fab fa-facebook text-blue-700 bg-gradient-to-r from-white to-blue-300 hover:from-blue-300 hover:to-white transition px-3 py-1 rounded"></i></a>
                    {/* <a href="#" target="_blank" className="mr-4 text-2xl font-medium"><i className="fab fa-twitter text-green-500 bg-gradient-to-r from-white to-blue-300 hover:from-blue-300 hover:to-white transition px-3 py-1 rounded"></i></a> */}
                    <a href="#" target="_blank" className="text-2xl sm:text-xl font-medium"><i className="fab fa-instagram text-pink-500 bg-gradient-to-r from-white to-blue-300 hover:from-blue-300 hover:to-white transition px-3 py-1 rounded"></i></a>
                    </div>

                </div>
            </div>
            <div>
                <p className="text-center text-white"><span className="text-xl">&copy;</span> 2021 <a href="https://www.facebook.com/muhammadnasir358" target="_blank" className=" text-gray-400 font-semibold border-b border-gray-300">Designed by - Nasir</a> | All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;