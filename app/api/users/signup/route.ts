import { NextRequest, NextResponse } from 'next/server';
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import mongoose from 'mongoose';

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {username, email, password, confirmPassword} = reqBody


        const user = await User.findOne({email})

        if (password !== confirmPassword) {
            return NextResponse.json({ error: "Passwords must match" }, { status: 400 });
        }


        if(user) {
            return NextResponse.json({error: "User already exists"},
            {status: 400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()

        return NextResponse.json({
            message: "User created Successfully",
            success: true,
            savedUser
        })

    } catch (error: any) {
        if (error instanceof mongoose.Error.ValidationError) {
            const validationErrors = Object.values(error.errors);
            
            if (error instanceof mongoose.Error.ValidationError) {
                const validationErrors = Object.values(error.errors);
                
                if (validationErrors[0] instanceof mongoose.Error.ValidatorError) {
                    const firstError: mongoose.Error.ValidatorError = validationErrors[0];
                    return NextResponse.json({error: firstError.message}, {status: 400});
                }
            }
            return NextResponse.json({error: error.message}, {status: 500});
        }
    
        return NextResponse.json({error: error.message}, {status: 500});
    }
}