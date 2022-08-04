const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path')
const app = express()

//routes 
const userAuth = require('./routes/user.auth.route.js')
const post = require('./routes/post.route.js')

dotenv.config()



mongoose.connect("mongodb://localhost:27017/blogsite")
    .then(console.log('DATABASE CONNECTED'))
    .catch((error) => console.log(error))

app.use(express.json())    
app.use('/api', userAuth)
app.use('/api', post)

app.listen(process.env.PORT, () => console.log(`Server is running on http://localhost:${process.env.PORT}`))