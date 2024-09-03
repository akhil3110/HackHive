"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function HeroSection() {

    const router = useRouter();

  return (
    <div className='h-[100%] md:h-[500px] bg-[#003145] text-white'>
        <div className=' w-full h-full flex flex-col md:grid md:grid-cols-5 '>
            <div className=' md:col-span-3'>
                <div className='h-full w-full flex justify-center md:justify-end items-center'>
                <div className='hidden absolute top-[20%] left-[15%] h-[115.91px] w-[9.71px] bg-[#FFCE5C]' />
                    <div className='w-[705px] h-[348px]  flex justify-center md:justify-end items-center'>
                            <div>
                                <div className='flex flex-col h-full w-full mr-5 text-center md:text-left '>
                                    <div className='text-white text-xl md:text-5xl font-bold flex flex-col gap-y-2'>
                                        <div>
                                            Accelerate Innovation
                                        </div>
                                        <div>
                                            with Global AI Chalenges
                                        </div>
                                    </div>
                                    <div className='flex justify-center md:justify-start items-center'>
                                        <div className='text-white md:text-lg mt-10 text-sm' >
                                            <p>AI Challenges at DPhi simulate real-world problems. It is a </p>
                                            <p> great place to put your AI/Data Science skills to test on </p> 
                                            <p>diverse datasets allowing you to foster learning through </p>
                                            <p>competitions</p>
                                        </div>
                                    </div>
                                    <div className='mt-10'>
                                        <Button
                                            onClick={() =>{
                                                router.push("/create-challenge")
                                            }}
                                            variant="secondary" 
                                            className=' font-bold' 
                                            size="lg"
                                        >
                                            Create Challange
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    
                </div>
            </div>
            <div className='md:col-span-2'>
                <div className='flex h-full w-full justify-center items-center'>
                    <Image 
                        className='md:block hidden'
                        src="/rocket.svg"
                        alt="rocket logo"
                        width={400} // Set the width in pixels
                        height={400} // Set the height in pixels
                        layout="fixed"
                    />
                    <Image 
                        className='md:hidden block'
                        src="/rocket.svg"
                        alt="rocket logo"
                        width={250} // Set the width in pixels
                        height={250} // Set the height in pixels
                        layout="fixed"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
