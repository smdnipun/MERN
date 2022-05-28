const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')

require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const adminfile = require("./routes/adminfile.routes")
const markingScheme=require("./routes/markingScheme.routes")
const marks=require("./routes/mark.routes")

app.use('/adminfile', adminfile)
app.use('/markingScheme',markingScheme)
app.use('/marks',marks)
const group=require("./routes/group.routes")
const user=require("./routes/user.routes")
const topic=require("./routes/topic.routes")



app.use('/adminfile', adminfile)
app.use('/markingScheme',markingScheme)
app.use('/group',group)
app.use('/user',user)
app.use('/topic',topic)



const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})
 
app.listen(port, () => {
  // perform a database connection when server starts
  console.log(`Server is running on port: ${port}`);
});