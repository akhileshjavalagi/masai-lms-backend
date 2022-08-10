const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema(
    {
        heading : {type : String, require : true},
        description : {type : String, require: true},
        link : {type : String, reqiure : true, unique : true}
    },
    {
        versionKey : false,
        timestamps : true
    }
)

const Lecture = mongoose.model("lecture", lectureSchema);

module.exports = Lecture;