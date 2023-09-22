"use client"

import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


const LoginForm = () => {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = React.useState([])

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false)

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login Success", response.data);
            toast.success("Login Success");
            router.push("/Dashboard");
        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error(error.message)
            setErrors(error.message)
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
            } else {
            setButtonDisabled(true)
            }
    }, [user])


    return (
        <div className="bg-bg h-screen w-[50%]">
            <div className="w-full h-full flex-center ">
                <div className="flex-center flex-col">
                    <h2 className="home_h mb-5">{loading ? "Processing" : "Log In"}</h2>
                    <p className="font-semibold text-sm w-[531px] text-center tracking-wide">
                        Dive back into the world of stocks and insights awaiting you. 
                        Let's make informed investment decisions together.
                    </p>
                    <div className="text-red-500 text-xl mt-4 px-3 py-1">
                        Invalid Email or Password {errors}
                    </div>
                    <div className="flex items-start flex-col mt-10 gap-4">
                        <div className="flex flex-col gap-1">
                            <div className="flex w-full justify-between">
                                <label className="text-sm font-semibold" htmlFor="email" >Email:</label>
                            </div>
                            <input 
                                id="email"
                                type="text"
                                value={user.email}
                                onChange={(e) => setUser({...user, email: e.target.value})} 
                                className="text-black py-1 font-medium pl-2 outline-none"
                            />
                            <div className="w-[362px] bg-red-300"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex w-full justify-between">
                                <label className="text-sm font-semibold" htmlFor="password" >Password:</label>
                                <div className="text-xs underline font-medium">
                                    Forgot your Password?
                                </div>
                            </div>
                            <input 
                                id="password"
                                type="password" 
                                value={user.password}
                                onChange={(e) => setUser({...user, password: e.target.value})}
                                className="text-black py-1 font-medium pl-2 outline-none"
                            />
                            <div className="w-[362px] bg-red-300"/>
                        </div>
                        <div className="w-full">
                            <CustomButton
                                handleClick={onLogin}
                                title={buttonDisabled ? "Fill Out Form" : "Sign Up"}
                                containerStyles="bg-accent w-full py-[5px] font-semibold rounded-full"
                                btnType="button"
                            />
                            <div className="w-full flex-center">
                                <p>Don't have an account?<Link href="/SignUp" className="pl-2 underline">Sign Up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm