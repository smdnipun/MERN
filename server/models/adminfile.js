const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adminfiles = new Schema(
    {
        name:{
            type:String,
            require:true,
        },
        description: {
             type:String,
             require:true,   
        }
    }
)

const Adminfile = mongoose.model('Adminfile', adminfiles)
module.exports = Adminfile