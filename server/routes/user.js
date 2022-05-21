const express = require("express");

const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route("/user").get(function (req, res) {
  let db_connect = dbo.getDb("MERN");
  db_connect
    .collection("Student")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("Student")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
recordRoutes.route("/user/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    id: req.body.id,
    faculty: req.body.faculty,
    specialization: req.body.specialization,
    password: req.body.password,
    rpassword: req.body.rpassword
  };
  db_connect.collection("user").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();  
  let myquery = { _id: ObjectId( req.params.id )};  
  let newvalues = {    
    $set: {      
      name: req.body.name,
      position: req.body.position,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      id: req.body.id,
      faculty: req.body.faculty,
      specialization: req.body.specialization,
      password: req.body.password,
      rpassword: req.body.rpassword  
  }, } 
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("Student").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;