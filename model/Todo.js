const { default: mongoose } = require("mongoose")


const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model("todo", todoSchema)