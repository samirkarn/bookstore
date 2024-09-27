import React, { useState } from 'react';
import SideMenuBar from '@/components/SideMenuBar';
import SellerTopMenu from '@/components/SellerTopMenu';

const SellerLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex gap-0'>
      <SideMenuBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className='w-full md:w-[80%]'>
        <SellerTopMenu toggleSidebar={toggleSidebar} />
        <div className='p-4 md:p-8'>{children}</div>
      </div>

      {isSidebarOpen && (
        <div
          className='fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden'
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default SellerLayout;
