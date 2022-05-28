const router = require('express').Router()
let Topic = require('../models/topic.model')

router.route('/').get((req, res) => {
    Topic.find()
    .then((topics) => res.json(topics))
    .catch((err) => res.status(400).json('Error:' + err ))
})

router.route('/add').post((req,res) => {
    const gid = req.body.gid
    const topic = req.body.topic
    const specialization= req.body.specialization

    const newTopic = new Topic({
        gid, topic, specialization
    })
    newTopic
        .save()
        .then(()=> res.json('Topic registered'))
        .catch((err) => res.status(400).json('Error:' + err))
})

module.exports = router