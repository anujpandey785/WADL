const express=require('express');
const { Types } = require('../db');
var router=express.Router();
var ObjectID=require('mongoose').Types.ObjectId;

var {User}=require ('../models/user');

router.get('/',(req,res)=>{
    User.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            
    console.log("Error in retriving: " + JSON.stringify(err,undefined,2));
        }
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send("No record with id");

    User.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc)}
        else{
            console.log("Error")
        }
    });
});

router.post('/',(req,res)=>{
    var user=new User({
        name:req.body.name,
        password:req.body.password,
        number:req.body.number

    });
    user.save((err,doc)=>{
        if(!err){
           res.send(doc);
        }
        else{
            console.log("Error in DB connection: " + JSON.stringify(err,undefined,2));
        }
    })
})

router.put('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send("No record with id");

    var user={
        name:req.body.name,
        password:req.body.password,
        number:req.body.number

    };
    User.findByIdAndUpdate(req.params.id,{$set:user},{new:true},(err,doc)=>{
        if(!err){
            res.send(doc);
         }
         else{
             console.log("Error in DB connection: " + JSON.stringify(err,undefined,2));
         }
    });



})

router.delete('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send("No record with id");

    User.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
         }
         else{
             console.log("Error in DB connection: " + JSON.stringify(err,undefined,2));
         }
    })
})

module.exports=router;

