import React from 'react';
import Input from '../../components/form/Input';

const Appointment = () => {
    return (
        <div className="lg:py-6 md:py-4 py-3 bg-gray-200">
            <div className="w-2/6 mx-auto">
                <h2 className="lg:text-3xl md:text-2xl text-xl text-center text-green-800 py-1 border-b-4 border-green-400 font-medium">Book an Appointment</h2>
            </div>
            <div className="w-full mx-auto">
                <form className=" w-10/12 mx-auto p-8 py-14 space-y-8 mt-5 bg-white">
                    <div className="grid grid-cols-3 gap-8">                        
                        <Input type="text" placeholder="Patient\'s name"></Input>
                        <Input type="text" placeholder="Phone Number"></Input>
                        <Input type="email" placeholder="Email*"></Input>
                        <Input type="text" placeholder="subject"></Input>
                        <Input type="date" placeholder="Date"></Input>
                        <Input type="text" placeholder="Department"></Input>
                    </div>
                    <div>
                        <textarea placeholder="Your message" className="w-full px-2 h-28 bg-gray-100 border rounded-lg border-gray-600"></textarea>
                    </div>
                    <button className="px-5 py-3 rounded-lg text-lg font-medium bg-green-400 text-white">Book an Appointment</button>
                </form>
            </div>
            <br />
        </div>
    );
};

export default Appointment;