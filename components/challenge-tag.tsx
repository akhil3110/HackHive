"use client"
import { redirect, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
  

interface ChalangeTagTypes{
    id: string
}

export default function ChallengeTag({
    id
}: ChalangeTagTypes) {

    const [isOpen,setIsOpen] = useState(false)

    const router = useRouter()

    useEffect(() => {
        const escape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
          };

            document.addEventListener("keydown", escape);
            return () => document.removeEventListener("keydown", escape);
      }, [isOpen])

      const deleteChallenge = async() =>{
        try {
            await axios.delete('/api/challenge', {
                params: {
                    challengeId: id,
                }
            })

            toast.success("Challenge Deleted")
            setIsOpen(false)
            router.push("/")
        } catch (error) {
            toast.error("something went worng")
            console.log(error)
        }
      }

  return (
    <div className="bg-[#FFFFFF]  w-full h-[65px] shadow-xl" >
        <div className="flex h-full justify-center md:justify-between">
            <div className="hidden md:flex h-full items-end pl-[4%]" >
                <div className="text-center">
                    <h2 className="font-bold text-lg relative inline-block">
                        Overview
                        <span className="block h-1 bg-green-500 rounded mt-1"></span>
                    </h2>
                </div>
            </div>
            <div className="flex h-full w-full md:w-[20%] items-end md:pr-[4%]" >
                <div className="flex justify-center md:justify-end w-full gap-x-5 pb-2">
                    <div>
                        <Button
                            onClick={() =>{
                                console.log("daada")
                                router.push(`/challenge/edit/${id}`)
                            }} 
                            size="lg" 
                            className=" bg-[#44924C] text-white hover:bg-[#44924C] hover:text-white w-20" 
                        >
                            Edit
                        </Button>
                    </div>
                    <div>
                        <AlertDialog open={isOpen}>
                            <AlertDialogTrigger asChild onClick={() => {setIsOpen(true)}}>
                                <Button size="lg" variant="outline" className=" border-red-600 text-red-600 hover:border-red-600 hover:text-red-600 w-20">
                                    Delete
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you  sure you want to delete this challenge?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your
                                        challende and remove your data from our servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel 
                                        onClick={() =>{setIsOpen(false)}}
                                    >
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction 
                                        className="bg-red-700 hover:bg-red-600" 
                                        onClick={deleteChallenge}
                                    >
                                        Delete
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
