import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/mongoose'
import Data from '@/models/Data'
export const dynamic = 'force-dynamic'

// export function GET(){
//     connectDB()
//     const data = Data.find()
//     console.log(data)
//     return NextResponse.json({
//         message:'Good Response'
//     }, {status:200})
// }

export async function GET(){
    try{
        await connectDB()
        const data = await Data.find()
        return NextResponse.json(
            data
        , {status:200})
    } catch(error){
        return NextResponse.json({
            error
        }, {status:500})
    }
}