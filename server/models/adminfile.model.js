const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adminfiles = new Schema(
    {
        name:{
            type:String,
           
        },
        description: {
             type:String,
          
        },
        filepdf:{
            type:String,
        }
    }
)

const Adminfile = mongoose.model('Adminfile', adminfiles)
module.exports = Adminfile