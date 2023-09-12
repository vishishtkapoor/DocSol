import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

const Sidebar = ({ children }) => {
  return (
    <div className='flex px-4 pb-4 md:h-[100vh] md:p-4'>
      <div className='fixed rounded-xl gap-2 md:pb-4 w-20 md:h-[100vh] p-4 bg-white md:rounded-[20px] border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href='/customers'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href='/orders'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;