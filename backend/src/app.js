import express from 'express';
import session from 'express-session';
import MongoDBSessionStore from 'connect-mongodb-session';
import cors from 'cors';

const app = express();

// Initialize MongoDBStore
// const MongoDBStore = MongoDBSessionStore(session);
// const store = new MongoDBStore({
//   uri: 'mongodb+srv://mingtindu:sherpa123@cluster0.tmhjkd7.mongodb.net/quiz', // MongoDB connection URI
//   collection: 'sessions' // Collection name for storing sessions
// });

// Catch errors
// store.on('error', function(error) {
//   console.error('Session store error:', error);
// });

// Set up session middleware
// app.use(session({
//   secret: 'your-secret-key', // Change this to a secure random string
//   resave: false,
//   saveUninitialized: false,
//   store: store // Use MongoDBStore for session storage
// }));
///Authentication::::::::::::::::::::::::::::::
// const isAuth = (req,res,next)=>{
//   if(req.session.isAuth){
//     next()
//   }else{
    
//   }


// }
app.use(express.json({limit:"16kb"}))
app.use(express.static("public"))
app.use(cors())
app.get('/check-session', (req, res) => {
  console.log(req.session); // Debug statement to inspect req.session
  if (req.session && req.session.user) {
    // Session exists and contains user data
    res.send('Session exists');
  } else {
    // Session does not exist or user data is not present
    res.send('Session does not exist');
  }
});



//routes::
import questionRouter from './routes/question.router.js'
import userRouter from './routes/user.router.js'

//routes declaration::
app.use("/api/v1/questions",questionRouter)
app.use("/api/v1/users",userRouter)//middleware:
//http://localhost:8000/api/v1/users/register
export {app};