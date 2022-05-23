const mongoose = require('mongoose')

const Schema = mongoose.Schema

const markingScheme = new Schema(
   [ {
        citerion:{
            type:String,
            require:true,
        },
        vgood: {
             type:String,
             require:true,   
        },
        avg: {
            type:String,
            require:true,   
       },
       poor: {
        type:String,
        require:true,   
        },
        mark: {
         type:String,
        require:true,   
        }
    }]
)

const MarkingScheme = mongoose.model('markingScheme', markingScheme)
module.exports = MarkingScheme