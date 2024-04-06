import { NextResponse } from 'next/server'

export async function GET(){
    return NextResponse.json({
        message:'Task Response!'
    },{status:200})
}

export function POST(){
    return NextResponse.json({
        message:'Creando Task'
    },{status:300})
}