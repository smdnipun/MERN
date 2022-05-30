const router = require('express').Router()
let MarkingScheme = require('../models/markingScheme.model')

router.route('/').get((req, res) => {
    MarkingScheme.find()
    .then((markingScheme) => res.json(markingScheme))
    .catch((err) => res.status(400).json('Error:' + err ))
})

router.route("/:position").get(function (req, res) { 
    let myquery ={ 
        position: Object( req.params.position )};

      MarkingScheme
        .find(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
          
        });
   });

   router.route("/:specalization").get(function (req, res) { 
    let myquery ={ 
        position: Object( req.params.position )};

      MarkingScheme
        .find(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
          
        });
   });

   router.route('/check').post((req, res) => {
    console.log(req.body.specalization,req.body.position)
    MarkingScheme
    .find({ specalization: req.body.specalization , position:req.body.position }, function (err, result) {
      if (err) throw err
       res.json(result)
    })
})


router.route('/add').post((req,res) => {
    
       MarkingScheme.insertMany(req.body)
       .then(val=>{
           res.json('done');
       }).catch(function(error){
        console.log(error)    
    });
        
  
    

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