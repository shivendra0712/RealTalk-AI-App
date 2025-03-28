import mongoose from "mongoose";
import bcrypt, { hash } from 'bcryptjs'
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        minLength:[6,'Email must be at least 6 character long'],
        maxLength:[30,'Email must be at longer 30 character long'],
    },
    password:{
        type:String
    }
})

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateJwt = async function () {
    return jwt.sign({email:this.email},process.env.SECRET_Key)
}

const userModel = mongoose.model('user' ,userSchema);

export default userModel;