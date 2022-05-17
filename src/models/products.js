import mongoose from 'mongoose'

const filesSchema = new mongoose.Schema({
    type: String,
    path: String,
})

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'O campo "título do anúncio" é obrigatório'],
    },
    category:{
        type: String,
        required: [true, 'O campo "categoria" é obrigatório '],
    },
    description:{
        type: String,
        required: [true, 'O campo "description" é obrigatório']
    },
    price:{
        type: Number,
        required: [true, 'O campo "number" é obrigatório']
    },
    user:{
        id: String,
        name: String,
        email: String,
        phone: String,
        image: String,        
    },
    files:{
        type: [filesSchema],
        default: undefined
    }
})

export default mongoose.models.users || mongoose.model('products', schema)