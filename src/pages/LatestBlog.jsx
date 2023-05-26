import React from 'react';
import img1 from "../Assets/cstomer2.jpg"
import img2 from "../Assets/cst2.jpg"
import img3 from "../Assets/cst3.jpg"
import img4 from "../Assets/cst4.jpg"
import img5 from "../Assets/cst5.jpg"




const LatestBlog = () => {
    return (
        <div className="my-10 mb-20 px-3">
            <h1 className="text-xl font-bold border-2 w-64 rounded-full shadow-md my-6 mx-auto p-3 text-center text-black">Our Customer <span className="text-[#6e9426]">Review</span></h1>
            <hr className="max-w-[1000px] mx-auto border-1" />
            <div className="grid md:grid-cols-4 gap-8 px-3 max-w-[1000px] mx-auto mt-10 items-center">


                <div data-aos="zoom-in">
                    <img className="rounded-full w-28 h-28 mx-auto" src={img1} alt="" />
                    <div className="text-center mt-6">
                        <h1 className="my-2 text-xl text-left">Name: <span className="font-bold">Arnob</span></h1>
                        <h1 className="text-left">Review: <span className="font-bold text-[#6e9426]">4.9</span></h1>
                        <p className="text-justify text-sm mt-2 text-gray-500">Music toys can be a great way to introduce children to the world of music and foster their creativity. Here are brief reviews of three popular music toys brief reviews.</p>
                    </div>
                </div>
                


                <div data-aos="zoom-in">
                    <img className="rounded-full w-28 h-28 mx-auto" src={img3} alt="" />
                    <div className="text-center mt-6">
                        <h1 className="my-2 text-xl text-left">Name: <span className="font-bold">Tuhin</span></h1>
                        <h1 className="text-left">Review: <span className="font-bold text-[#6e9426]">5.00</span></h1>
                        <p className="text-justify text-sm mt-2 text-gray-500">Electronic Keyboard: This versatile toy allows children to play different melodies and experiment with different sounds. It usually comes with built.melodies and experiment</p>
                    </div>
                </div>



                <div data-aos="zoom-in">
                    <img className="rounded-full w-28 h-28 mx-auto" src={img4} alt="" />
                    <div className="text-center mt-6">
                        <h1 className="my-2 text-xl text-left">Name: <span className="font-bold">Mack Theer</span></h1>
                        <h1 className="text-left">Review: <span className="font-bold text-[#6e9426]">4.8</span></h1>
                        <p className="text-justify text-sm mt-2 text-gray-500">Musical Instruments Set: This set usually includes a variety of small instruments like maracas, tambourines, xylophones, and shakers. It offers kids the chance to. </p>
                    </div>
                </div>



                <div data-aos="zoom-in">
                    <img className="rounded-full w-28 h-28 mx-auto" src={img5} alt="" />
                    <div className="text-center mt-6">
                        <h1 className="my-2 text-xl text-left">Name: <span className="font-bold">Jhon Smith</span></h1>
                        <h1 className="text-left">Review: <span className="font-bold text-[#6e9426]">5.0</span></h1>
                        <p className="text-justify text-sm mt-2 text-gray-500">Music toys can be a great way to introduce children to the world of music and foster their creativity. Here are brief reviews of three popular music toys brief reviews.</p>
                    </div>
                </div>
            </div>
            <hr className="max-w-[1000px] mx-auto border-1 my-3 mb-10" />
        </div>
    );
};

export default LatestBlog;