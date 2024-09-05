"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CircleCheckBig } from "lucide-react";


interface   ChallengeCardProps{
    id: string
    challengeName: string
    startDate: Date
    endDate: Date
    imageUrl?: string
}

// Example Timer Logic
const useCountdown = (endDate: string) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, mins: number, secs: number }>({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(endDate) - +new Date();
      let timeLeft = { days: 0, hours: 0, mins: 0, secs: 0 };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
          secs: Math.floor((difference / 1000) % 60),
        };
      }

      setTimeLeft(timeLeft);
    };

    const timer = setInterval(() => calculateTimeLeft(), 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return timeLeft;
};

export default function ChallengeCard({
    id,
    challengeName,
    startDate,
    endDate,
    imageUrl
}: ChallengeCardProps) {
  const countdown = useCountdown(new Date(endDate).toDateString());

  return (
    <Card className="w-full md:w-[350px] h-[500px] mx-auto shadow-lg">
      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={imageUrl ? imageUrl : "/backupImage.png"}
            alt="Challenge Banner"
            fill
            className="object-cover rounded-t-xl"
          />
        </AspectRatio>
      </CardHeader>

      <CardContent className="text-center space-y-2 py-4">
        <Badge variant="outline" className="bg-[#f7f2e7] text-[#a08d65]">
          
        </Badge>
        <CardTitle className="text-xl font-semibold text-center text-[#2A3B45]">
          {challengeName}
        </CardTitle>
      </CardContent>

      <CardContent className="text-center space-y-2">
        <div className="text-sm text-muted-foreground">Starts in</div>
        <div className="flex justify-center space-x-4 text-lg font-bold text-[#2A3B45]">
          <div>{countdown.days} <span className="text-sm">Days</span></div>
          <div>{countdown.hours} <span className="text-sm">Hours</span></div>
          <div>{countdown.mins} <span className="text-sm">Mins</span></div>
        </div>
      </CardContent>

      <CardFooter className="text-center w-full flex justify-center">
        <Button className="bg-green-600 hover:bg-green-500 flex gap-x-1">
          <CircleCheckBig className="h-5 w-5" /> Participate Now
        </Button>
      </CardFooter>
    </Card>
  );
}
