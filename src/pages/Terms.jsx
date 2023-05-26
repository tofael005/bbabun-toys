import React from 'react';
import imge1 from '../Assets/shipping.png'
import imge2 from '../Assets/return.png'
import imge3 from '../Assets/support.png'
import imge4 from '../Assets/payment.png'

const Terms = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-8 mb-10 px-1 rounded">
            <h1 className="text-4xl text-center my-4 font-bold text-[#6e9426] underline">Our Services</h1>
            <div className="grid md:grid-cols-4 gap-6 p-4">
                <div data-aos="fade-up" className="flex gap-2 items-center shadow-md p-3 border  hover:bg-green-100 duration-300 cursor-pointer">
                    <div className="border-2 rounded-full">
                        <img className="w-20 p-3" src={imge1} alt="" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold my-2">FREE SHIPPING</h1>
                        <p className="text-sm">Free Shipping on all order</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="flex gap-2 items-center shadow-md p-3 border hover:bg-green-100 duration-300 cursor-pointer">
                    <div className="border-2 rounded-full">
                        <img className="w-20 p-3" src={imge2} alt="" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold my-2">FREE RETURN</h1>
                        <p className="text-sm">30 days money back guarantee</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="flex gap-2 items-center shadow-md p-3 border hover:bg-green-100 duration-300 cursor-pointer">
                    <div className="border-2 rounded-full">
                        <img className="w-20 p-3" src={imge3} alt="" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold my-2">24/7 SUPPORT</h1>
                        <p className="text-sm">We support online in 24 hour</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="flex gap-2 items-center shadow-md p-3 border hover:bg-green-100 duration-300 cursor-pointer">
                    <div className="border-2 rounded-full">
                        <img className="w-20 p-3" src={imge4} alt="" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold my-2">RECEIVE GIFT CARD</h1>
                        <p className="text-sm">Receive gift all over oder $50</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;