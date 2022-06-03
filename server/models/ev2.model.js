const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ev2 = new Schema (
    {
        ev2doc: {
             type:String,
        },
        ev2pre_start: {
            type:String,
        }

    }
)

const Ev2 = mongoose.model('Ev2', ev2)
module.export = Ev2