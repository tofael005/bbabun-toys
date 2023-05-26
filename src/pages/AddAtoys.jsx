import React from 'react';
import { useAuth } from '../context/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../Hooks/UseTitleHooks';

const AddAtoys = () => {
    useTitle("AddAToys")
    const { user } = useAuth()


    const addNewToy = (e) => {
        e.preventDefault()
        const form = e.target
        const photo_url = form.toy_image.value
        const name = form.name.value
        const seller_name = form.seller_name.value
        const seller_email = form.email.value
        const sub_category = form.sub_category.value
        const price = form.price.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        const description = form.description.value

        const toy = {
            photo_url,
            name,
            seller_name,
            seller_email,
            sub_category,
            price,
            rating,
            quantity,
            description
        }

        fetch("https://bbabun-toys.vercel.app/add-toy", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: '',
                        text: "Added Toys Successfully!",
                        icon: 'success',
                        confirmButtonColor: '#6e9426',
                        confirmButtonText: 'Added'
                    })

                }
            })
    }

    return (
        <div className="max-w-[1000px] mx-auto px-3">
            <form onSubmit={addNewToy} className="border shadow-xl mt-16 mb-20 p-5 rounded-md">

                <h1 className="text-center text-4xl font-sans font-bold my-8">Add New Toys</h1>

                <div className=" grid md:grid-cols-2 gap-5 p-4">
                    <div>
                        <label className="font-semibold" htmlFor="">Seller Name</label>
                        <input className="w-full border p-3 rounded my-2" type="text" name="seller_name" placeholder="Enter seller name" defaultValue={user?.displayName && user?.displayName}/>
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="">Available Quantity</label>
                        <input className="w-full border p-2 rounded my-2" type="text" name="quantity" placeholder="Available Quantity" />
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="">Toys Name</label>
                        <input className="w-full border p-3 rounded my-2" type="text" name="name" placeholder="Enter toys name" />
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="">Email</label>
                        <input className="w-full border p-3 rounded my-2" type="email" name="email" placeholder="Enter seller email" defaultValue={user?.email && user?.email}/>
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="">Category</label>
                        <input className="w-full border p-3 rounded my-2" type="text" name="sub_category" placeholder="Enter toys category" />
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="">Price</label>
                        <input className="w-full border p-3 rounded my-2" type="text" name="price" placeholder="Enter toys price" />
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="">Photo </label>
                        <input className="w-full border p-3 rounded mb-4 my-2" type="text" name="toy_image" placeholder="Enter photo URL" />
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="">Rating </label>
                        <input className="w-full border p-3 rounded mb-4 my-2" type="text" name="rating" placeholder="Enter photo URL" />
                    </div>
                </div>

                <div className="px-4">
                    <label className="font-semibold" htmlFor="">Description </label>
                    <textarea name="description" id="" className="h-[150px] w-full border p-3 rounded my-2" placeholder="Description"></textarea>
                </div>
                <div className="px-4">
                    <button className="w-full p-3 bg-[#6e9426] text-white rounded mb-6 my-4">Add Toys</button>
                </div>
            </form>
        </div>
    );
};

export default AddAtoys;