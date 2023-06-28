const mongoose = require('mongoose')

const DriverSchema = new mongoose.Schema(
    {
        driverName:{
            type:String
        }
    },
    {
        timestamps:false,
        versionKey:false
    }
)

module.exports = mongoose.model("drivers", DriverSchema)