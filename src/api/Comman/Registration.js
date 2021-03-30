import mongoose from 'mongoose'

const regSchema = new mongoose.Schema({

    userName:{
        type: String
       
    },
    Password:{
        type: String
       
    }
    
}, {
    timestamps: true
});

const model = mongoose.model('login', regSchema)


export default model