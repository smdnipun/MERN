const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ev1 = new Schema (
    {
        ev1doc:{
            type:String,
        },
        ev1pre_start:{
            type:String,
        }
    }
)

const Ev1 = mongoose.model('Ev1', ev1)
module.export = Ev1