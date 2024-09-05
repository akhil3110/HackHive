import { db } from "@/lib/db"

import { NextResponse } from "next/server"

export async function GET(
    req: Request
){
    try {
        
        const { searchParams } = new URL(req.url)
        const challengeId = searchParams.get("challengeId")
        console.log("adad")

        if(!challengeId){
            return new NextResponse("Challenge Id Not provided", {status: 400})
        }

        const data = await db.challenges.findFirst({
            where: {
                id: challengeId,
            }
        })

        if(!data){
            return new NextResponse("No data found", {status: 400})
        }

        return NextResponse.json(data)

    } catch (error) {
        console.log(error)
        return new NextResponse("Internal Error", {status: 500})
    }
}

export async function DELETE(
    req: Request
){
    try {
        
        const { searchParams } = new URL(req.url)
        const challengeId = searchParams.get("challengeId")
        

        if(!challengeId){
            return new NextResponse("Challenge Id Not provided", {status: 400})
        }

       const deletedChallenge = await db.challenges.delete({
            where: {
                id: challengeId
            }
       })

        if(!deletedChallenge){
            return new NextResponse("No data found", {status: 400})
        }
        return NextResponse.json(deletedChallenge)

    } catch (error) {
        console.log(error)
        return new NextResponse("Internal Error", {status: 500})
    }
}


export async function POST(
    req: Request
){
    try {

        const data = await req.json()
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

export async function PUT(
    req: Request
){
    try {

        const data = await req.json()
        if(!data.id || !data.challengeName || !data.startDate || !data.endDate || !data.description || !data.levelType){
            return new NextResponse("Not enough data", {status: 400})
        }

        const updatedChallenge = await db.challenges.update({
            where:{
                id: data.id
            },
            data:{
                ...data
            }
        })
        return NextResponse.json(updatedChallenge)

    } catch (error) {
        console.log(error)
        return new NextResponse("Internal Error", {status: 500})
    }
}

