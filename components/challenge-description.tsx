import React from 'react'

interface ChalengeDescriptionTypes {
    description: string
}

export default function ChalengeDescription({
    description
}: ChalengeDescriptionTypes) {
  return (
    <div className='md:p-10 p-4 w-full'>
       <div className=' md:w-[70%] md:pl-4 text-left'>
            {description.split('\n').map((line, index) => (
                <p key={index} className='mb-4'>{line}</p> 
            ))}
       </div>
    </div>
  )
}
