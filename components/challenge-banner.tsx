import { Clock9 } from 'lucide-react';
import React from 'react'
import { Button } from './ui/button';


interface  ChallengeBannerType{
    ChallangeName: string;
    startDate: Date;
    level: string
}

export default function ChallengeBanner({
    ChallangeName,
    startDate,
    level
}: ChallengeBannerType) {
  return (
    <div className='h-[400px] w-full bg-[#003145] text-[#F8F9FD] text-center md:text-left'>
        <div className='flex h-full items-center'>
            <div className='h-full flex items-center  md:ml-[10%]'>
                <div className='flex flex-col gap-y-8'>
                    <div className='flex text-xs text-center md:text-left md:text-base gap-x-1 font-semibold bg-[#FFCE5C] p-2 rounded-md text-black' >
                        <Clock9 className='h-6 w-5 hidden sm:block' />
                        Starts on {startDate.toDateString()} 09:00 PM (India Standard Time)
                    </div>
                    <div className='text-2xl md:text-4xl font-extrabold'>
                        {ChallangeName}
                    </div>
                    <div className='text-sm md:text-base'>
                        Get Ready for the ultimate Hackathon. And bring your imagination into Reality
                    </div>
                    <div className='w-full flex justify-center md:justify-start'>
                        <Button 
                            className='bg-[#F8F9FD] hover:bg-[#F8F9FD] flex gap-x-1 text-[#003145] font-bold' 
                            variant="secondary"
                            size="sm"
                        >
                            <img src="/carbon_skill-level-basic.svg" className='h-3 w-4' alt="" />
                            {level}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
