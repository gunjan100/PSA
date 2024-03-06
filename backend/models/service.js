const {Schema, model} = require('mongoose')


const serviceSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
     

})


const service = new model("service", serviceSchema )

module.exports = service;