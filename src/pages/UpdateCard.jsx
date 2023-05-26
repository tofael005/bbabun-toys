import React from 'react';
import { AiOutlineClose, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const UpdateCard = ({updateToy, deleteToy}) => {
    const {name, seller_name, sub_category, price, quantity, _id } = updateToy;
    return (
        <tr>
            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td className="flex gap-4 text-lg justify-center"><Link to={`/editToys/${_id}`} className="border-2 rounded p-2 cursor-pointer"><AiFillEdit/></Link><span onClick={()=>deleteToy(_id)} className="bg-red-500 p-2 text-white rounded cursor-pointer"><AiOutlineClose/></span></td>
        </tr>
    );
};


export default UpdateCard;