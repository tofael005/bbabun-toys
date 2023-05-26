import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import log from '../Assets/login-image1.jpg'
import useTitle from '../Hooks/UseTitleHooks';
import { useAuth } from '../context/AuthProvider';


const LogIn = () => {
    useTitle('login')
    const { signIn, signInGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    console.log("login page", location)
    const from = location?.state?.from?.pathname || "/"

    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }

    const handelGoogle = () => {
        signInGoogle()
            .then((result) => {
                const google = result.user;
                console.log(google)
                navigate(from, { replace: true });
                console.log(from)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
    return (
        <main className="max-w-[1240px] mx-auto">
            <div className='md:flex md:p-8 p-3 justify-between'>
                <img className="w-full h-full" src={log} alt="" />

                <div className='py-5 bg-slate-200 rounded md:w-full mx-auto my-5'>
                    <h1 className='text-center text-5xl text-[#6e9426] underline font-bold mt-4 mb-8'>Login</h1>
                    <form className="px-6" onSubmit={handleLogin}>
                        <label className="font-semibold" htmlFor="">Email</label>
                        <input className='md:w-full p-3 mb-4 mt-1 w-full rounded' type="email" name="email" placeholder='Enter your email' required />
                        <label className="font-semibold" htmlFor="">Password</label>
                        <input className='md:w-full w-full p-3 mt-1 mb-2 rounded ' type="password" name='password' placeholder='Enter your password' required />
                        <p>{error}</p>

                        <p className='text-blue-600 underline font-semibold  mb-8'><Link>Forget Password</Link></p>
                        <button className='md:w-full w-full bg-[#6e9426] mx-auto rounded p-3 my-2 text-white font-semibold'>Login</button>

                        <p className='mt-2 text-center'> Create a new account? <Link to="/registration" className='text-blue-600 font-semibold underline'> Register NOW</Link></p>
                    </form>
                    <button onClick={handelGoogle} className='border-2 border-[#6e9426] p-2 mt-4 rounded flex justify-center items-center gap-[6px] mx-auto'><FcGoogle className='text-[32px]' /><span>Continue with Google</span></button>
                </div>

            </div>
        </main>

    );
};

export default LogIn;