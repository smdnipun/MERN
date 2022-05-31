const router = require('express').Router()
let Schedule = require('../models/schedule.model')

router.route('/').get((req, res) => {
    Schedule.find()
    .then((marks) => res.json(marks))
    .catch((err) => res.status(400).json('Error:' + err ))
})

router.route('/add').post((req,res) => {
    
    const evaluation1 = req.body.evaluation1
    const evaluation2 = req.body.evaluation2;
    const final_evaluation=req.body.final_evaluation
    const groupID=req.body.groupID

    const mark = new Schedule({
        evaluation1,
        evaluation2,
        final_evaluation,
        groupID
    })
    mark
        .save()
        .then(()=> res.json('marks added'))
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