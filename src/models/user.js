const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("Age must be greater than zero.");
            }
        },
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email must be a valid email address!");
            }
        },
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 6,
        validate(value) {
            if (value == "password") {
                throw new Error("Password must not be password.");
            }
        },
    },
});

module.exports = User
