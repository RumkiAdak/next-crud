import { NextResponse } from "next/server";
import DBCon from "@/app/libs/db";
import Todomodel from "@/app/models/Todo";

export async function PUT(request,{params}){
    try {
        const id=params.id
        const {title,desc}= await request.json()
        await DBCon()
        const findtodo=await Todomodel.findById(id)
        if(!findtodo){
            
        
        return NextResponse.json({message:"Not Todo Found"},{status:404})
        }
        const updateTodo = await Todomodel.findByIdAndUpdate(id,{title,desc},{new:true})

        return NextResponse.json({message:"Todo Updated Successfully",Todo:updateTodo},{status:200})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Internal Server Error"},{status:500})
        }

        
    }


    export async function DELETE(request,{params}){
        try {
            const id=params.id
            
            await DBCon()
            const findtodo=await Todomodel.findById(id)
            if(!findtodo){
                
            
            return NextResponse.json({message:"Not Todo Found"},{status:404})
            }
            const Delete= await Todomodel.findByIdAndDelete(id)
    
            return NextResponse.json({message:"Todo Deleted Successfully",Todo:Delete},{status:200})
            
        } catch (error) {
            console.log(error)
            return NextResponse.json({message:"Internal Server Error"},{status:500})
            }
    
            
        }