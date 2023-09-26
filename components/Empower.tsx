import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Empower = () => {
    return (
        <div className="w-full new">
            <div className="flex flex-col items- w-full absolute -z-10">
                <div className="h-[63px] w-[50%] bg-colm"/>
                <div className="h-[63px] w-[45%] bg-colm2"/>
                <div className="h-[63px] w-[40%] bg-colm3"/>
                <div className="h-[63px] w-[35%] bg-colm4"/>
                <div className="h-[63px] w-[30%] bg-colm5"/>
                <div className="h-[63px] w-[25%] bg-colm6"/>
            </div>
            <div className="h-full w-full max-width flex-between 2xl:px-0 px-4 flex-col-reverse flex-center xl:flex-row-reverse text-center xl:text-end">
                <div className="font-medium md:w-[644px]">
                    <p className="font-semibold ">Empower</p>
                    <h2 className="home_h md:w-[634px]">Make Informed Investment Decisions with Ease</h2>
                    <p className="text-secondary text-lg mt-6">
                        Our stock analysis website provides investors with valuable insights 
                        and data to help them make smarter investment decisions. 
                        With our user-friendly interface and comprehensive analysis tools, 
                        you can easily navigate the stock market and stay ahead of the game. 
                    </p>
                    <div className="flex gap-5 mt-10">
                        <div className="md:w-[268px]">
                            <h3 className="font-semibold text-2xl">Unlock Potential</h3>
                            <p className="text-secondary">
                                Discover hidden opportunities and uncover the true potential of your investments.
                            </p>
                        </div>
                        <div className="md:w-[318px]">
                            <h3 className="font-semibold text-2xl">Stay Informed</h3>
                            <p className="text-secondary">
                                Get real-time updates and stay informed about market trends and news.
                            </p>
                        </div>
                    </div>
                    <div className="mt-7 flex gap-5 items-center justify-center xl:justify-end text-xl ">
                        <Link href='/SignUp'>
                            <CustomButton 
                            title="Learn More"
                            containerStyles="border px-3 py-1"
                            btnType="button"
                            />
                        </Link>
                        <Link href='/SignUp'>
                            <CustomButton 
                            title="Sign Up   >"
                            containerStyles="text-accent"
                            btnType="button"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex-1 w-full h-full flex flex-center xl:justify-start xl:items-start xl:mb-0 mb-10">
                    <div className="relative w-[486px] h-[600px] ">
                        <Image fill src='/Empower_image.jpg' alt="empower" sizes="486px" priority className="object-cover rounded"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Empower