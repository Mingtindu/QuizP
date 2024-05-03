import mongoose from 'mongoose'

const connectDb = async()=>{
    try{
       const check = await mongoose.connect("mongodb+srv://mingtindu:sherpa123@cluster0.tmhjkd7.mongodb.net/quiz");
       console.log(process.env.MONGODB_URI);
       console.log(`mongodb connected :: DB HOST  ${check.connection.host}`);
    }catch(err){
        console.log(`Mongodb Connection failed ${err}`);
        process.exit(1);
    }
}

export default connectDb