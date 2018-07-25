const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jsonwt = require('jsonwebtoken')
const passport = require('passport')
const key = require('../../setup/myurl')

router.get("/", (req,res)=> res.json({test: "Auth is Success"}))

//import schema for Person to register
const Person = require('../../models/Person')

router.post('/register',(req,res)=>{
    Person.findOne({ email: req.body.email})
    .then( person => {
        if(person){
            return res.status(400).json({emailError:'Email is already Registered'})
        }else{
                const newPerson = new Person({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
                //encrypt password using bcrypt
                bcrypt.genSalt(10, (err, salt) =>{
                    bcrypt.hash(newPerson.password, salt, (err, hash)=> {
                        if(err) throw err;
                        newPerson.password = hash
                        newPerson.save()
                        .then(person => res.json(person))
                        .catch(err => console.log(err))
                        // Store hash in your password DB.
                    });
                });
        }
    })
    .catch(err => console.log(err))
})
module.exports = router
