import dbConnect from '../../src/utils/dbconect'

const users = async (req, res) => {
    const { method } = req

    switch(method) {
        case 'GET':
            await dbConnect()
            res.status(200).json({ sucess: true })
            break
    }
}

export default users