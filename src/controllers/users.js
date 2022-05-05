import dbConnect from '../utils/dbconect'
import { crypto } from '../utils/password'
import UsersModel from '../models/users'


const get = async (req, res) => {
    await dbConnect()
    const users = await UsersModel.find()
    res.status(200).json({ sucess: true, users })    
}

const post = async (req, res) =>{
    const {
        name,
        email,
        password,
    } = req.body

    await dbConnect()

    const passwordCrypto = await crypto(password)

    const user = new UsersModel({
        name,
        email,
        password: passwordCrypto,
    })

    user.save()

    res.status(201).json({success: true})
}

export {
    get,
    post,
}