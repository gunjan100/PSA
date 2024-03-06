const {Schema, model} = require('mongoose')
const { email } = require('react-admin')

const contactSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    umobile:{
        type:Number,
        required:true
    },
    uemail:{
        type:String,
        required:true
    },
    ucname:{
        type:String,
        required:true
    },
    umessage:{
        type:String,
        required:true
    }

})


const Contact = new model("Conatct", contactSchema)

module.exports = Contact;