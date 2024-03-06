const { model, Schema } = require('mongoose')

const applicationSchema = new Schema({
    cname: {
        type: String,
        required: true
    },
    cemail: {
        type: String,
        required: true
    },
    caddress: {
        type: String,
        required: true
    },
    cwebsite: {
        type: String,
        required: true
    },
    cmobile: {
        type: String, // Assuming mobile number can be a string to include international codes
        required: true
    },
    ccertificate: {
        type: String,
        required: true
    },
    ccountry: {
        type: String,
        required: true
    }
})

const Application = model("Application", applicationSchema)

module.exports = Application
