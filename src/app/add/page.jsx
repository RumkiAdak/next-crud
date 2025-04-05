"use client";
import { useState } from "react";
import React from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'




export default function page() {
  const [value,setValue]=useState({
    title:"",
    desc:""
  })
  const{push}=useRouter()
  const handleOnChange=(e)=>{
    setValue({
      ...value,
      [e.target.name]:e.target.value
    })


  }
  const handleSubmit=async()=>{
    try {
      const request=await axios.post('/api/todo',value)
      const response= request.data
      if (request.status==200) {
        toast.success(response.message)
          
          push('/')
        
      }
    } catch (error) {
        console.log(error)
        if (error.response) {
            toast.error(error.response.data.message)
          
          }
        
    }
}
  return (
    <div className='h-screen flex justify-center'>
        <div className='mt-8 flex flex-col p-10 bg-purple-500 h-80 rounded-lg gap-8'>
            <h1 className='text-white font-bold text-2xl'> Add Todo</h1>
            <label className="relative block">
  
  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
   
  </span>
  <input   className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter you title" type="text" 
    name='title' onChange={handleOnChange} />
</label>
<label className="relative block">
  
  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
   
  </span>
  <input  name='desc' onChange={handleOnChange}  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter you description" type="text"/>
</label>

   <button className='rounded-lg bg-green-400 px-4 py-2 text-white font-bold  ' onClick={handleSubmit}>Submit</button>
            
        </div>
    </div>
  )
}