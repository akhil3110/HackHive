import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-[45px] md:h-[64px] w-full bg-[#FFFFFF]">
        <Image
              src="https://s3-alpha-sig.figma.com/img/99ba/7507/b588a3af66673e7bb695c247d66635cc?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gb9-q5QFoA9D3GS7FCTO1JcwhuGqi-~8yKSMtfkqp6TY65ghermxhmdsPEjq0KYY4YnoaJIL9a8s0yuaB6uCvwaND8rLfuE10z2Z--DSrdCxdccHz0BDfls6uVg~I-sqm3aoFGNEg3lRZrSAdAQyubc6SE5ElHqjrFdb~BUlPszCZXA0nYTIvA2mlv0G2w6uX0wPXDioSP8gVcInxiDRnI3bob4nFl~pZ8mz~Jm1Zji7MJJQYFcjpuz9jIeSjYtN2iuJg7dgv4bRHqLgXW50JveBDY~adAI0EIKyOV2ByvaUchOQooorJcdkNcFFTjLC~j0gIZDOh-1qVUVzvusW6A__"
              alt="site_logo"
              className="dark:invert ml-9 hidden md:block"
              width={100}
              height={24}
              priority
        />
        <Image
              src="https://s3-alpha-sig.figma.com/img/99ba/7507/b588a3af66673e7bb695c247d66635cc?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gb9-q5QFoA9D3GS7FCTO1JcwhuGqi-~8yKSMtfkqp6TY65ghermxhmdsPEjq0KYY4YnoaJIL9a8s0yuaB6uCvwaND8rLfuE10z2Z--DSrdCxdccHz0BDfls6uVg~I-sqm3aoFGNEg3lRZrSAdAQyubc6SE5ElHqjrFdb~BUlPszCZXA0nYTIvA2mlv0G2w6uX0wPXDioSP8gVcInxiDRnI3bob4nFl~pZ8mz~Jm1Zji7MJJQYFcjpuz9jIeSjYtN2iuJg7dgv4bRHqLgXW50JveBDY~adAI0EIKyOV2ByvaUchOQooorJcdkNcFFTjLC~j0gIZDOh-1qVUVzvusW6A__"
              alt="site_logo"
              className="dark:invert ml-9 md:hidden"
              width={80}
              height={50}
              priority
            />

    </div>
  )
}
