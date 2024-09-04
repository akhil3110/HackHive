"use client"
import { currentChallenge } from "@/lib/getData";
import ChallengeBanner from "@/components/challenge-banner"
import ChallengeTag from "@/components/challenge-tag";
import ChalengeDescription from "@/components/challenge-description";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";



const ChallengeIdPAge = async (
    {params} : {params: {challengeId: string}}
) => {

    //@ts-ignore
    const {id, challengeName, startDate, endDate, description, levelType,imageUrl} = await currentChallenge(params.challengeId)

    if(!id){
        toast.error("some thing went wrong")
        return redirect('/');
    }
    
    return ( 
        <div className="h-full w-full">
            <ChallengeBanner 
                ChallangeName= {challengeName}
                startDate = {startDate}
                level = {levelType}
            />
            <ChallengeTag />
            <ChalengeDescription 
                description= {description}
            />
            {/* <ChallengeBanner 
                ChallangeName= {"Challenge Ultimate"}
                startDate = {new Date("2024-09-13T18:30:00.000Z")}
                level = {'Medium'}
            />
            <ChallengeTag />
            <ChalengeDescription 
                description= { 'A hackathon, also known as a codefest, is a social coding event that brings computer programmers and other interested people together to improve upon or build a new software program.\n' +
                    '\n' +
                    'The word hackathon is a portmanteau of the words hacker, which means clever programmer, and marathon, an event marked by endurance. The concept of the hackathon, also called a hack day or hack fest, was born out of the open source community. The first event labeled a hackathon was the OpenBSD Hackathon in Calgary, Canada, on June 4, 1999.\n' +
                    '\n' +
                    'Today, engineering departments, especially those at web-based companies, adopt the practice to introduce intrapreneurship into the enterprise. Hackathons are sometimes undertaken to achieve a specific goal, but often they are a chance for businesses to pursue employee-driven, out-of-the-box ideas in a low-risk environment. Employees are given the freedom and support to collaborate with colleagues in other departments within a given timeframe, and without the pressure of having to produce a viable product.'}
            /> */}
        </div>
     );
}
 
export default ChallengeIdPAge;