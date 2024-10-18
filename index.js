require('dotenv')
const express=require('express')
const cors=require('cors')
const router = require('./routes/routes')
require('./connection/connection')

const app=express()
app.use(cors())
app.use(express.json())

app.use(router)


const port=process.env.SECRET_PORT || 3000


app.listen(port,()=>{
    console.log('server running at port',port)
})