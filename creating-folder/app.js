const fs = require("fs")
fs.mkdir("sampleFolder",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Folder Created")
    }
})