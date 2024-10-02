const audioSchema = require("../Schemas/AudioSchema.jsx");

const Audio = class {
    filename;
    contentType;
    data;
    surah;
    ayah;
    tag;
    qari;

    constructor(name,mimeType,data,surah,ayah,tag,qari){ 
        this.filename = name
        this.contentType = mimeType
        this.data = data
        this.surah = surah
        this.ayah = ayah
        this.tag = tag
        this.qari = qari
    }
     
    saveFile(){
        return new Promise(async(resolve,reject)=>{

            const fileObj = new audioSchema({
                filename: this.filename,
                contentType: this.contentType,
                data: this.data,
                surah: this.surah,
                ayah: this.ayah,
                tag: this.tag,
                qari: this.qari
              });

              try{
              const fileDb = await fileObj.save()
              console.log('fileDb::',fileDb)
              resolve(fileDb)
              }
              catch(error){
              reject(error)
              }

            }
        )
    }
  
   static getSingleAudio({id}){
         return new Promise(async(resolve,reject)=>{

            const fileObj = await audioSchema.findById({_id:id});

            console.log('single: ',fileObj)
              try{
               resolve(fileObj)
              } 
              catch(error){
              reject(error)
              }

            }
        )
    }

   static getPlaylist(){
         return new Promise(async(resolve,reject)=>{

            const fileObj = await audioSchema.find();

               try{
               resolve(fileObj)
              } 
              catch(error){
              reject(error)
              }

            }
        )
    }
      
} 

module.exports = Audio