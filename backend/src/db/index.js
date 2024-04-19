import mongoose from 'mongoose'

const connectDb = async()=>{
    try{
       const check= mongoose.connect(process.env.MONGODB_URI);
       console.log(`mongodb connected :: DB HOST  ${check.connection.host}`);
    }catch(err){
        console.log(`Mongodb Connection failed`);
        process.exit(1);

    }
}

export default connectDb