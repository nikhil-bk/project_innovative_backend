const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({

    customer_name: {
        type: String,
        required: true,
        trim: true
    },
    customer_address: {
        type: String,
        required: true,
        trim: true
    },
    work_type: {
        type: String,
        required: true,
        trim: true
    },
    trf_capacity: {
        type: String,
        required: true,
        trim: true
    },
    issued_rr_num: {
        type: String,
        required: true,
        trim: true
    },
    divison: {
        type: String,
        required: true,
        trim: true
    },
    sub_divison: {
        type: String,
        required: true,
        trim: true
    }

},
    { timestamps: true })


module.exports = mongoose.model("project", projectSchema)