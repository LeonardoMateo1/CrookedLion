import LoginForm from "./components/LoginForm";
import { FormTestimonials } from "@/components"

const page = () => {
    return (
        <main className="flex">
            <LoginForm/>
            <FormTestimonials/>
        </main>
    )
}


export default page