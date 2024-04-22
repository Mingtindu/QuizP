import User from './model/user.model.js'
import mongoose from 'mongoose';

const addUser =async ((req,res)=>{
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res
    const {name,email,password} = req.body;
    if (
        [name, email, phone, password].some((field) => field?.trim() === "")
    ) {
        throw new Error(400, "All fields are required")
    }
    const exitedUser=User.findOne({email})})
    if(exitedUser){
        throw Error(409,"User with email already exist");
    }

    const user= await User.create({
        name,
        email,
        password
    })

    const createdUser = await User.findByID(user._id).select(
        "-password -refreshToken"

    )
    if(!createdUser){
        throw Error(500,"Something went wrong while registering user")
    }
    return res.status(201).json({createdUser});



    

export {addUser}