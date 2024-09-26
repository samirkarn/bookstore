import SellerTopMenu from '@/components/SellerTopMenu'
import SideMenuBar from '@/components/SideMenuBar'
import React from 'react'

const SellerDashboard = () => {
    return (
        <>
            <div>
                <div className='flex gap-0'>
                    <div className='w-[20%] hidden md:inline-block'>
                        <SideMenuBar />
                    </div>
                    <div className='w-[80%]'>
                        <SellerTopMenu />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellerDashboard