import React from 'react'
import { Separator } from './ui/separator'


export default function InfoSection() {
  return (
    <div className='h-full sm:h-[165px] w-full  bg-[#002A3B] p-5' >
        <div className='flex w-full h-full justify-center items-center text-white'>
            <div className='mt-5 flex flex-col sm:flex-row sm:w-full justify-center gap-y-5  sm:justify-around'>
                <div className='flex gap-x-2'>
                    <div>
                        <img src='/AiCard.svg'  />
                    </div>
                    <div className='flex flex-col'>
                        <div className=' font-bold  text-xl'>
                            100K+
                        </div>
                        <div>
                            AI model submissions
                        </div>
                    </div>
                </div>
                <div>
                    <Separator className='hidden md:block h-full w-[0.5px]' orientation='vertical' />
                </div>
                <div className='flex gap-x-2'>
                    <div>
                        <img src='/data-scientist-logo.svg'  />
                    </div>
                    <div className='flex flex-col'>
                        <div className=' font-bold  text-xl'>
                            50K+
                        </div>
                        <div>
                            AI model submissions
                        </div>
                    </div>
                </div>
                <div>
                    <Separator className='hidden md:block h-full w-[0.5px]' orientation='vertical' />
                </div>
                <div className='flex gap-x-2'>
                    <div>
                        <img src='/ai-challenege-hosted-logo.svg'  />
                    </div>
                    <div className='flex flex-col'>
                        <div className=' font-bold  text-xl'>
                            100+
                        </div>
                        <div>
                            AI Challenges hosted
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
