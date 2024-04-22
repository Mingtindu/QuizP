import express from 'express';
import cors from 'cors'
const app = express();//creating express app:

app.use(express.json({limit:"16kb"}))
app.use(express.static("public"))
app.use(cors())


//routes::
import userRouter from './routes/user.router.js'

//routes declaration::
app.use("/api/v1/users",userRouter)//middleware:
//http://localhost:8000/api/v1/users/register
export {app};