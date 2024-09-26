import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import React, { useState } from 'react'
import { CiShare2 } from "react-icons/ci";
import { LiaLanguageSolid } from "react-icons/lia";
import { SiPowerpages } from "react-icons/si";
import { SiPaperswithcode } from "react-icons/si";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { RiExpandHeightLine } from "react-icons/ri";
import { FaWeightScale } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import LatestBooks from '@/components/LatestBooks';


const BookDetails = () => {
  const [isDescriptionReadMore, setIsDescriptionReadMore] = useState(false)
  const [isAuthoreReadMore, setIsAuthorReadMore] = useState(false)


  const authorText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ratione consequuntur consectetur quidem numquam a voluptate, dolor optio? Optio tempora provident iste quam, beatae reiciendis atque nostrum maiores quos doloribus.Repudiandae minus enim optio repellat vitae omnis fugit aut dicta debitis. Exercitationem quibusdam reiciendis, perspiciatis incidunt illo veniam totam id magnam magni iste provident dolores ea dolore rerum eius perferendis.Dicta optio ipsam saepe eveniet ex laudantium dolorum praesentium reiciendis, in at error fuga enim, natus quibusdam, debitis cumque vero rerum excepturi quos perspiciatis obcaecati non nihil? Obcaecati, unde sapiente?Aperiam deserunt eaque iste numquam nostrum doloremque, quos voluptatum delectus blanditiis assumenda, facere beatae eveniet, sapiente obcaecati saepe distinctio ipsum at excepturi. Est rerum quod eveniet necessitatibus amet et explicabo! Autem aliquam natus quae, fugiat id sint nisi recusandae laboriosam, libero dicta amet pariatur et dolorum impedit minima excepturi cum provident fuga dolores commodi, voluptatem eveniet! Numquam iusto architecto exercitationem."

  const descriptionText =  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ratione consequuntur consectetur quidem numquam a voluptate, dolor optio? Optio tempora provident iste quam, beatae reiciendis atque nostrum maiores quos doloribus.Repudiandae minus enim optio repellat vitae omnis fugit aut dicta debitis. Exercitationem quibusdam reiciendis, perspiciatis incidunt illo veniam totam id magnam magni iste provident dolores ea dolore rerum eius perferendis.Dicta optio ipsam saepe eveniet ex laudantium dolorum praesentium reiciendis, in at error fuga enim, natus quibusdam, debitis cumque vero rerum excepturi quos perspiciatis obcaecati non nihil? Obcaecati, unde sapiente?Aperiam deserunt eaque iste numquam nostrum doloremque, quos voluptatum delectus blanditiis assumenda, facere beatae eveniet, sapiente obcaecati saepe distinctio ipsum at excepturi. Est rerum quod eveniet necessitatibus amet et explicabo! Autem aliquam natus quae, fugiat id sint nisi recusandae laboriosam, libero dicta amet pariatur et dolorum impedit minima excepturi cum provident fuga dolores commodi, voluptatem eveniet! Numquam iusto architecto exercitationem."

  const descriptionlimit = 200;
  const authorLimit = 200;

  const isToggleAuthor = () => {
    setIsAuthorReadMore(!isAuthoreReadMore)
  }

  const isToggleDescription = () => {
    setIsDescriptionReadMore(!isDescriptionReadMore)
  }

  return (
    <>
      <NavBar />
      <div className="max-w-10x2 mx-auto px-4 py-2 md:pt-10">
        <div className='flex md:hidden justify-between w-full'>
          <p className='text-2xl font-bold content-center'>Book Name</p>
          <div className='bg-slate-300 rounded-full p-2'>
            <CiShare2 className='text-black font-bold text-2xl' />
          </div>
        </div>
        <div className='md:hidden gap-3 mb-4'>
          <p><span className='font-bold mr-2'>Author:</span><span className='text-green-600 uppercase'>Munshi Premchand</span></p>
          <p><span className='font-bold mr-2'>Binding:</span><span className='text-slate-500 uppercase'>paperback</span></p>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className='md:border-r-2 md:w-[45%] md:px-4 md:pr-10'>
            <div className='flex flex-col md:flex-row gap-2'>
              <div className='order-2 md:order-1 flex flex-row md:flex-col gap-2 md:w-[15%] mx-auto md:mx-0 md:my-auto'>
                <img className='thumbnail-img' src="./images/book1.jpg" alt="slider" />
                <img className='thumbnail-img' src="./images/book2.jpg" alt="slider" />
                <img className='thumbnail-img' src="./images/book3.jpg" alt="slider" />
              </div>
              <div className='md:order-2 md:w-[85%] m-auto'>
                <img src="./images/book2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className='md:px-4 w-full'>
            <div className='hidden md:flex justify-between w-full'>
              <p className='text-2xl font-bold content-center'>Book Name</p>
              <div className='bg-slate-300 rounded-full p-2'>
                <CiShare2 className='text-black font-bold text-2xl' />
              </div>
            </div>
            <div className='hidden md:flex gap-3 mb-2'>
              <p><span className='font-bold mr-2'>Author:</span><span className='text-green-600 uppercase'>Munshi Premchand</span></p>
              <p>|</p>
              <p><span className='font-bold mr-2'>Binding:</span><span className='text-slate-500 uppercase'>paperback</span></p>
            </div>
            <div className='mb-3 hidden md:flex'>
              <p><span className='text-3xl font-bold mr-4'>₹ 99</span><span className='text-lg line-through mr-4'>₹ 399</span><span className='text-lg text-green-500 mr-4'>OFF 75%</span><span className='text-lg text-green-500 font-semibold mr-4'>You have save 300</span></p>
            </div>
            <div className='mb-3 md:hidden'>
              <p><span className='text-3xl font-bold mr-4'>₹ 99</span><span className='text-lg line-through mr-4'>₹ 399</span></p>
              <p><span className='text-lg text-green-500 mr-4'>OFF 75%</span><span className='text-lg text-green-500 font-semibold mr-4'>You have save 300</span></p>
            </div>
            <hr className='mb-2'/>
            <div>
              <p className='text-2xl font-bold mb-2'>Highlights</p>
              <div className='grid grid-cols-4 lg:grid-cols-8 gap-5 text-center mb-8'>
                <div>
                  <LiaLanguageSolid className='text-3xl m-auto'/>
                  <p className='capitalize'>English</p>
                  <p className='text-xs text-slate-400'>Language</p>
                </div>
                <div>
                  < SiPowerpages  className='text-3xl m-auto'/>
                  <p className='capitalize'>555</p>
                  <p className='text-xs text-slate-400'>Pages</p>
                </div>
                <div>
                  <SiPaperswithcode  className='text-3xl m-auto'/>
                  <p className='capitalize'>4488775588</p>
                  <p className='text-xs text-slate-400'>ISBN</p>
                </div>
                <div>
                  <AiOutlineColumnWidth  className='text-3xl m-auto'/>
                  <p>110 mm</p>
                  <p className='text-xs text-slate-400'>Width</p>
                </div>
                <div>
                  <RiExpandHeightLine  className='text-3xl m-auto'/>
                  <p>176 mm</p>
                  <p className='text-xs text-slate-400'>Height</p>
                </div>
                <div>
                  <FaWeightScale  className='text-3xl m-auto'/>
                  <p>256 gram</p>
                  <p className='text-xs text-slate-400'>Weight</p>
                </div>
                <div>
                  <FaAward  className='text-3xl m-auto'/>
                  <p className='capitalize'>Reprint</p>
                  <p className='text-xs text-slate-400'>Edition</p>
                </div>
                <div>
                  < FaBook  className='text-3xl m-auto'/>
                  <p className='capitalize'>Paperback</p>
                  <p className='text-xs text-slate-400'>Binding</p>
                </div>
              </div>
              <div className='flex gap-4 w-full md:w-1/2 mb-4'>
                <Button className='w-full border-orange-500' variant='outline'>Add to Card</Button>
                <Button className='w-full'>Buy Now</Button>
              </div>
              <div className='flex gap-4 w-full md:w-1/2 mb-2'>
                <Input placeholder='Enter Pincode' />
                <Button>Check</Button>
              </div>
              <p className='text-sm'>Enter pincode for exact delivery dates / charges and to know if express delivery is available</p>
            </div>
          </div>
        </div>
        <div className='mt-4 mb-4'>
          <p className='text-2xl font-bold'>Description</p>
          <hr />
          <p className='text-md text-justify'>
            {isDescriptionReadMore ? descriptionText : descriptionText.slice(0, descriptionlimit)}
            <span className='cursor-pointer text-blue-600 underline ml-4' onClick={isToggleDescription}>
              {isDescriptionReadMore ? "... read more" : "... show less"}
            </span>
            </p>
        </div>
        <div>
          <p className='text-2xl font-bold'>About Author</p>
          <hr />
          <p className='mb-2'><span className='text-xl font-semibold'>Author:</span><span className='text-green-500 text-xl font-bold ml-2'>Munshi Premchand</span></p>
          <p className='text-md text-justify'>
            {isAuthoreReadMore ? authorText : authorText.slice(0, authorLimit)} 
            <span className='cursor-pointer text-blue-600 underline ml-4' onClick={isToggleAuthor}>
              {isAuthoreReadMore ? "... read more" : "... show less"}
            </span>
          </p>
        </div>
      </div>
      <LatestBooks />
      <Footer />
    </>
  )
}

export default BookDetails