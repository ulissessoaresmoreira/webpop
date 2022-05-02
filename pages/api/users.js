import dbConnect from '../../src/utils/dbconect'
import UsersModel from '../../src/models/users'

const users = async (req, res) => {
    const { method } = req

    switch(method) {
        case 'GET':
            await dbConnect()
            res.status(200).json({ sucess: true })
            break

        case 'POST':
            const {
                name,
                email,
                password,
            } = req.body

            await dbConnect()

            const user = new UsersModel({
                name,
                email,
                password,
            })

            user.save()

            res.status(201).json({success: true})
    }
}

export default users