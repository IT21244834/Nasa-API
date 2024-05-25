import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex items-center h-24 max-w-1240px mx-auto px-4 bg-black text-white'>
            <div className='w-full text-3xl font-bold text-white'>NASA</div>
            <ul className='w-1/3 justify-center hidden md:flex'>
                <li className='pl-20 pt-20 pb-20'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='pl-20 pt-20 pb-20'>
                    <Link to='/APOD'>Todays Picture</Link>
                </li>
                <li className='pl-20 pt-20 pb-20'>
                    <Link to='/MRP'>On Mars</Link>
                </li>
                <li className='p-20 mr-10 content-inline'>
                    <Link to='/wildfire'>Wild Fire</Link>
                </li>
            </ul>

            <div onClick={handleNav} className='flex items-center md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-60% h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <div className='w-1/6 text-3xl font-bold text-white m-4'>React</div>
                <ul className='p-4 uppercase'>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to='/APOD'>Todays Picture</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to='/MRP'>On Mars</Link>
                    </li>
                    <li className='p-4'>
                        <Link to='/wildfire'>Wild Fire</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;