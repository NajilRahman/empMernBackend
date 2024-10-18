const empModel = require("../models/employee/empSchema")

exports.empPost=(req,res)=>{
    console.log(req.body)
    data=req.body
    empModel.create(
       {
        email:data.email,
        name:data.name,
        age:data.age,
        qualification:data.qualification,

       }
        
    )
    .then(response=>{
        res.json(response).status(200)
    })
    .catch(err=>{
        res.json(err).status(400)

    })
}


exports.empDelete=(req,res)=>{
    const {id}=req.params
    empModel.findOneAndDelete({_id:id})
    .then(response=>{
        res.json(response).status(200)
    })
    .catch(err=>{
        res.json(err).status(400)

    })
}


//empUpdate

exports.empUpdate=(req,res)=>{
    const {id}=req.params
    const data=req.body
       empModel.findOneAndUpdate({_id:id},{$set:{name:data?.name,age:data?.age,email:data?.email,qualification:data?.qualification}})
       .then(result=>{
        console.log(result)

        res.json(result).status(200)

       
    })
    .catch(err=>{
        res.json(err).status(400)

    })
}


exports.empGet=(req,res)=>{
   
       empModel.find()
       .then(result=>{
        res.json(result).status(200)
    })
    .catch(err=>{
        res.json(err).status(400)

    })
}