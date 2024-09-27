import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const SellerTopMenu = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <div className='h-[4rem] flex justify-between items-center pr-4 md:border-l md:border-l-slate-500 w-full bg-slate-300'>
      <div className='ml-4 md:hidden'>
        <FiMenu className="text-2xl cursor-pointer" onClick={toggleSidebar} />
      </div>
      <div className='flex justify-end w-full'>
        <p className='my-auto'>Samir Kumar</p>
      </div>
    </div>
  );
};

export default SellerTopMenu;
