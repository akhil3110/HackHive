import ParticipatioCard from "./participation-card";

export default function ParticipationBanner() {
  return (
    <div className="h-full w-full">
        <div className="text-xl md:text-4xl font-extrabold text-center pt-12">
            <span>Why Participate in </span>
            <span className="text-[#44924C]"> AI Challenged? </span>
        </div>
        <div className="mt-5 p-16">
            <div className="flex flex-col md:flex-row justify-center gap-y-5 md:gap-x-10" >
                <ParticipatioCard 
                    logoUrl="/carbon_notebook-reference.svg"
                    headding="Prove Your Skills"
                    line1="Gain substantial experience by solving real-world probmlems"
                    line2="and pit against others to come up with innovative solutions."
                />
                <ParticipatioCard 
                    logoUrl="/Vector.svg"
                    headding="Learn from community"
                    line1="One can look and analyze the solutions submitted by the"
                    line2="other Data Scientists in the community and learn from them"
                />
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-y-5 md:gap-x-10 mt-5   " >
                <ParticipatioCard 
                    logoUrl="/Robot.svg"
                    headding="Challenge  yourself"
                    line1="There is nothing for you to lose by participating in a"
                    line2="challenge. You can fail safe, learn out to the entire"
                    line3="experience and bounce pack harder."
                />
                <ParticipatioCard 
                    logoUrl="/IdentificationCard.svg"
                    headding="Earn recognisation"
                    line1="You will stand out from the crowd if you do well in AI"
                    line2="challenges, it not only helps you shine in the community buy"
                    line3="also earns rewards"
                />
            </div>
        </div>
    </div>
  )
}
