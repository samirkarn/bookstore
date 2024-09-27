import React from 'react'
import SideMenuBar from '@/components/SideMenuBar'
import SellerTopMenu from '@/components/SellerTopMenu'
import { Button } from '@/components/ui/button'
const SellerProfile = () => {
    return (

        <div >
            <div className='flex flex-col gap-2 md:flex-row md:items-center justify-between'>
                <div >
                    <p className='text-2xl font-bold'>My Account</p>
                </div>
                <div className='flex gap-2 '>
                    <Button variant="outline">Edit Account</Button>
                </div>
            </div>
            <div>
                <p>Basic Details</p>
                <div>
                    <p><span>Name: </span><span>Samir Kumar</span></p>
                    <p><span>Email: </span><span>samirkarn00@gmail.com</span></p>
                    <p><span>Mobile: </span><span>8377815352</span></p>
                    <p><span>Store/Business Name: </span><span>Pustkalay</span></p>
                </div>
            </div>
        </div>
    )
}

export default SellerProfile