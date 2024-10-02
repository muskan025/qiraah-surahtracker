const mongoose = require('mongoose')

const audioSchema = new mongoose.Schema({

    filename:{
        type:String,
        required:true
    },
    contentType:{
        type:String,
        required:true
    },
    data:{
        type:Buffer,
        required:true
    },
    surah:{
        type:String,
        required:true
    },
    ayah:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    }, 
    qari:{
        type:String,
        required:true
    },
},{ timestamps: true })

 module.exports = mongoose.model('playlist',audioSchema)