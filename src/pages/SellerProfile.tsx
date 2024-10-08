import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const SellerProfile = () => {
    return (

        <div >
            <div className='flex flex-col gap-2 md:flex-row md:items-center justify-between'>
                <div >
                    <p className='text-2xl font-bold'>My Account</p>
                </div>
                <div className='flex gap-2 '>
                    <Link to='/account/edit-account' >
                    <Button variant="outline">Edit Account</Button>
                    </Link>
                    
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