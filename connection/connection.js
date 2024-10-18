const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://najil:najil@cluster0.x8avz.mongodb.net/empcrud?retryWrites=true&w=majority&appName=Cluster0')
.then(res=>{
    console.log('data base connected')
})
.catch(err=>{
    console.log('data base didnt connected')
})

