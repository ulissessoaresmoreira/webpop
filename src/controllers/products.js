import formidable from 'formidable-serverless'
import ProductsModel from '../models/products'
import dbConnect from '../utils/dbconect'

const post = async (req, res) => {
    await dbConnect()

    const form = new formidable.IncomingForm()

    form.parse(req, (error, fields, data) => {
        console.log('chegou no form parses')
        

        res.status(200)
    })
}

export {
    post,
}

