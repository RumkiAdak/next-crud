import mongoose from "mongoose";

const DBCon=async()=>{
    try {

        mongoose.connect(process.env.MONGODBURL)
        console.log('Mongo DB is connected')
        
    } catch (error) {
        console.log('mongodb err', error)
        
    }
}
export default DBCon;