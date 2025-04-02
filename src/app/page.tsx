
"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaPen, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

export default function page() {
  const{push}=useRouter()
  const handlenavigate=()=>{
    push("/add")
  }
  const handleupdate=()=>{
    push("/edit/id")
  }
  return (
    <>
    <div className='flex justify-center items-center'>
      <div className='bg-yellow-200 w-2/4 flex flex-col gap-8 rounded-lg shadow-xl mt-10 p-5'>
      <div className='flex justify-between item-center w-full'>
        <h1 className='font-bold text-3xl'> TODO LIST</h1>
        <button className=' bg-purple-500 rounded-none px-4 py-2 text-white flex items-center 'onClick={handlenavigate}>Add
       
          <FaPlus className='ml-2' />
        </button>
      </div>
      <div className="flex justify-between items-center w-full border-b-4 border-b-purple-500 rounded-xl p-2">

        <div className='flex gap-1 flex-col w-60'>
          <h1 className='font-bold text-1xl'>Title</h1>
          <p className='text-sm'>Description</p>
        </div>
        <div className='flex justify-center items-center flex-col gap-2'>
          <MdDelete size={23} color='red' cursor={"pointer"}/>
        <FaPen size={20} cursor={"pointer"} onClick={handleupdate}/>
        </div>

      </div>
      <div></div>
      </div>
    </div>
    </>
  )
}