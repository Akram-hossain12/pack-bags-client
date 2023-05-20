import React from 'react';
import team1 from '../../../asetss/team/Team1.jpg';
import team2 from '../../../asetss/team/team2.jpg';
import team3 from '../../../asetss/team/team3.jpg';


const Team = () => {
    return (
        <div className='w-[1200px] mx-auto mb-20'>
            <h1 className='mt-20 text-3xl font bold text-center'>Professional Team</h1>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-10'>

                <div className=''>
                    <img src={team1} className='w-60 h-60 rounded-full' alt="" />
                    <div className='ml-16'>
                        <h1 className='text-xl font-semibold '>Shopia Dain</h1>
                        <p>
                            Tour Guide,BBS in Tourisom
                        </p>
                    </div>
                </div>

                <div>
                    <img src={team2} className='w-60 h-60 rounded-full' alt="" />
                    <div className='ml-16'>
                        <h1 className='text-xl font-semibold '>Raowdy khan</h1>
                        <p>
                            Driver,
                        </p>
                    </div>
                </div>

                <div>
                    <img src={team3} className='w-60 h-60 rounded-full' alt="" />
                    <div className='ml-16'>
                        <h1 className='text-xl font-semibold '>jhoni dainl</h1>
                        <p>
                            Asistent ,BBS in Tourisom
                        </p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Team;