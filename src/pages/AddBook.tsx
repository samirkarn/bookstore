import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"

const AddBook = () => {
    return (
        <>
            <div>
                <div className='mb-4' >
                    <p className='text-2xl font-bold'>Add Book</p>
                </div>
                <div className='mb-2' >
                    <p className="text-xl font-bold">Book Details</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='mb-2' >
                        <label>Book Name *</label>
                        <Input placeholder='Enter book name' />
                    </div>
                    <div className='mb-2' >
                        <label>Author Name *</label>
                        <Input placeholder='Enter author name' />
                    </div>
                    <div className='mb-2' >
                        <label>Publisher Name *</label>
                        <Input placeholder='Enter publisher name' />
                    </div>
                    <div className='mb-2' >
                        <label>Book Language *</label>
                        <Input placeholder='Enter language' />
                    </div>
                    <div className='mb-2' >
                        <label>Price</label>
                        <Input placeholder='Enter Price' />
                    </div>
                    <div className='mb-2' >
                        <label>Old Price</label>
                        <Input placeholder='Enter old price' />
                    </div>
                    <div className='mb-2' >
                        <label>Description</label>
                        <Textarea className='Enter description' />
                    </div>
                    <div className='mb-2' >
                        <label>About Author</label>
                        <Textarea className='Enter About Author' />
                    </div>
                </div>
                <div className='mb-2' >
                    <p className="text-xl font-bold">Other Details</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='mb-2' >
                        <label>Total Pages *</label>
                        <Input placeholder='Enter total page number' />
                    </div>
                    <div className='mb-2' >
                        <label>ISBN *</label>
                        <Input placeholder='Enter ISBN number' />
                    </div>
                    <div className='mb-2' >
                        <label>Width *</label>
                        <Input placeholder='Enter width of book' />
                    </div>
                    <div className='mb-2' >
                        <label>Height *</label>
                        <Input placeholder='Enter height of book' />
                    </div>
                    <div className='mb-2' >
                        <label>Weight *</label>
                        <Input placeholder='Enter weight of book' />
                    </div>
                    <div className='mb-2' >
                        <label>Edition</label>
                        <Input placeholder='Enter book edition' />
                    </div>
                </div>
                <div className='mb-2' >
                    <p className="text-xl font-bold">Book Image(s)</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='mb-2' >
                        <label>Upload Book Images *</label>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
                        />
                        
                    </div>
                </div>
              
                <div className='mt-6 mb-10 flex justify-center'>
                    <Button className=' m-auto'>Add Book</Button>
                </div>
            </div>
        </>
    )
}

export default AddBook