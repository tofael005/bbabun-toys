import React from 'react';
import { Link } from 'react-router-dom';

const SingleToys = ({ SingleToys }) => {
    const {name, seller_name, sub_category, price, quantity, _id} = SingleToys;
    return (
        <tr>
            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button className="border w-full p-3 rounded bg-[#6e9426] text-white"><Link to={`/viewDetails/${_id}`}>View Details</Link></button></td>
        </tr>
    );
};

export default SingleToys;