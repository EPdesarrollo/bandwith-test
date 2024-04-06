import mongoose from 'mongoose'; 

const connectionStatus = {
    isConnected:false
}

//  export const connectDB = async function(){
//     console.log(connectionStatus.isConnected)
//     if(connectionStatus.isConnected) return;
    
//         const db = await mongoose.connect(process.env.MONGO_URI)
//         console.log('111111111111',db.connections[0].readyState)
//         console.log('222222222222',db.connection.db.databaseName)
//         connectionStatus.isConnected = db.connections[0].readyState
//         mongoose.connection.on('connected', () => {console.log('connected')});
//         mongoose.connection.on('error',()=>{console.log('Error', err)})
   
// }

export const connectDB = async function(){
    try{
        const db = await mongoose.connect(process.env.MONGO_URI)
        // console.log('111111111111',db.connections[0].readyState)
        // console.log('222222222222',db.connection.db.databaseName)
        connectionStatus.isConnected = db.connections[0].readyState
    //    console.log('MONGODB CONNECTED')
    } catch(error){
        throw new Error('Error in conection with MongoDB', error)
    }
   
}
