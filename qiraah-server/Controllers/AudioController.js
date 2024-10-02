const express = require('express');
const Audio = require('../Models/AudioModel')

const AudioRouter = express.Router()

AudioRouter.post('/upload',async(req,res)=>{
   
    console.log("upload:",req.body)

    const {surah,ayah,qari,tag} = req.body

    try {
        if (!req.files || Object.keys(req.files).length === 0) {
          return res.send({
            status:400,
            message:"No files were uploaded"
          });
        }
    
        const audioFile = req.files.file;
    
        const newAudio = new Audio(audioFile.name,audioFile.mimetype,audioFile.data,surah,ayah,tag,qari)
        const newAudioDb = await newAudio.saveFile();
    
        res.status(200).json({ 
          message: 'File uploaded successfully',
          fileId: newAudioDb._id 
        });
      } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ message: 'Error uploading file' });
      }
    }); 


AudioRouter.post('/singleAudio',async(req,res)=>{
   
    const {id} = req.body
   
    try {
        const audioFilesDb =  await Audio.getSingleAudio({id}); 
        
        res.send({
            status:200,  
            message:'read success',
            data:audioFilesDb
        })
      } catch (error) {
        console.error('Error fetching audio files:', error);
        res.send({
            status:500,
            message:'Error fetching audio files',
         
        })
       }
})
AudioRouter.get('/playlist',async(req,res)=>{
    
    try {
        const audioFilesDb = await Audio.getPlaylist();  
        
        res.send({
            status:200,
            message:'read success',
            data:audioFilesDb
        })
      } catch (error) {
        console.error('Error fetching audio files:', error);
        res.send({
            status:500,
            message:'Error fetching audio files',
         
        })
       } 
})


module.exports = AudioRouter  