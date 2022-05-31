const express = require('express');
const router = express.Router()
const multer = require("multer")
const File = require('../models/adminfile.model');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "upload");
// destination: "upload",
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
}) 

const upload = multer({storage: storage});

//GET ALL DATA
router.get("/get", (req, res) => {
  File.find()
    .then((file) => res.json(file))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//ADD NEW DATA
router.post("/add", upload.single("file"), (req, res) => {
  const newfile = new File({
    name: req.body.name,
    description: req.body.description,
    filepdf: req.file.originalname,
  });

  newfile
    .save()
    .then(() => res.json("new file posted.."))
    .catch((err) => res.status(400).json(`Error: ${err}`));

});

//GET DATA BY ID
router.get("/:id", (req, res) => {
  File.findById(req.params.id)
  .then((file) => res.json(file))
  .catch((err) => res.status(400).json(`Error: ${err}`));
});




// const Storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     cb(null, Math.random() + file.originalname);
//   },
// });

// const upload = multer({ storage: Storage });

// router.route('/').get((req, res) => {
//     Adminfile.find()
//     .then((adminfiles) => res.json(adminfiles))
//     .catch((err) => res.status(400).json('Error:' + err ))
// })

// router.route('/add', upload.single("uplaoded_image")).post((req,res) => {
//     const name = req.body.name
//     const description = req.body.description
//     const file = req.body.originalname
    // const file = req.body.file.path.replace(/\\/g, "/");

    // const newadminfile = new Adminfile({
    //     name,
    //     description,
    //     file,
    // })
    // console.log(req.body.data)
    // res.json(req.body.data.name)
    // newadminfile
    //     .save()
    //     .then(()=> res.json('Adminfile added'))
    //     .catch((err) => res.status(400).json('Error:' + err))
// })
module.exports = router