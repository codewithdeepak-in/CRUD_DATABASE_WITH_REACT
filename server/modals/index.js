const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true, 
    },
    address: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        validate: {
            validator: function (value) {
                return validator.isEmail(value); // Using validator's isEmail method
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    phoneNumber: {
        type: Number,
        require: true,
    }
})

const User = mongoose.model('User', userSchema);


module.exports = { User };