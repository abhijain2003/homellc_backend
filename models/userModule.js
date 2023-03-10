const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const schema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    dateOfJoining: { type: Date, default: Date.now() },
    password: { type: String, required: true },
    remember: { type: Boolean, required: true }
});
const uniqueOptions = {
    message: 'Email already exists, please try another one'
};

schema.plugin(uniqueValidator, uniqueOptions);

module.exports = mongoose.model("users", schema);
