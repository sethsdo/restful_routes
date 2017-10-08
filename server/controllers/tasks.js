
'use strict'

const mongoose = require('mongoose')
const Task = mongoose.model('Task')

module.exports = {
    show: function (req, res) {
        const task = Task.find({}).exec(function (err, task) {
            console.log(task)
            if (err) { console.log("something went wrong!") }
            res.send(task)
        })
    },
    create: function (req, res) {
        const task = new Task({ title: req.params.title, desc: req.params.desc, completed: req.params.completed })
        task.save(function (err) {
            if (err) { console.log("something went wrong!") }
            res.redirect('/')
        // task.save(function (err) {
        //     console.log(task)
        //     if (err) { console.log("something went wrong!") }
        //     res.redirect('/')
        })
    },
    update: function (req, res) {
        const task = Task.findById({ _id: req.params._id }).exec(function (err, task) {
            if (err) { console.log("something went wrong!") }
            else {
                task.title = req.params.title || task.title;
                task.desc = req.parms.desc || task.desc;
                task.completed = req.params.completed || task.completed;

                task.save((err, task) => {
                    if (err) {
                        res.status(500).send(err)
                    }
                    res.status(200).send(task);
                });

            }
            res.send(task)
        })
    },
    remove: function (req, res) {
        Task.remove({ _id: req.params.id }, function (err) {
            if (err) { console.log("something went wrong!") };
            res.redirect('/')
        })
    },
    showId: function (req, res) {
        const task = Task.findById({ _id: req.params.id }).exec(function (err, task) {
            if (err) { console.log("something went wrong!") }
            res.send(task)
        })
    }
}