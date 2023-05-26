import React, { useEffect, useState } from 'react';
import useTitle from '../Hooks/UseTitleHooks';
import UpdateCard from './UpdateCard';
import { useAuth } from '../context/AuthProvider';
import Select from 'react-select';
import Swal from 'sweetalert2';


const AllToys = () => {
    useTitle("MyToy's")
    const { user } = useAuth()
    const [updateData, setUpdateData] = useState([])
    const [deleteOk, setDeleteOk] = useState(0)
    const [selectedOption, setSelectedOption] = useState("descending");


    const url = `https://bbabun-toys.vercel.app/seller?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdateData(data))
    }, [url, deleteOk])

    const deleteToy = (id) => {
        const isDelete = confirm("Are you sure? You want to delete this")
        if (isDelete) {
            fetch(`https://bbabun-toys.vercel.app/delete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then((data) => {
                    console.log(data)

                    if (data.deletedCount > 0) {
                        setDeleteOk(deleteOk + 1)
                        Swal.fire({
                            title: '',
                            text: "Data Delete Successfully!",
                            icon: 'Delete',
                            confirmButtonColor: '#6e9426',
                            confirmButtonText: 'ok'
                        })
                    }
                })
        }
    }


    const options = [
        { value: 'ascending', label: 'Ascending' },
        { value: 'descending', label: 'Descending' },
    ]



    useEffect(() => {
        fetch(`https://bbabun-toys.vercel.app/sort?sortby=${selectedOption.value}&email=${user.email}`)
            .then(res => res.json())
            .then(data => setUpdateData(data))
    }, [selectedOption])


    return (
        <main className="max-w-[1240px] mx-auto">
            <section className="ml-auto mt-10 min-w-[200px] md:w-1/3">
                <Select defaultValue={selectedOption}
                    onChange={setSelectedOption} options={options} />
            </section>
            <div className="overflow-x-auto">
                <table className=" gap-3 mb-20 mt-10 table table-compact md:w-full min-w-[900px]">
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
                    <tbody className="text-center shadow mb-2">


                        {
                            updateData.map((updateToy) => <UpdateCard deleteToy={deleteToy} key={updateToy._id} updateToy={updateToy}></UpdateCard>)
                        }
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default AllToys;