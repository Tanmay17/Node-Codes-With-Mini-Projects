const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    username:{
        type: String
    },
    profilepic:{
        type: String,
        default: 'https://learncodeonline.in/manicon.png'
    },
    date:{
        type: String,
        default: Date.now
    }
})

module.exports = Person = mongoose.model('myPerson', personSchema)