import jwt from 'jsonwebtoken'

//middleware for authentication::
const jwtAuth = (req,res,next)=>{
    //Extract the jwt web token from the request headers:
    const token = req.headers.authorization.split('')[1];
    if(!token) return res.status(401).json({error:"unauthorized"})

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();

    }catch(err){
        console.log(err);
        return res.status(401).json({error:"unauthorized"})

    }

}

export {jwtAuth}