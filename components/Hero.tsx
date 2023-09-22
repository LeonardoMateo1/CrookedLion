import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Hero = () => {


    return (
        <div className=" w-full mt-[20rem] flex">
        <div className="h-full w-full max-width">
            <div className="text-xl font-medium">
            <h1 className="home_h w-[519px]">Powerful Stock Analysis for Informed Investing</h1>
            <p className="text-secondary w-[373px] mt-4">Make smarter investment decisions with our comprehensive stock analysis platform.</p>
            <div className="mt-5 flex gap-3">
                <Link href="/SignUp">
                <CustomButton 
                title="Get Started"
                containerStyles="bg-accent text-white px-4 py-1"
                btnType="button"
                />
                </Link>
                <Link href="/SignUp">
                <CustomButton 
                title="Learn More"
                containerStyles="border text-white px-4 py-1"
                btnType="button"
                />
                </Link>
            </div>
            </div>
        </div>
        <div className="flex flex-col items-end w-full absolute -z-10">
            <div className="h-[63px] w-[50%] bg-colm"/>
            <div className="h-[63px] w-[45%] bg-colm2"/>
            <div className="h-[63px] w-[40%] bg-colm3"/>
            <div className="h-[63px] w-[35%] bg-colm4"/>
            <div className="h-[63px] w-[30%] bg-colm5"/>
            <div className="h-[63px] w-[25%] bg-colm6"/>
        </div>
        </div>
    )
}

export default Hero