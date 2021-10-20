import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import BtnWithBg from '../../../../components/Buttons/BtnWithBg';
import useServices from '../../../../hooks/useServices';

const Details = () => {
    const { serviceId } = useParams();
    const services = useServices();
    const selectedService = services.find(service => service.id == serviceId);

    const { title, img, description, doctor, serviceTime, bookingMobile, address } = selectedService || {};
    return (
        <div className="mt-8">
            <div className="md:w-1/4 sm:w-2/4 w-3/4 mx-auto text-center">
                <h2 className="text-gray-800 px-4 py-1 border-b-4 border-blue-700 inline-block lg:text-3xl md:text-2xl text-xl font-medium">Service Details</h2>
            </div>
            <div className="w-11/12 mx-auto grid md:grid-cols-2 sm:grid-cols-1 gap-6 py-12">
                <div className=" md:order-first order-last">
                    <h2 className=" inline-block text-3xl text-custom-color font-semibold pb-2 border-b-4 border-red-500 mb-4">{title}</h2>
                    <p className="font-medium text-custom-color">{description}</p>
                    <div className=" md:w-3/5 w-4/5 md:mx-1 mx-auto">
                        <p className="font-medium text-center text-2xl border-b-2 border-blue-700 my-3 mt-8"><i class="fas fa-user-md text-xl text-indigo-600"></i> Doctor </p>
                        <p className="md:pl-2 font-medium block"> <img src="https://thumbs.dreamstime.com/b/flat-icon-doctor-design-illustration-avatar-holding-clipboard-47170977.jpg" className="md:w-20 w-12 inline" alt="" /> {doctor?.name}, <small>{doctor?.role}</small></p>
                    </div>
                    <div className="md:mt-8 mt-6 space-y-4">
                        <p className="font-medium md:text-lg text-base my-3"><i class="far fa-clock text-yellow-600 md:text-xl text-lg"></i> Everyday {serviceTime}</p>
                        <p className="font-medium md:text-lg text-base my-3"><i class="fas fa-phone-alt md:text-xl text-lg text-green-600"></i> {bookingMobile}</p>
                        <p className="font-medium md:text-lg text-base my-3"><i class="fas fa-map-marker-alt md:text-xl text-lg text-green-600"></i> {address}</p>
                    </div>
                </div>
                <div className="md:mx-1 sm:mx-auto">
                    <img src={img} alt="" className="border rounded-xl" />
                </div>
            </div>
            <NavLink to="/appointment" className="text-center block pb-8"><BtnWithBg>Book an Appointment</BtnWithBg></NavLink>
        </div>
    );
};

export default Details;