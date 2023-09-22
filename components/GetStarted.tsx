import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const GetStarted = () => {
    return (
        <div className=" mt-40 w-full bg-black py-10">
            <div className="w-full h-full max-width flex-between">
                <div>
                    <h2 className="home_h">Start Analyzing Stock Today!</h2>
                    <p className="font-medium text-lg w-[544px]">
                        Get access to powerful stock analysis tools and make informed investment decisions.
                    </p>
                    <div className="mt-5 flex gap-3 font-medium">
                        <Link href="/SignUp">
                        <CustomButton 
                        title="Sign Up"
                        containerStyles="bg-accent text-white px-7 py-1"
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
                <div className="w-full h-full flex justify-end items-end">
                    <div className="relative w-[546px] h-[300px]">
                        <Image fill src='/subcribe_image.jpg' alt="subscribe" sizes="546px" className="object-cover"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted