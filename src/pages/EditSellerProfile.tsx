import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const EditSellerProfile = () => {
    return (
        <>
            <div>
                <div className='mb-4' >
                    <p className='text-2xl font-bold'>Edit Account</p>
                </div>
                <div className='mb-2' >
                    <p className="text-xl font-bold">Basic Details</p>
                </div>
                <div  className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='mb-2' >
                        <label>First Name *</label>
                        <Input value='Samir' disabled />
                    </div>
                    <div className='mb-2' >
                        <label>Last Name *</label>
                        <Input value='Kumar' disabled />
                    </div>
                    <div className='mb-2' >
                        <label>Email *</label>
                        <Input value='samirkarn00@gmail.com' disabled />
                    </div>
                    <div className='mb-2' >
                        <label>Mobile Number *</label>
                        <Input value='8377815352' disabled />
                    </div>
                    <div className='mb-2' >
                        <label>Date of Birth *</label>
                        <Input value='01/04/1997' disabled />
                    </div>
                    <div className='mb-2' >
                        <label>Store/Businessname</label>
                        <Input value='Vermq Store' disabled />
                    </div>
                </div>
                <div className='mt-4 mb-2' >
                    <p className="text-xl font-bold">Address Details</p>
                </div>
                <div  className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='mb-2' >
                        <label>Address Line 1 *</label>
                        <Input value='Laxmisagar'/>
                    </div>
                    <div className='mb-2' >
                        <label>Address Line 2 *</label>
                        <Input value='Darbhanga'/>
                    </div>
                    <div className='mb-2' >
                        <label>City *</label>
                        <Input value='Darbhanga'/>
                    </div>
                    <div className='mb-2' >
                        <label>State *</label>
                        <Input value='Bihar' />
                    </div>
                    <div className='mb-2' >
                        <label>Pincode *</label>
                        <Input value='846009' />
                    </div>
                </div>
                <div className='mt-4 mb-2' >
                    <p className="text-xl font-bold">Bank Details</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='mb-2' >
                        <label>Bank Name *</label>
                        <Input value='State Bank of India'/>
                    </div>
                    <div className='mb-2' >
                        <label>IFSC *</label>
                        <Input value='SBIN0001234'/>
                    </div>
                    <div className='mb-2' >
                        <label>Account Number *</label>
                        <Input value='1234567890'/>
                    </div>
                    <div className='mb-2' >
                        <label>Bank Branch *</label>
                        <Input value='Lalbagh' />
                    </div>
                </div>
                <div className='mt-6 mb-10 flex justify-center'>
                    <Button className=' m-auto'>Update</Button>
                </div>
            </div>
        </>
    )
}

export default EditSellerProfile