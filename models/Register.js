import mongoose from "mongoose";
const Register=mongoose.Schema({
    Name:
    {
        type:String,
        required:true,


    },
    Email:
    {
        type:String,
        required:true,
        unique:true,
    },
    Password:
    {
        type:String,
        required:true,


    },
    PhoneNumber:
    {
        type:Number,
        required:true,
    }
},{timestamps:true})
export const Registerschema=mongoose.model("Registerschemachat",Register);
