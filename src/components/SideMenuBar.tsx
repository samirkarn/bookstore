import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuLayoutDashboard } from 'react-icons/lu';
import { GiBookshelf } from 'react-icons/gi';
import { IoPersonOutline } from 'react-icons/io5';
import { IoMdLogOut } from 'react-icons/io';
import { FiX } from 'react-icons/fi'; 

const SideMenuBar = ({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) => {
  const location = useLocation();
  const activeMenu = location.pathname;

  const handleMenuClick = () => {
    if (isOpen) {
      toggleSidebar(); 
    }
  };

  return (
    <div
      className={`fixed z-40 md:relative bg-slate-300 p-4 h-screen md:w-[20%] w-[60%] transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
     

      
      <div className='flex justify-between items-center mb-6 md:hidden'>
        <p className='text-4xl font-bold text-pink-800'>BookStore</p>
      </div>
   

      <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col gap-2'>
          <div className='mb-4 md:block hidden'>
            <Link to='/dashboard'>
              <p className='cursor-pointer text-4xl font-bold text-pink-800'>BookStore</p>
            </Link>
          </div>

          <Link to='/dashboard' onClick={handleMenuClick}>
            <div className={`hover:bg-slate-500 items-center p-2 flex rounded-md ${activeMenu === '/dashboard' ? 'bg-slate-800 text-white' : ''}`}>
              <LuLayoutDashboard className='items-center text-xl' />
              <p className='menu ml-2'>Dashboard</p>
            </div>
          </Link>

          <Link to='/account' onClick={handleMenuClick}>
            <div className={`hover:bg-slate-500 items-center p-2 flex rounded-md ${activeMenu === '/account' ? 'bg-slate-800 text-white' : ''}`}>
              <LuLayoutDashboard className='items-center text-xl' />
              <p className='menu ml-2'>My Account</p>
            </div>
          </Link>

          <Link to='/books' onClick={handleMenuClick}>
            <div className={`hover:bg-slate-500 items-center p-2 flex rounded-md ${activeMenu === '/books' ? 'bg-slate-800 text-white' : ''}`}>
              <GiBookshelf className='items-center text-xl' />
              <p className='menu ml-2'>Books Management</p>
            </div>
          </Link>

          <Link to='/buyers' onClick={handleMenuClick}>
            <div className={`hover:bg-slate-500 items-center p-2 flex rounded-md ${activeMenu === '/buyers' ? 'bg-slate-800 text-white' : ''}`}>
              <IoPersonOutline className='items-center text-xl' />
              <p className='menu ml-2'>Buyers Management</p>
            </div>
          </Link>
        </div>
        <div className='hover:bg-red-500 items-center p-2 flex rounded-md'>
          <IoMdLogOut className='items-center text-xl' />
          <p className='menu ml-2'>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenuBar;
