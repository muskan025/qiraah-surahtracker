const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const AudioRouter = require('./Controllers/AudioController');
const fileUpload = require('express-fileupload');
require("dotenv").config();

const PORT = 8000
const app = express()

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }, 
  }));
app.use(cors({
    origin: 'https://qiraah.vercel.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));



mongoose.connect(process.env.MONGO_URI)
.then(()=>{
console.log('MongoDB connected')
}).catch((error)=>{ 
    console.log(error) 
}) 


app.get('/',(req,res)=>{
 console.log("Server is running")
    return res.send({ 
        status:200,
        message:'This is home route'
    })
})

app.use('/audio',AudioRouter)

app.listen(PORT,()=>{
    console.log(`https://qiraah-backend.vercel.app`)
})
