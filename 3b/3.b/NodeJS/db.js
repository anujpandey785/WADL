const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/CRUdDB',(err)=>{
    if(!err)
    console.log("Mongo connection done");
    else
    console.log("Error in DB connection: " + JSON.stringify(err,undefined,2));
});

module.exports=mongoose;

