import { NextResponse } from "next/server";

import DBCon from "@/app/libs/db";
import Todomodel from "@/app/models/Todo";

export async function POST(request){
    
    try {
        const {title,desc}=await request.json()
        await DBCon()
        if(!title || !desc){
            return NextResponse.json({success:true,message:"All fields are required",},{status:303})

        }

        const CreateNew = await Todomodel.create({
            title,desc
        })
       return NextResponse.json({success:true,message:"Todo Create Successfully",todo:CreateNew},{status:200})
    } catch (error) {
        return NextResponse.json({success:false,message:"interna server error"},{status:500})
        
    }
}



export async function GET(request) {
  try {
    await DBCon(); // Connect to MongoDB

    const todos = await Todomodel.find(); // Fetch all todos

    if (!todos || todos.length === 0) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Todos fetched successfully", data: todos },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
