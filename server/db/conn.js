const {MongoClient} = require("mongodb");

const Db = process.env.URI;

const client = new MongoClient(Db, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err,db){
            //verify db objects
            if (db) {
                _db = db.db("MERN");
                console.log("Successfuly connect to MongoDB.");
            }
            return callback(err);
        });
    },
};