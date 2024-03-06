const {model, Schema } = require('mongoose')

const clientSchema = new Schema({

    cname:{
        type:String,
        require:true
    },
    cAddress:{
        type:String,
        require:true
    },
    activity:{
        type:String,
        require:true
    },
    cIssueDate:{
        type:Date,
        require:true
    },
    cExpDate:{
        type:Date,
        require:true
    },
    surr1st:{
        type:Date,
        require:true
    },
    surr2nd:{
        type:Date,
        require:true
    },
    certName:{
        type:String,
        require:true
    },
    certStatus:{
        type:String,
        require:true
    },
    cqNo:{
        type:String,
        require:true,
        unique: true // Add unique constraint
    },
    certName:{
        type:String,
        require:true,
       
    },



})

clientSchema.index({ cqNo: 1 }, { unique: true }); // Create unique index
const Client = new model('Client', clientSchema)
module.exports = Client;