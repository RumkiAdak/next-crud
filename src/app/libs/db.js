import mongoose from "mongoose";

const DBCon=async()=>{
    try {

        mongoose.connect("mongodb+srv://chumki:1234@cluster0.rlhfooc.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0")
        console.log('Mongo DB is connected')
        
    } catch (error) {
        console.log('mongodb err', error)
        
    }
}
export default DBCon;