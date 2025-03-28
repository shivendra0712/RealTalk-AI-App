
import userModel from "../models/user.model.js";

const createUser = async ({
    email, password
}) => {
    if (!email || !password) {
        throw new Error('Email and Password are required')
    }

    const hashPassword = await userModel.hashPassword(password);
    const user = userModel.create({
        email,
        password: hashPassword
    })

    return user;
}

export default createUser;