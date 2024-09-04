import { db } from "./db";

export async function  currentChallenge(id: string){
    try {
        
        const challenge = await db.challenges.findFirst({
            where: {
                id
            }
        })

        if(!challenge){
            return {
                id: 0
            }
        }

       
        return challenge;

    } catch (error) {
        console.log(error)
        return;
    }
}