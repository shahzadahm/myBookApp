import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const Course = ({ list }) => {
    console.log(list, "list");

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-28 items-center justify-center text-center '>
                    <h1 className='text-2xl md:text-4xl font-semibold'>We're delighted to have you{" "}
                        <span className='text-pink-500'>
                            Here :)
                        </span>
                    </h1>
                    <p className='mt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem suscipit blanditiis, similique, animi ratione cupiditate deleniti expedita nisi dolorum beatae itaque hic in a illum nihil! Quam ipsam voluptate perspiciatis?</p>
                    <button className='bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
                        <Link to='/'>
                            Back
                        </Link>
                    </button>
                </div>

                <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
                    {list.map((item) => (
                        <Card item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Course;
