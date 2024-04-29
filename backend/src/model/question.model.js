import mongoose from 'mongoose'

const questionSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
    ch1:{
        type:String,
        required:false,
    },
    ch2:{
        type:String,
        required:true,
    },
    ch3:{
        type:String,
        required:false,
    },
})

const Question = mongoose.model("questionModel",questionSchema)
export default Question