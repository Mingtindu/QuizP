import User from '../model/user.model.js';
import mongoose from 'mongoose';
import { createToken,jwtAuth } from '../authentication/jwt.js';
const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(email, name, password);
  if ([name, email, password].some((field) => !field || field.trim() === '')) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User with email already exists' });
    }

    const user = await User.create({
      name,
      email,
      password
    });
    const payload = {
      id:user.id,
      email:user.email
    }
    
    const createdUser = await User.findById(user._id).select('-password -refreshToken');
 
    if (!createdUser) {
      return res.status(500).json({ error: 'Something went wrong while registering user' });
    }
    const token = createToken(payload)
    console.log(`Token is ${token}`)
    return res.status(201).json(createdUser,{token:token});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const checkUser = async (req,res)=>{
  const {email,password} = req.body;
  console.log(email);
  if(email.trim()===""|| password.trim()===""){
    return res.status(400).send("All fields are required")
  }
  const checkUser = await User.findOne({email})
  if(checkUser){
    console.log(checkUser);
    if(password === checkUser.password){
      req.session.isAuth = true;
      // req.session.user = {
      //   name:checkUser.name,
      //   email: checkUser.email };
      //   console.log(req.session); // Debug statement to check the session object after setting it

      return res.status(201).send("login")
    }else{
      return res.status(401).send("Incorrect password")
    }

  }else{
    return res.status(404).send("User not found")
  }


}

export { addUser, checkUser };
