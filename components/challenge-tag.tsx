import { Button } from "./ui/button";


export default function ChallengeTag() {
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
                        <Button size="lg" className=" bg-[#44924C] text-white hover:bg-[#44924C] hover:text-white w-20" >
                            Edit
                        </Button>
                    </div>
                    <div>
                        <Button size="lg" variant="outline" className=" border-red-600 text-red-600 hover:border-red-600 hover:text-red-600 w-20">
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
