const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mark = new Schema(
    {
        group:{
            type:String,
            
        },
        total: {
             type:String,
          
        },
        // status:{
        //     type:String
        // }
        
           
      
    }
)

const Mark = mongoose.model('marks', mark)
module.exports = Mark