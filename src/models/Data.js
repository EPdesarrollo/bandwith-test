import mongoose from 'mongoose'; 

const {Schema} = mongoose;

const dataSchema = new Schema({
    
        proveedor:{
            type:String
        }
    
},{timestamps:true})

export default mongoose.models.dataDb || mongoose.model('dataDb', dataSchema)