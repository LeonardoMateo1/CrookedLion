"use client"
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignInForm() {

    const router = useRouter();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        username: ""
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            toast.success("Sign Up Successful")
            router.push("/Login")
        } catch (error: any) {
            console.log("Sign Up failed", error.message);
            toast.error(error.response.data.error || error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length >
            0 && user.username.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])

    return (
        <div className="bg-bg h-screen w-full lg:w-[50%]">
            <div className="fixed w-full top-0 bg-bg z-20">
                <div className=" h-full mx-20 my-5 flex-center lg:flex lg:justify-start max-width px-4 2xl:px-0">
                    <Link href='/'><h2 className="font-bold text-4xl">CrookedLion</h2></Link>
                </div>
            </div>
            <div className="w-full h-full flex-center ">
                <div className="flex-center flex-col">
                    <h2 className="home_h mb-5">{loading ? "Processing" : "Sign Up"}</h2>
                    <p className="font-semibold text-sm w-[90%] md:w-[500px] text-center tracking-wide">
                        Embark on a journey of insightful stock analysis and market intelligence. 
                        Join us and elevate your investment strategy today. Ready to dive In?
                    </p>
                    <div className="flex items-start flex-col mt-10 gap-4 w-[90%] sm:w-[22.7rem]">
                        <div className="flex flex-col gap-1 px-2 sm:px-0 w-full">
                            <label className="text-sm font-semibold" htmlFor="username" >User Name:</label>
                            <input
                                id="username"
                                type="text" 
                                value={user.username}
                                onChange={(e) => setUser({...user, username: e.target.value})} 
                                className="text-black py-1 font-medium pl-2 outline-none"
                            />
                            <div className="sm:w-[362px] bg-red-300"/>
                        </div>
                        <div className="flex flex-col gap-1 px-2 sm:px-0 w-full">
                            <label className="text-sm font-semibold" htmlFor="email" >Email:</label>
                            <input 
                                id="email"
                                type="text"
                                value={user.email}
                                onChange={(e) => setUser({...user, email: e.target.value})} 
                                className="text-black py-1 font-medium pl-2 outline-none"
                            />
                            <div className="sm:w-[362px] bg-red-300"/>
                        </div>
                        <div className="flex flex-col gap-1 px-2 sm:px-0 w-full">
                            <label className="text-sm font-semibold" htmlFor="password" >Password:</label>
                            <input 
                                id="password"
                                type="password" 
                                value={user.password}
                                onChange={(e) => setUser({...user, password: e.target.value})}
                                className="text-black py-1 font-medium pl-2 outline-none"
                            />
                            <div className="sm:w-[362px] bg-red-300"/>
                        </div>
                        <div className="flex flex-col gap-1 px-2 sm:px-0 w-full">
                            <label className="text-sm font-semibold" htmlFor="confirmPassword" >Confirm Password:</label>
                            <input 
                                id="confirmPassword"
                                type="password" 
                                value={user.confirmPassword}
                                onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
                                className="text-black py-1 font-medium pl-2 outline-none"
                            />
                            <div className="sm:w-[362px] bg-red-300"/>
                        </div>
                        <div className="w-full px-2 sm:px-0">
                            <CustomButton
                                handleClick={onSignup}
                                title={buttonDisabled ? "Fill Out Form" : "Sign Up"}
                                disabled={buttonDisabled}
                                containerStyles="bg-accent w-full py-[5px] font-semibold rounded-full"
                                btnType="button"
                            />
                            <div className="w-full flex-center">
                                <p>Have an account?<Link href="/Login" className="pl-2 underline">Log In</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
