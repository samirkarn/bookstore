import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LuLayoutDashboard } from "react-icons/lu";
import { GiBookshelf } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";


const SideMenuBar = () => {

    const location = useLocation()
    console.log(location)

    const activeMenu = location.pathname;
    console.log(activeMenu)

    return (
        <>
            <div className='flex flex-col justify-between h-screen bg-slate-300 p-4'>
                <div className='flex flex-col gap-2'>
                    <div className='mb-4'>
                        <Link to='/dashboard'>
                            <p className="cursor-pointer text-4xl font-bold text-pink-800">BookStore</p>
                        </Link>
                    </div>
                    <Link to='/dashboard'>
                        <div className={`hover:bg-slate-500 items-center p-2 flex rounded-md ${activeMenu === "/dashboard" ? 'bg-slate-800 text-white' : ''}`}>
                            <LuLayoutDashboard className='items-center text-xl' /><p className='menu ml-2'>Dashboard</p>
                        </div>
                    </Link>
                    <Link to='/books'>
                        <div className={`hover:bg-slate-500 items-center p-2 flex rounded-md ${activeMenu === "/books" ? 'bg-slate-800 text-white' : ''}`}>
                            <GiBookshelf className='items-center text-xl' /><p className='menu ml-2'>Books Management</p>
                        </div>
                    </Link>
                    <Link to='/buyers'>
                        <div className={`hover:bg-slate-500 items-center p-2 flex rounded-md ${activeMenu === "/buyers" ? 'bg-slate-800 text-white' : ''}`}>
                            <IoPersonOutline className='items-center text-xl' /><p className='menu ml-2'>Buyers Management</p>
                        </div>
                    </Link>
                </div>
                <div className={`hover:bg-red-500 items-center p-2 flex rounded-md `}>
                    <IoMdLogOut className='items-center text-xl' /><p className='menu ml-2'>Logout</p>
                </div>
            </div>
        </>
    )
}

export default SideMenuBar