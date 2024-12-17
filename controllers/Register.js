import { Registerschema } from "../models/Register.js";
import bcrypt from "bcrypt";
export async function Register(req, res) {
    const { Email, PhoneNumber, Password, Name } = req.body;
    if (Name&&PhoneNumber&&Password&&Email) {
        const check2=await Registerschema.findOne({Email})
        
        if(check2)
        {
            return res
            .status(301)
            .json(
                {
                    message:"the email is already regsiter go and login not register"

                }
            )
        }
        const hashedPassword=await bcrypt.hash(req.body.Password,10);
        const newUser1=await Registerschema(
             {
                Name,
                PhoneNumber,
                Password:hashedPassword,
                Email,
             }
        )
        const check=await newUser1.save();
        if(check)
        {
            console.log(newUser1)
            return res
            .status(200)
            .json(
                 {
                    message:"the data is saved in databe",
                    newUser1,
                 }
            )
        }
         
         
    }



     
}
export async function LoginUser1(req,res) {
    const {Email,Password}=req.body
    if(Email&&Password)
    {
        const find=await Registerschema.findOne({Email});
        if(find)
        {
        const hashedPassword=find.Password;
        const check = await bcrypt.compare(Password, hashedPassword);
        if(check)
        {
            console.log(find)
            return res
            .status(200)
            .json(
                {
                    message:"the email is their in the databse",
                    find
                }
            )
        }
        else{
            return res
            .status(401)
            .json(
                {
                    message:"the password is incorrect please write the correct password"
                }
            )
        }
    }
    else{
        return res
        .status(401)
        .json(
            {
                message:"the email is not their in the daatase please login"
            }
        )
    }

    }
    else{
        return res
        .status(401)
        .json({
            message:"Please enter both email and correct password"
        })
    }
    
}
export async function  Chat_Gpt(req,res) {
    
}