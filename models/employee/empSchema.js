const mongoose=require('mongoose')

const empSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    age:{
        type:Number,
    },
    qualification:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now()
    },
})

const empModel=new mongoose.model('emp',empSchema)

module.exports=empModel