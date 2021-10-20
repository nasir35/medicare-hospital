import React, { useEffect, useState } from 'react';
import useTeam from '../../hooks/useTeam';
import Member from './Member';

const Team = () => {
    // const [team, setTeam] = useState([]);
    // useEffect(() => {
    //     fetch('https://raw.githubusercontent.com/nasir35/Json-Data/main/FakeTeam.json')
    //     .then(res => res.json())
    //     .then(data => setTeam(data))
    // },[])
    // console.log(team.length);

    const team = useTeam();
    
    return (
        <div className="w-11/12 mx-auto my-8">
            <div className="text-center">
            <div className="mx-auto">
            <h1 className="inline-block px-4 md:text-2xl text-xl font-medium border-b-4 border-blue-700">Our Doctors</h1>
            </div>
            <p className="pt-3 text-gray-600">We have a team of doctors who are specialized and expert in their respective sector!</p>
            </div>

            <div className="my-8 mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-4 md:gap-y-12 gap-y-8">
                {
                    team?.map(member => <Member key={member.name} member={member}></Member>)
                }
            </div>
        </div>
    );
};

export default Team;