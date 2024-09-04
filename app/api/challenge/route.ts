import { db } from "@/lib/db"

import { NextResponse } from "next/server"


export async function POST(
    req: Request
){
    try {

        const data = await req.json()
        console.log(data)
        if(!data.challengeName || !data.startDate || !data.endDate || !data.description || !data.levelType){
            return new NextResponse("Not enough data", {status: 400})
        }

        const newChallenge = await db.challenges.create({
            data:{
                ...data       
            }
        })

        return NextResponse.json(newChallenge)

    } catch (error) {
        console.log(error)
        return new NextResponse("Internal Error", {status: 500})
    }
}