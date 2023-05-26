import React from 'react';
import error from '../Assets/9410.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="max-w-[1240px] mx-auto">
            <img className="w-[800px] h-[600px] rounded-md block mx-auto mt-16" src={error} alt="" />
            <button className="block mx-auto rounded text-[#6e9426] font-bold underline  px-6 py-3 "><Link to="/">Go to Home</Link></button>
        </div>
    );
};

export default Error;