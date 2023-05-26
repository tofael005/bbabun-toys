import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import useTitle from '../Hooks/UseTitleHooks';
import { useAuth } from '../context/AuthProvider';



const Register = () => {
    useTitle('Register')

    const { createUser } = useAuth();

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccess("");
        setError("");

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        if (!/(?=.*?[A-Z])/.test(password)) {
            setError("At last one uppercase ")
        }
        else if (password.length < 6) {
            setError("please add at least 6 number");
            return
        }


        createUser(email, password)
            .then(result => {
                const currentUser = result.user;

                updateProfile(currentUser, { displayName: name, photoURL: photo })
                e.target.reset();
                setSuccess("User has created successfully");
            })
            .catch(error => {

                setError(error.message)
            })

    }


    return (
        <main className="px-3 rounded-md">
            <div className='max-w-[700px] mx-auto mt-16 bg-slate-200 p-4'>
                <h1 className='text-center text-4xl mt-8 font-bold text-[#6e9426]'>Register NOW!</h1>
                <form onSubmit={handleRegister} className=' py-5 bg-slate-200 rounded md:w-[530px]  mx-auto my-5'>
                    <label className="font-semibold" htmlFor="">Full Name</label> <br />
                    <input className='w-full p-3 rounded mb-3 mt-1' type="text" name='name' placeholder='Enter user  name' required /> <br />
                    <label className="font-semibold" htmlFor="">Your Email</label> <br />
                    <input className='w-full p-3 rounded mb-3 mt-1' type="email" name='email' placeholder='Enter your email' required /> <br />
                    <label className="font-semibold" htmlFor="">Password</label> <br />
                    <input className='w-full p-3 rounded mb-3 mt-1' type="password" name='password' placeholder='Enter your password' required /> <br />
                    <label className="font-semibold" htmlFor="">Fill in the photos URL</label> <br />
                    <input className='w-full p-3 rounded mb-3 mt-1' type="text" name='photo' placeholder='Enter user photoURL' required /> <br />

                    <p className='text-red-600 text-lg'>{error}</p>
                    <p className='text-green-600 text-lg'>{success}</p>

                    <button className='w-full bg-[#6e9426] mx-auto rounded py-2 my-3 text-white font-semibold' >Register</button>
                    <div className="text-center mt-4">
                        Already have an account?
                        <Link to="/login" className="px-2 py-1 ml-2 text-blue-700 font-semibold underline rounded">Login</Link>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Register;