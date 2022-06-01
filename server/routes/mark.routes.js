const router = require('express').Router()
const Mark = require('../models/mark.model')
let Marks = require('../models/mark.model')

router.route('/').get((req, res) => {
    Marks.find()
    .then((marks) => res.json(marks))
    .catch((err) => res.status(400).json('Error:' + err ))
})

router.route('/add').post((req,res) => {
    
    const gid = req.body.gid
    // const eval=req.body.evaluation1
    // const evaluation2=req.body.evaluation2
    // const finalevaluation=req.body.finalevaluation
    const doc1="None"
    const doc2="None"
    const docfinal="None"
    const ev1Mark="None"
    const ev2Mark="None"
    const finalevMark="None"
   
       const mark = new Marks({
        gid,
        ev1Mark,
        ev2Mark,
        finalevMark,
        doc1,
        doc2,
        docfinal
        
    })
    mark
        .save()
        .then(()=> res.json('marks added'))
        .catch((err) => res.status(400).json('Error:' + err))
    

})


router.route('/update/ev1/:id').post((req, res) => {
    Mark.findById(req.params.id)
      .then((mark) => {
        mark.ev1Mark = req.body.total
      
  
        Mark.save()
          .then(() => res.json('User Updated!'))
          .catch((err) => res.status(400).json('Error: ' + err))
      })
      .catch((err) => res.status(400).json('Error: ' + err))
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