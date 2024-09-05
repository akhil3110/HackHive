import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(
    req: Request
){
    try {
        const data = await db.challenges.findMany()
        console.log(data)

        return NextResponse.json(data)

    } catch (error) {
        console.log(error)
        return new NextResponse("Internal Error", {status: 500})
    }

}