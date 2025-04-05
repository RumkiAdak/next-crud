import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
    {
        title: {
            type: String
         
        },
        desc: {
            type: String
          
        }
    },
    { timestamps: true }
);

const Todomodel = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
export default Todomodel;
