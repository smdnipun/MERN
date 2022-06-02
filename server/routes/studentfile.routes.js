const express = require('express')
const router = express.Router()
const multer = require('multer')
const SFile = require('../models/studentfile.model')

const storage =multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'supload')
    },
    filename : (req, file, callback) => {
        callback(null, file.origanalname)
    },
})

const supload = multer({ storage: storage})

//GET ALL DATA
router.get('/get', (req, res) => {
    SFile.find()
        .then((file) => {
            res.json(file)
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

//ADD NEW DATA
router.post('/add', upload.single('file'), (req, res) => {
    const newfile = new SFile({
        ev1doc : req.body.ev1doc,
        ev1pre_start: req.body.ev1pre_start,
        ev1pre_end: req.body.ev1pre_end,
        ev2doc : req.body.ev2doc,
        ev2pre_start : req.body.ev2pre_start,
        ev2pre_end: req.body.ev2pre_end,
        ev3doc : req.body.ev3doc,
        ev3pre_start : req.body.ev3pre_start,
        ev3pre_end: req.body.ev3pre_end,
    });

    newfile 
        .save()
        .then(() => res.json('new student file posted'))
        .catch((err) => res.status(400).json(`Error : ${err}`))
});