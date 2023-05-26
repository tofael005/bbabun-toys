import React, { useEffect, useState } from 'react';
import useTitle from '../Hooks/UseTitleHooks';
import SingleToys from './SingleToys';
import { RiSearch2Line } from 'react-icons/ri';



const AllToys = () => {
    useTitle("AllToy's")
    const [allData, setAllData] = useState([])

    

    useEffect(() => {
        fetch("https://bbabun-toys.vercel.app/toys")
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    const search = (e) => {
        e.preventDefault()

        fetch(`https://bbabun-toys.vercel.app/search?query=${e.target.search.value}`)
            .then(res => res.json())
            .then(data => setAllData(data))
    }


    return (
        <div className="overflow-x-auto">
            <form onSubmit={search} className="max-w-[740px] mx-auto flex justify-center my-4 ">
                <input className="w-[500px] border-2 p-3 rounded-s outline-none" type="search" name="search" id="" placeholder='Type your product' />
                <button type='submit' className="p-3 text-lg bg-[#6e9426] text-white font-bold rounded-e hover:bg-green-600 duration-300"><RiSearch2Line /></button>
            </form>
            <table className="max-w-[1240px] mx-auto gap-3 mb-20 mt-10 table table-compact md:w-full min-w-[900px]">
                <thead>
                    <tr className="text-center">
                        <th>Seller Name</th>
                        <th>Toys Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available QTY</th>
                        <th>Remark</th>
                    </tr>
                </thead>
                <tbody className="text-center shadow-md">

                    {
                        allData.map((singleToyDta) => <SingleToys key={singleToyDta._id} SingleToys={singleToyDta} />)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllToys;