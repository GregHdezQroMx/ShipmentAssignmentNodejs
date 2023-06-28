const mongoose = require('mongoose')

const ShipmentSchema = new mongoose.Schema(
    {
        id:{
            type:Int8Array,
            unique:true
        },
        streetName:{
            type:String
        },
        city:{
            type:String
        }, 
        state:{
            type:String
        },
        zipCode:{
            type:Int8Array
        }
    },
    {
        timestamps:false,
        versionKey:false
    }
)

module.exports = mongoose.model("shipments", ShipmentSchema)