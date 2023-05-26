import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-toastify";


const Tabss = () => {
  const {user} = useAuth()
  const [tabIndex, setTabIndex] = useState(2);
  const [tabSub, setTabSub] = useState("Musical_Player");
  const [tak, setTak] = useState([])
  const handleSubCategory = (sub) => {
    setTabSub(sub)
  }

  
  useEffect(() => {
    fetch(`https://bbabun-toys.vercel.app/tabs?sub_category=${tabSub}`)
      .then(res => res.json())
      .then(data => setTak(data))
  }, [tabSub])

  const handelTost = () => {

    if (!user) {
      toast.error("Please Login To View Details");

    }
  }


  return (
    <Tabs
      className="max-w-[1240px] mx-auto text-center "
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
    >
      <h1 className="text-2xl font-black my-8 border-2 border-[#6e9426] w-72 mx-auto p-3 rounded-md">Shop by Category</h1>
      <TabList>
        <Tab onClick={() => handleSubCategory("Musical_Wobbler")}><span className="font-bold">MUSICAL</span></Tab>
        <Tab onClick={() => handleSubCategory("Toy_Music")}><span className="font-bold">SOUND</span></Tab>
        <Tab onClick={() => handleSubCategory("Musical_Player")}><span className="font-bold">PLAYER</span></Tab>
      </TabList>
      <TabPanel>
        <div className="grid md:grid-cols-3 gap-4 mt-10 p-4 ">
          {
            tak.map((ta) => <><div key={ta._id} className="border rounded-md shadow">
              <img className="md:w-full h-80 w-full rounded-md border p-5" src={ta.photo_url} alt="" />
              <div className="text-left px-6">
                <h1 className="text-xl mt-6">Name: <span className="font-semibold">{ta.name}</span></h1>
                <p className="my-2">Price: <span className="font-semibold">{ta.price}</span></p>
                <p>Rating: <span className="font-semibold">{ta.rating}</span></p>
                <button onClick={handelTost} className="bg-[#6e9426] my-4 mb-6 px-6 py-2 rounded md:w-full w-full font-semibold text-white"><Link to={`/viewDetails/${ta._id}`}>View Details</Link></button>
              </div>

            </div></>)
          }
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid md:grid-cols-3 gap-4 mt-10 p-4">
          {
            tak.map((ta) => <><div key={ta._id} className="border rounded-md shadow">
              <img className="md:w-full h-80 w-full rounded-md border p-5" src={ta.photo_url} alt="" />
              <div className="text-left px-6">
                <h1 className="text-xl mt-6">Name: <span className="font-semibold">{ta.name}</span></h1>
                <p className="my-2">Price: <span className="font-semibold">{ta.price}</span></p>
                <p>Rating: <span className="font-semibold">{ta.rating}</span></p>
                <button onClick={handelTost} className="bg-[#6e9426] my-4 mb-6 px-6 py-2 rounded md:w-full w-full text-white"><Link to={`/viewDetails/${ta._id}`}>View Details</Link></button>
              </div>
            </div></>)
          }
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid md:grid-cols-3 gap-4 mt-10 p-4">
          {
            tak.map((ta) => <><div key={ta._id} className="border rounded-md shadow">
              <img className="md:w-full h-80 w-full rounded-md border p-5" src={ta.photo_url} alt="" />
              <div className="text-left px-6">
                <h1 className="text-xl mt-6">Name: <span className="font-semibold">{ta.name}</span></h1>
                <p className="my-2">Price: <span className="font-semibold">{ta.price}</span></p>
                <p>Rating: <span className="font-semibold">{ta.rating}</span></p>
                <button onClick={handelTost} className="bg-[#6e9426] my-4 mb-6 md:w-full w-full px-6 py-3 rounded text-white"><Link to={`/viewDetails/${ta._id}`}>View Details</Link></button>
              </div>
            </div></>)
          }
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default Tabss;