const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
    {
        name : {type : String, require : true},
        username : {type : String, require : true},
        password : {type : String, require : true, unique : false}
    },
    {
        versionKey : false,
        timestamps : true
    }
)

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
