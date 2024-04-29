import Question from '../model/question.model'
import mongoose from 'mongoose'

//question add ::

const addQuestion = async (req,res)=>{

    //acception frontend :
    const {name,category,ch1,ch2,ch3} = req.body

    //checking if the data is empty or not 
    if(name===""){
        return res.status(400).send("Name field is required")
    }else if(category===""){
        return res.status(400).send("Category field is required")

    }else if(ch1===""||ch2===""||ch3===""){
        return res.status(400).send("All choice field  is required")
    }

    const question = await Question.create({
        name,
        category,
        ch1,
        ch2,
        ch3
    })
    if(question){
        console.log(question);
        return res.status(200).send("Successfully added question")
    }else{
        return res.status(401).send("Something went wrong while adding question")

    }


}