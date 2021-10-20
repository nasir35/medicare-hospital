import React from 'react';

const Member = ({ member }) => {
    const { img, name, designation, phone, email, floor, room } = member;
    return (
        <div className="border shadow-inner rounded-md pb-6">
            <img src={img} alt="" className=" w-full object-top object-cover" />
            <div className="px-8 space-y-2 text-gray-700">
                <h3 className="md:text-2xl text-xl mt-4 font-medium">{name}</h3>
                <p className="md:text-xl text-base">{designation}</p>
                <hr className="pb-3" />
                <p className="border border-green-500 rounded-2xl inline-block px-4 py-1 text-green-600">{floor} Floor - Room {room}</p>
                <p><i className="fas fa-phone-alt text-green-600 pr-2 text-lg"></i> {phone}</p>
                <p><i className="far fa-envelope pr-2 text-green-600 text-xl"></i> {email}</p>
            </div>
        </div>
    );
};

export default Member;