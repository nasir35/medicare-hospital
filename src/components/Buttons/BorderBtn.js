import React from 'react';

const BorderBtn = ({children}) => {
    return (
        <>
            <button className="border-2 border-indigo-600 hover:bg-indigo-600 transition hover:text-white bg-gray-100 md:px-8 md:py-2 sm:px-6 px-4 py-1 text-indigo-600 md:rounded-3xl rounded-2xl font-medium">{children}</button>
        </>
    );
};

export default BorderBtn;