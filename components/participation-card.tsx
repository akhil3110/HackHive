import React from "react";
// import {Card, CardHeader, CardFooter} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface ParticipationCardInterface {
    logoUrl: string,
    headding: string,
    line1: string,
    line2: string,
    line3?: string,
}

export default function ParticipationCard({
    logoUrl,
    headding,
    line1,
    line2,
    line3
}: ParticipationCardInterface) {
  
  return (
    <Card className="w-full md:w-[500px] bg-[#F8F9FD] pb-8">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
         <img src={logoUrl} alt="logo" className=" h-8 w-8"  />
        </div>
      </CardHeader>
      <CardContent className="px-3 py-0">
        <div className="font-bold text-lg">
          {headding}
        </div>
        <div className="mt-1 text-slate-500 text-base leading-4">
          <p>
           {line1}
          </p>
          <p>
            {line2}
          </p>
          <p>
            {line3}
          </p>
        </div>
      </CardContent>
      
    </Card>
  );
}
