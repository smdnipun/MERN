const router = require('express').Router()
let MarkingScheme = require('../models/markingScheme.model')

router.route('/').get((req, res) => {
    MarkingScheme.find()
    .then((markingScheme) => res.json(markingScheme))
    .catch((err) => res.status(400).json('Error:' + err ))
})

router.route('/add').post((req,res) => {
    const citerion = req.body.citerion
    const vgood = req.body.vgood
    const avg=req.body.avg
    const poor=req.body.poor
    const mark=req.body.mark 

    const newadminfile = new MarkingScheme([{
        citerion,
        vgood,
        avg,
        poor,
        mark
    }])
    newadminfile
        .save()
        .then(()=> res.json('markingScheme added'))
        .catch((err) => res.status(400).json('Error:' + err))
})

// router.route('/:id').get((req, res) => {
//     Exercise.findById(req.params.id)
//       .then((exercise) => res.json(exercise))
//       .catch((err) => res.status(400).json('Error: ' + err))
//   })
  
//   router.route('/:id').delete((req, res) => {
//     Exercise.findByIdAndDelete(req.params.id)
//       .then(() => res.json('Exercise deleted.'))
//       .catch((err) => res.status(400).json('Error: ' + err))
//   })
  
//   router.route('/update/:id').post((req, res) => {
//     Exercise.findById(req.params.id)
//       .then((exercise) => {
//         exercise.username = req.body.username
//         exercise.description = req.body.description
//         exercise.duration = Number(req.body.duration)
//         exercise.date = Date.parse(req.body.date)
  
//         exercise
//           .save()
//           .then(() => res.json('Exercise Updated!'))
//           .catch((err) => res.status(400).json('Error: ' + err))
//       })
//       .catch((err) => res.status(400).json('Error: ' + err))
//   })


module.exports = router