const router = require('express').Router()
let Group = require('../models/group.model')
// var uuid = require('uuid');


router.route('/').get((req, res) => {
    Group.find()
    .then((groups) => res.json(groups))
    .catch((err) => res.status(400).json('Error:' + err ))
})

router.route('/check').post((req, res) => {
    console.log(req.body.email)
    Group
    .find({ email1: req.body.email} || { email2: req.body.email} || { email3: req.body.email} || { email4: req.body.email}, function (err, result) {
      if (err) throw err
       res.json(result)
    })
})

router.route("/:id").get(function (req, res) {
    
    let myquery = {_id: Object( req.params.id )};

      Group
        .find(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
          
        });
   });

router.route('/add').post((req,res) => {

    // const gid = uuidv4()
    const gid= req.body.gid
    const specialization= req.body.specialization
    const first = req.body.first
    const email1= req.body.email1
    const second = req.body.second
    const email2= req.body.email2
    const third = req.body.third
    const email3= req.body.email3
    const forth = req.body.forth
    const email4= req.body.email4
    const supervisor= req.body.supervisor;
    const co_supervisor=req.body.co_supervisor;
    const panelMember= req.body.panelMember;

    const newGroup = new Group({
        gid,specialization,first,email1,second,email2,third,email3,forth,email4,supervisor, co_supervisor, panelMember
    })
    newGroup
        .save()
        .then(()=> res.json('Group added'))
        .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/update/:id').post((req, res) => {
  Group.findById(req.params.id)
    .then((groups) => {
      groups.panelMember = req.body.panelMember
      
      groups
        .save()
        .then(() => res.json('Panel Member Allocated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})



module.exports = router