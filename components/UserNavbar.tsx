"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const UserNavbar = () => {
    const [userName, setUserName] = React.useState('')
    const [isUserPresent, setIsUserPresent] = React.useState(false)
    const router = useRouter();



    const logout = async () => {
        try {
            await axios.get("/api/users/logout")
            toast.success("Logout Successful")
            setIsUserPresent(false)
            router.push('/')
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        axios.get("/api/users/profile")
        .then((res) => {
            console.log(res.data);
            setUserName(res.data.data.username);
            setIsUserPresent(true)
        })
        .catch((err)=>console.log(err))
    }, [])


    return (
        <div className="fixed w-full top-0 bg-bg z-20">
            <div className=" h-full mx-20 my-5 flex-between">
                <Link href='/'><h2 className="font-bold text-4xl">CrookedLion</h2></Link>
                <div>
                    <div className="flex gap-10">
                        <p className="text-lg font-medium">{userName}</p>
                        <button type="button" onClick={logout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserNavbar