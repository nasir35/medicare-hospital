import React from 'react';
import { Link } from 'react-router-dom';
import BorderBtn from '../../../../components/Buttons/BorderBtn';
import BtnWithBg from '../../../../components/Buttons/BtnWithBg';

const Service = ({ service }) => {
    const { id, title, img, description, doctor } = service;
    const { name, role } = doctor;
    return (
        <div className="p-3 border border-gray-300 shadow-inner rounded-xl space-y-3">
            <div className="text-center mx-auto flex justify-center">
            <img src={img} alt="" className="rounded-xl col-span-2" />
            </div>
            <div className="col-span-3">
                <h2 className="text-2xl font-medium text-blue-700 text-center">{title}</h2>
                <small className="text-justify md:block hidden">{description}</small>
                <p className="text-base font-medium text-center sm:my-3">Doctor : {name}, <span><small>{role}</small></span></p>
                <div className="flex justify-around pt-2 gap-y-2">
                    <BtnWithBg>Book Now</BtnWithBg>
                    <Link to={`/services/${id}`}><BorderBtn>See Details</BorderBtn></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;