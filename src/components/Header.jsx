import { Link, NavLink } from "react-router-dom";
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { useState } from "react";
import logo from '../Assets/logo.png'
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-toastify";





const Header = () => {
    const [toggle, setToggle] = useState(false)
    const { user, logOut } = useAuth()


    const handelTost = () => {

        if (!user) {
          toast.error("Please Login To View Details");
    
        }
      }
    return (
        <nav className="bg-white">
            <div className="ui-container flex justify-between items-center py-4">
                <div className="flex items-center">
                    <img className="w-20 h-20" src={logo} alt="" />
                    <Link to="/"><h2 className="text-4xl font-bold">BBabun<span className="text-[#6e9426] font-bold">Toys</span></h2></Link>
                </div>
                <span className="md:hidden">
                    {
                        toggle ? <MdOutlineRestaurantMenu onClick={() => setToggle(!toggle)} /> : <HiOutlineMenuAlt2 onClick={() => setToggle(!toggle)} />
                    }
                </span>

                <ul className={`flex gap-6 items-center duration-200 z-50 flex-col py-5 md:p-0 text-white bg-opacity-90 md:text-black font-semibold top-[14%] bg-black md:bg-transparent w-full md:w-auto md:flex-row absolute md:static ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handelTost} to="/allToys" className={({ isActive }) => isActive ? "active" : ""}>All Toys</NavLink>
                    </li>

                    <li>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink>
                    </li>

                    {
                        user ? <><li><NavLink onClick={() => setToggle(false)} className={({ isActive }) => isActive ? "active" : ""} to='/myToys'>My Toys</NavLink></li>
                            <li><NavLink onClick={() => setToggle(false)} className={({ isActive }) => isActive ? "active" : ""} to='/addAtoys'>Add Toys</NavLink></li></> : ""
                    }

                    <li>{
                        user?.photoURL ? <img className="w-[35px] h-[35px] rounded-full" src={user?.photoURL} title={user.displayName} alt="" /> : ""
                    }
                    </li>


                    <li>{
                        user ? <button onClick={logOut} className="border-2 border-[#6e9426] rounded px-4 py-2  text-[#6e9426]">LogOut</button> : <button className="border-2 border-[#6e9426] px-4 py-2 rounded text-[#6e9426]"><Link to="/login">Login</Link></button>
                    }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;