
const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 2 },
    desc: { type: String, required: true, minlength: 2 },
    completed: { type: Boolean, required: false, default: false }
}, { timestamps: true })

const Task = mongoose.model('Task', TaskSchema)
console.log("task model was registered")


// const TaskSchema = new mongoose.Schema({
//     task: { type: String, required: true, minlength: 2 },
//     desc: { type: String, required: true, minlength: 2 },
//     completed: { type: Boolean, required: false, default: false }
// }, { timestamps: true })