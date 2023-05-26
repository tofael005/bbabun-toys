import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '@smastrom/react-rating/style.css'

const ViewDetailsToy = () => {
    const {id} = useParams()
    const [viewData, setViewData] = useState({})
    const {photo_url, name, seller_name, seller_email, sub_category, price, rating, quantity, description}= viewData;
    
    

    useEffect(() =>{
        fetch(`https://bbabun-toys.vercel.app/toy/${id}`)
        .then(res => res.json())
        .then(data => setViewData(data))
    }, [id])
    
    return (
        <div className="max-w-[1240px] mx-auto px-3 mb-10">
            <h1 className="text-center text-3xl font-semibold my-6 text-[#6e9426]">Seller Details</h1>
            <main className="grid md:grid-cols-2 items-center border p-6 mt-6 shadow-md">
                <img className="md:w-80 h-[400px] md:mb-4 mx-auto" src={photo_url} alt="" />
                <div>
                    <h1 className="text-xl my-2">Product Name: <span className="font-bold">{name}</span></h1>
                    <p>Seller Name: <span className="font-semibold">{seller_name}</span></p>
                    <p className="my-2">Sub-category: <span className="font-semibold">{sub_category}</span></p>
                    <p>Price: <span className="font-semibold">{price}</span></p>
                    <div className='my-2 flex items-center gap-2'>
                        <span>Rating: </span> <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
                    </div>
                    <p>Available QTY: <span className="font-semibold">{quantity}</span></p>
                    <p className="my-2"><span className="font-semibold">Description:</span> {description}</p>
                </div>
            </main>
        </div>
    );
};

export default ViewDetailsToy;