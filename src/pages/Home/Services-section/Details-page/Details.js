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
    console.log(selectedService);
    return (
        <div className="mt-8">
            <div className="w-1/4 mx-auto text-center">
                <h2 className="text-gray-800 px-4 py-1 border-b-4 border-blue-700 inline-block text-3xl font-medium">Service Details</h2>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-2 gap-6 py-12">
                <div>
                    <h2 className=" inline-block text-3xl text-custom-color font-semibold pb-2 border-b-4 border-red-500 mb-4">{title}</h2>
                    <p className="font-medium text-custom-color">{description}</p>
                    <div className=" w-3/5">
                        <p className="font-medium text-center text-2xl border-b-2 border-blue-700 my-3 mt-8"><i class="fas fa-user-md text-xl text-indigo-600"></i> Doctor </p>
                        <p className="pl-2 font-medium block"> <img src="https://thumbs.dreamstime.com/b/flat-icon-doctor-design-illustration-avatar-holding-clipboard-47170977.jpg" className="w-20 inline" alt="" /> {doctor?.name}, <small>{doctor?.role}</small></p>
                    </div>
                    <div className="mt-8 space-y-4">
                        <p className="font-medium text-lg my-3"><i class="far fa-clock text-yellow-600 text-xl"></i> Everyday {serviceTime}</p>
                        <p className="font-medium text-lg my-3"><i class="fas fa-phone-alt text-xl text-green-600"></i> {bookingMobile}</p>
                        <p className="font-medium text-lg my-3"><i class="fas fa-map-marker-alt text-xl text-green-600"></i> {address}</p>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" className="border rounded-xl" />
                </div>
            </div>
            <NavLink to="/appointment" className="text-center block pb-8"><BtnWithBg>Book an Appointment</BtnWithBg></NavLink>
        </div>
    );
};

export default Details;