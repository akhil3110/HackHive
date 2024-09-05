"use client"
import ChallengeBanner from "@/components/challenge-banner"
import ChallengeTag from "@/components/challenge-tag";
import ChalengeDescription from "@/components/challenge-description";
import { useEffect, useState } from "react";
import axios from "axios";

interface initialDataTypes{
    id:string,
    challengeName: string,
    startDate: string,
    endDate: string,
    description: string,
    levelType: string,
    imageUrl?: string
}



const ChallengeIdPAge =  (
    {params} : {params: {challengeId: string}}
) => {

    const [initaialData, setInitialData] = useState<initialDataTypes | null>(null)

    useEffect(() =>{
        const getInitialData = async() =>{
           try {
               const response = await axios.get('/api/challenge',{
                    params: {
                        challengeId: params.challengeId
                    }
               })
               
               const data = response.data;
               setInitialData(data);
               console.log(data)
           } catch (error) {
                console.log(error)
           }
        }

        getInitialData()

    },[])

    if (!initaialData) {
        return <div>Loading...</div>; // or any other loading UI
      }

    return ( 
        <div className="h-full w-full">
            <ChallengeBanner 
                 ChallangeName= {initaialData!.challengeName}
                startDate = {initaialData!.startDate}
                 level = {initaialData!.levelType}
            />
             <ChallengeTag 
                 id = {params.challengeId}
             />
             <ChalengeDescription 
                 description= {initaialData!.description}
            />
            {/* <ChallengeBanner 
               ChallangeName= {"Challenge Ultimate"}
               startDate = {new Date("2024-09-13T18:30:00.000Z")}
                level = {'Medium'}
            />
            <ChallengeTag
                id={params.challengeId}
            />
            <ChalengeDescription 
               description= { 'A hackathon, also known as a codefest, is a social coding event that brings computer programmers and other interested people together to improve upon or build a new software program.\n' +
                    '\n' +
                    'The word hackathon is a portmanteau of the words hacker, which means clever programmer, and marathon, an event marked by endurance. The concept of the hackathon, also called a hack day or hack fest, was born out of the open source community. The first event labeled a hackathon was the OpenBSD Hackathon in Calgary, Canada, on June 4, 1999.\n' +
                     '\n' +
                     'Today, engineering departments, especially those at web-based companies, adopt the practice to introduce intrapreneurship into the enterprise. Hackathons are sometimes undertaken to achieve a specific goal, but often they are a chance for businesses to pursue employee-driven, out-of-the-box ideas in a low-risk environment. Employees are given the freedom and support to collaborate with colleagues in other departments within a given timeframe, and without the pressure of having to produce a viable product.'}
            />  */}
        </div>
     );
}
 
export default ChallengeIdPAge;