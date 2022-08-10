const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
    {
    heading : {type : String, require : true },
    description : {type : String, require : true},
    question : {type : String, require : true},
    questionExplaination : {type : String, require : true}
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const Assignment = mongoose.model("assignment", assignmentSchema)

module.exports = Assignment;