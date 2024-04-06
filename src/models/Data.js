import mongoose from 'mongoose'; 

const {Schema} = mongoose;

const dataSchema = new Schema({
    
        titulo:{
            type:String
        },
        imagen:{
            type:String
        }
    
},{timestamps:true})

export default mongoose.models.datadbs || mongoose.model('datadb', dataSchema)