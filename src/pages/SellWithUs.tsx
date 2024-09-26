import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const SellWithUs = () => {
    return (
        <>
            <div className='relative bg-sell h-screen bg-center bg-cover flex justify-center items-center px-4 md:px-0'>
                <div className='absolute inset-0 bg-black opacity-80'></div>
                <div className='relative z-10 w-full max-w-xl p-4 text-white'>
                    <p className="text-4xl font-extrabold mb-4">Become a Seller & Start Selling Your Books Today!</p>
                    <p>Are you an author, publisher, or just looking to sell your pre-loved books? We make it easy for you to reach thousands of readers across the globe. Whether you have a single book or a whole collection, we provide the perfect platform to showcase your books and boost your sales.</p>
                    <div className='flex justify-center my-4'>
                        <Link to='/seller-signup'>
                            <Button className='bg-blue-600 hover:opacity-50'>Create an account as seller</Button>
                        </Link>
                    </div>
                    <hr className='my-6' />
                    <div>
                        <p>Already have an Account then</p>
                        <div className='flex justify-center my-4'>
                            <Link to='/seller-login'>
                                <Button className='bg-none border hover:opacity-50'>Create an account as seller</Button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SellWithUs
