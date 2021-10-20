import React from 'react';
import { Link } from 'react-router-dom';

const BookingSuccess = () => {
    return (
        <div className="h-5/6 flex justify-center items-center flex-col space-y-12 py-12">
            <h2 className="text-green-600 text-9xl"><i class="far fa-check-circle"></i></h2>
            <p className="text-gray-500 sm:p-1 p-4">Booking Success! Thanks for taking our service. It's glad to see you here.</p>
            <Link to="home" className="rounded-lg bg-green-600 text-white hover:bg-white border hover:border-green-500 font-medium hover:text-green-500 px-4 py-1"><i class="fas fa-home"></i> Go Home</Link>
        </div>
    );
};

export default BookingSuccess;