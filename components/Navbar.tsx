"use client"

import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";
import React from 'react';


const Navbar = () => {

    return (
        <div className="fixed w-full top-0 bg-bg z-20">
            <div className=" h-full mx-20 my-5 flex-between">
                <Link href='/'><h2 className="font-bold text-4xl">CrookedLion</h2></Link>
                <div>
                    <div className="flex-center gap-4">
                        <Link href='/Login'>
                            <CustomButton
                            title="Log In"
                            containerStyles="bg-bg text-xl font-semibold"
                            btnType="button"
                            />
                        </Link>
                        <Link href='/SignUp'>
                            <CustomButton
                            title="Sign Up"
                            containerStyles="bg-accent text-xl font-semibold px-6 py-1"
                            btnType="button"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar