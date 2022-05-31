const router = require('express').Router()
let Group = require('../models/group.model')
// var uuid = require('uuid');

router.route('/').get((req, res) => {
    Group.find()
    .then((groups) => res.json(groups))
    .catch((err) => res.status(400).json('Error:' + err ))
})


router.route("/:id").get(function (req, res) {
    
    let myquery = {_id: Object( req.params.id )};

      Group
        .find(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
          
        });
   });

   router.route("panel/:panelMember").get(function (req, res) {
    
    let myquery = {panelMember: Object( req.params.panelMember )};

      Group
        .find(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
          
        });
   });

 


router.route('/add').post((req,res) => {

    // const gid = uuidv4()
    const gid= req.body.gid
    const first = req.body.first
    const email1= req.body.email1
    const second = req.body.second
    const email2= req.body.email2
    const third = req.body.third
    const email3= req.body.email3
    const forth = req.body.forth
    const email4= req.body.email4


    const newGroup = new Group({
        gid,first,email1,second,email2,third,email3,forth,email4
    })
    newGroup
        .save()
        .then(()=> res.json('Group added'))
        .catch((err) => res.status(400).json('Error:' + err))
})

module.exports = router