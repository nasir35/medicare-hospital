import React from 'react';

const BtnWithBg = ({children}) => {
    return (
        <>
            <button className="bg-indigo-600 border-2 border-indigo-600 hover:bg-gray-100 hover:text-indigo-600 transition md:px-8 sm:px-6 px-4 md:py-2 py-1 text-white md:rounded-3xl rounded-2xl sm:font-medium font-normal">{children}</button>
        </>
    );
};

export default BtnWithBg;