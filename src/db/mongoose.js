const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be greater than zero.')
            }
        }
    }, email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email must be a valid email address!')
            }
        }
    }
})

const me = new User({
    name: 'John',
    email:  'john@example.com',
})

me.save().then(() => {
    console.log(me)
}).catch(err => {
    console.log(err)
})

// const Task = mongoose.model('Task', {
//     description: String,
//     completed: Boolean
// })

// const task = new Task({
//     description: 'First mongoose task',
//     completed: true
// })

// task.save().then(() => {
//     console.log(task)
// }).then((error) => {
//     console.log(error)
// })
