import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";


const blog = [
    {
        id: 1,
        title: "Stay updated with Real-Time Market News and Insights",
        description: "Access comprehensive stock analysis tools, market news, and personalized recommendations all in one platform.",
        imgUrl: "/updated_image.jpg",
        btn: "Learn More >"
    },
    {
        id: 2,
        title: "Make Informed Investment Decisions with Personalized Recommendations",
        description: "Get personalized stock recommendations tailored to your investment goals and risk appetite.",
        imgUrl: "/Informed_image.jpg",
        btn: "Sign Up >"
    },
    {
        id: 3,
        title: "Stay ahead of the Market with Real-Time Stock Analysis Tools",
        description: "Access real-time stock analysis tools to monitor market trends and identify profitable investment opportunities.",
        imgUrl: "/Market_image.jpg",
        btn: "Get Started >"
    }
]

const Blog = () => {
    return (
        <div className="w-full new">
    <div className="h-full w-full flex flex-col gap-20  max-width items-center">
        <h2 className="home_h w-[858px] text-center">Powerful Stock Analysis Tools for Informed Investment Decisions</h2>
        <div className="w-full ">
            <div className="grid grid-cols-3 gap-20 w-full">
                {blog.map(({id, title, description, btn, imgUrl}) => {
                    return (
                        <div key={id} className="flex flex-col ">
                            <div className="w-full h-full">
                                <div className="relative h-[225px]">
                                    <Image fill priority src={imgUrl} alt="blog" sizes="225px" className="object-cover"/>
                                </div>
                            </div>
                            <div className="mt-7 flex flex-col gap-4">
                                <h3 className="font-semibold text-2xl">{title}</h3>
                                <p className="text-sm font-medium text-secondary">{description}</p>
                                <Link href="/SignUp">
                                    <CustomButton 
                                    title={btn}
                                    btnType="button"
                                    />
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
</div>
    )
}

export default Blog
