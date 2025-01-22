
import { json, Router } from "express";
import mongoose, { connect } from "mongoose";
const route=Router();
//define User Schema
const taskSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
    trim: true
    },
    description: {
    type: String,
    required: true
    },
    status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
        },
    createdAt: {
        type: Date,
        default: Date.now
        }
        });
mongoose.connect('mongodb://localhost:27017/Task')

//create Model
const  task = mongoose.model('Taskdetails',taskSchema);
 route.post('/tasks' , async(req,res)=>{
    const data = req.body;
    const {title,description,status,priority,createdAt}= data;
    const role =req.userType;
                       const newtask= new task({
                       title:title,
                       description:description,
                       status:status,
                       priority:priority,
                       createdAt:createdAt
                   })
                   await newtask.save(); 
                   console.log("task added successfully")
                     res.status(201).json({message:"task added successfully"})  
               })
route.get('/tasks', async(req,res)=>{
            const alltask = await task.find({});
            if (alltask.length > 0) 
                                {
                                console.log("All task data found:");
                                console.log(alltask);
                                res.status(200).json(alltask);  // Send all task data as JSON
                                } else {
                                console.log("No task found.");
                                res.status(404).json({ message: 'No task found' });
                                }
                })


export{route};