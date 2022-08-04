const User = require('../models/user.js')
const bcrypt = require('bcryptjs')

// user register

exports.userRegister = async (req, res) => {
    //const confirm = await User.find({ Username: req.body.username, email: req.body.email })
    //confirm &&  res.status(400).json('this user or email exist')
    try {

        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)

        const savedUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        })
        
        const resultUser = await savedUser.save()

        res.status(200).json(resultUser)

    } catch(error) {
        res.status(500).json(error)
    }
}


exports.userLogin = async (req, res) => {
    try {
        
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(400).json('wrong user')

        const validate = await bcrypt.compare(req.body.password, user.password)
        !validate && res.status(400).json('wrong password')

        const { password, ...others } = user._doc

        res.status(200).json(others)

    } catch(error) {
        res.status(500).json(error)
    }
}