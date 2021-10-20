import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from './service/Service';

const Services = () => {
    const services = useServices();
    return (
        <div className="md:mt-12 md:mb-2 mt-10 mb-1">
            <div>
                <h2 className="md:text-3xl text-xl font-medium text-center text-gray-800">What Service do we provide?</h2>
                <p className="text-gray-500 text-center ">aghfgdfg yatrfsdfhgk tadhsfj strfdct asfdtrc asdftrh gsa dhgjsfdtw</p>
            </div>
            <div className="md:p-12 sm:p-6 p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 gap-y-12">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;