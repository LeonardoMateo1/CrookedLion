import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
        validate: {
            validator: val => /^([\w-.]+@([\w-]+.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;