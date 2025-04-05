
"use client";
import React, { useEffect, useState } from 'react'

import { FaPen, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal';
import axios from 'axios';
import toast from 'react-hot-toast';



export default function Page() {
  const [todo, setTodo] = useState([])
  const[showmodal,setShowmodal]=useState(false)
  const[todoId,setTodoId]=useState(``)
  const [refresh,setRefresh]=useState(false)
  
  if (todo) {
    console.log('todo', todo)

  }
  const { push } = useRouter()

  useEffect(() => {
    const GetTodo = async () => {
      try {
        const request = await axios.get('/api/todo')
        const response = request.data
        setTodo(response.data)
        console.log('todo', response)

      } catch (error) {
        console.log(error)

      }
    }
    GetTodo()
  }, [refresh])


  const handleDelete = (Id) => {
    setTodoId(Id)
    setShowmodal(true)
  }



  const handlenavigate = () => {
    push("/add")
  }
  const handleupdate = (id) => {
    push(`/edit/${id}`)
  }
     const handleSubmit=async()=>{
       try {
         if(todoId){
           const request=await axios.delete(`/api/todo/${todoId}`)
         const response= request.data
         if (request.status==200) {
           toast.success(response.message)
             
             push('/')
             setShowmodal(false)
             setRefresh(true)
         }
           
         }
       } catch (error) {
           console.log(error)
          
             }
           
       }
  return (
    <>
    <Modal isvisable={showmodal} onClose={()=>setShowmodal(false)} handleDeleteTodo={handleSubmit}/>
      <div className='flex justify-center items-center'>
        <div className='bg-yellow-200 w-2/4 flex flex-col gap-8 rounded-lg shadow-xl mt-10 p-5'>
          <div className='flex justify-between item-center w-full'>
            <h1 className='font-bold text-3xl'> TODO LIST</h1>
            <button className=' bg-purple-500 rounded-none px-4 py-2 text-white flex items-center ' onClick={handlenavigate}>Add

              <FaPlus className='ml-2' />
            </button>
          </div>
         
          {todo && todo.map((elem) => {
            return (

              <div className="flex justify-between items-center w-full border-b-4 border-b-purple-500 rounded-xl p-2">


                <div className='flex gap-1 flex-col w-60'>
                  <h1 className='font-bold text-1xl'>{elem.title}</h1>
                  <p className='text-sm'>{elem.desc}</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-2'>
                  <MdDelete size={23} color='red' cursor={"pointer"} onClick={()=>handleDelete(elem._id)}/>
                  <FaPen size={20} cursor={"pointer"} onClick={()=>handleupdate(elem._id)} />
                </div>


              </div>

            )
          })}
       

        </div>
      </div>
    </>
  )
}