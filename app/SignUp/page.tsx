import Image from "next/image";
import SignInForm from "./components/SignInForm";
import { FormTestimonials } from "@/components";

const page = () => {

    return (
        <main className="flex">
            <SignInForm/>
            <FormTestimonials/>
        </main>
    )
}

export default page