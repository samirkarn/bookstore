import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <div className='mt-10 bg-black'>
                <div className='p-10 flex flex-col md:flex-row gap-10 justify-between'>
                    <div>
                        <Link to='/'>
                            <p className="cursor-pointer text-4xl font-bold text-pink-800">BookStore</p>
                        </Link>
                        <div className='text-white'>
                            <p className="text-1xl font-semibold mt-8 mb-2">Contact Us</p>
                            <p className="text-gray-200">Laxmisagar, Darbhanga</p>
                            <p className="text-gray-200">Bihar, 846009</p>
                            <div className="flex flex-row gap-3 mt-6">
                                <Link to=''>
                                    <FaFacebook className="text-2xl text-gray-200" />
                                </Link>
                                <Link to=''>
                                    <FaInstagram className="text-2xl text-gray-200" />
                                </Link>
                                <Link to=''>
                                    <FaTwitter className="text-2xl text-gray-200" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-white">
                        <p className="text-1xl font-semibold mb-2">Navigations</p>
                        <Link to='/'>
                            <p className="text-gray-200">Home</p>
                        </Link>
                        <Link to='/about-us'>
                            <p className="text-gray-200">About Us</p>
                        </Link>
                        <Link to='/store' >
                            <p className="text-gray-200">Store</p>
                        </Link>
                        <Link to='/sell-with-us'>
                            <p className="text-gray-200">Sell with Us</p>
                        </Link>
                    </div>
                    <div className="text-white">
                        <p className="text-1xl font-semibold mb-2">Support</p>
                        <div className="flex gap-2 text-gray-200">
                            <FaPhoneAlt />
                            <p>+91-9876543210</p>
                        </div>
                        <div className="flex gap-2 text-gray-200">
                            <MdEmail className="item-center" />
                            <p>support@bookstore.abc</p>
                        </div>
                    </div>
                </div>
                <p className="text-gray-200 text-center py-4 text-[12px]">&#169; 2024 BookStore, All rights reserved</p>
            </div>
        </>
    )
}

export default Footer