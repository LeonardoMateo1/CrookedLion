import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Footer = () => {
    return (
            <footer className="w-full mt-10">
            <div className="w-full h-full max-width flex flex-col gap-20">
                <div className="flex justify-between">
                    <h3 className="font-bold text-xl">CrookedLion</h3>
                    <div>
                        <h3 className="font-semibold text-normal mb-5">Subscribe</h3>
                        <p className="text-sm font-medium w-[361px] mb-4">Stay Updated with our newsletter for new features and releases.</p>
                        <div className="flex gap-4 items-center font-medium mb-4">
                            <input type="text" placeholder="Enter your Email" className="bg-bg border px-3 py-2 text-primary " />
                            <Link href='/'>
                                <CustomButton
                                title="Subscribe"
                                containerStyles="bg-accent px-3 py-2"
                                btnType="button"
                                /> 
                            </Link>
                        </div>
                        <p className="text-xs font-normal w-[358px]">By subscribing, your agree to our Privacy Policy and consent to recieve updates from our company.</p>
                    </div>
                </div>
                <div className="mt-20 border-t w-full pb-[2rem]">
                    <div className="mt-5 text-sm flex gap-6">
                        <p className="mr-10">
                        &copy; 2023 CrookedLion. All rights reserved.
                        </p>
                        <Link href='/'>
                        <p className="underline">Privacy Policy</p>
                        </Link>
                        <Link href='/'>
                        <p className="underline">Terms of Service</p>
                        </Link>
                        <Link href='/'>
                        <p className="underline">Cookies Settings</p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer