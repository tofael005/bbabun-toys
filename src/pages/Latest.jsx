import React from 'react';
import img1 from '../Assets/gallery/gall-1.jpg'
import img2 from '../Assets/gallery/gall-2.avif'
import img3 from '../Assets/gallery/gall-3.webp'
import img4 from '../Assets/gallery/gall-4.jpg'
import img5 from '../Assets/gallery/gall-5.jpeg'
import img6 from '../Assets/gallery/gall-6.webp'
import img7 from '../Assets/gallery/gall-7.avif'
import img8 from '../Assets/gallery/gall-8.jpg'
import img9 from '../Assets/gallery/gall-9.jpg'
import img10 from '../Assets/gallery/gall-10.jpg'
import img11 from '../Assets/gallery/gall-11.jpg'
import img12 from '../Assets/gallery/gall-12.jpg'

const Latest = () => {
    return (
        <div className="max-w-[1240px] mx-auto mb-20 mt-32 px-3 ">
            <h1 className="text-center text-2xl font-bold my-8 border-2 w-96 mx-auto py-3 md:px-2 shadow-md rounded-full items-center">Latest <span className="text-[#6e9426]">Photo Gallery</span></h1>
            
            <div className="grid md:grid-cols-4 gap-4">
                <div data-aos="fade-up">
                    <img className="w-full h-72 rounded-md" src={img1} alt="" />
                </div>
                <div data-aos="fade-up">
                    <img className="w-full h-72  rounded-md" src={img2} alt="" />
                </div>
                <div data-aos="fade-up">
                    <img className="w-full h-72 rounded-md" src={img3} alt="" />
                </div>
                <div data-aos="fade-up">
                    <img className="w-full h-72 rounded-md" src={img4} alt="" />
                </div>
                <div data-aos="fade-up">
                    <img className="w-full h-72 rounded-md" src={img5} alt="" />
                </div>
                <div data-aos="fade-up">
                    <img className="w-full h-72 rounded-md" src={img6} alt="" />
                </div>
                <div data-aos="fade-up">
                    <img className="w-full h-72 rounded-md" src={img7} alt="" />
                </div>
                <div data-aos="fade-up">
                    <img className="w-full h-72 rounded-md" src={img8} alt="" />
                </div>
                <div data-aos="fade-up">
                    <img className="w-full h-72 rounded-md" src={img9} alt="" />
                </div>
                <div data-aos="fade-up">
                    <img className="w-full h-72 rounded-md" src={img10} alt="" />
                </div>
                <div data-aos="fade-up">
                    <img className="w-full h-72 rounded-md" src={img11} alt="" />
                </div>
                <div data-aos="fade-up">
                    <img className="w-full h-72 rounded-md" src={img12} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Latest;