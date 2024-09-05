import React from 'react'
import ChallengeCard from './challenge-card'

interface initialDataTypes{
    id:string,
    challengeName: string,
    startDate: Date,
    endDate: Date,
    description: string,
    levelType: string,
    imageUrl?: string
}

interface SearchResultsTypes{
    filteredChallenges: initialDataTypes[]
}

export default function SearchResults({
    filteredChallenges
}: SearchResultsTypes) {
  return (
    <div className='w-full h-full bg-[#003145]'>
       <div className='h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-y-8'>
            {filteredChallenges.map((challenge) => (
                <div className=' col-span-1'>
                   <ChallengeCard
                        id={challenge.id}
                        challengeName={challenge.challengeName}
                        startDate={challenge.startDate}
                        endDate={challenge.endDate}
                        imageUrl={challenge.imageUrl}
                   />
                </div>
            ))}
       </div>
    </div>
  )
}
