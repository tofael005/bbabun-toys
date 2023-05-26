import React from 'react';
import banner2 from "../Assets/ban.webp"
import { Link } from 'react-router-dom';
import { BsBoxArrowInUpRight } from 'react-icons/bs';

const Banner = () => {
    return (
        <div>
            <div className="relative">
                <img className="md:w-full h-[80vh] object-cover mt-5" src={banner2} alt="" />
                <div className='absolute top-0 lef-0 w-full h-full bg-gradient-to-r text-white from-[#000000] to-[rgba(21, 21, 21, 0)] '>
                    <h2 className='absolute md:top-48 md:left-32 font-bold md:text-5xl text-4xl top-28 left-4'>Last chance to <span className="text-[#ec8714]">Shop</span><br /> Geoffrey’s Picks at <br /> great prices!</h2>
                    
                    <button className="top-72 left-4 md:top-96 md:left-32 absolute bg-[#6e9426]  text-white px-6 py-3 rounded"><Link className='flex items-center gap-2' to="/blog">Explore Now <BsBoxArrowInUpRight/></Link></button>
                   
                </div>
            </div>
        </div>
    );
};

export default Banner;