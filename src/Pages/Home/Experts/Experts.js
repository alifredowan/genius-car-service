import React from 'react';

import expert1 from '../../../experts photo/expert-1.jpg';
import expert2 from '../../../experts photo/expert-2.jpg';
import expert3 from '../../../experts photo/expert-3.jpg';
import expert4 from '../../../experts photo/expert-4.jpg';
import expert5 from '../../../experts photo/expert-5.jpg';
import expert6 from '../../../experts photo/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    {id: 1, name: 'Will Smith', img: expert1},
    {id: 2, name: 'Chris Rock', img: expert2},
    {id: 3, name: 'Dwayne Rock', img: expert3},
    {id: 4, name: 'Messy Vai', img: expert4},
    {id: 5, name: 'Ronaldo Bro', img: expert5},
    {id: 6, name: 'Stachy Jhonson', img: expert6},
]
const Experts = () => {
    return (
        <div>
            <h1 className='text-5xl my-7'>Our Experts</h1>
            <div className='grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3'>
            {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert= {expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;