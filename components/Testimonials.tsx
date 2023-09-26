import Image from "next/image";

const Testimonials = () => {
    return (
        <div className="w-full new flex">
            <div className="h-full w-full max-width items-center flex flex-col">
                <h2 className="home_h mb-10 sm:mb-20">Testimonials</h2>
                <p className="font-semibold text-2xl text-center w-[70%] lg:w-[750px] mb-10">
                " I've been using this stock analysis website for years 
                and it has greatly helped me make informed investment decisions. 
                Highly recommended! "
                </p>
                <div>
                <div className="relative w-[60px] h-[60px] mb-5">
                    <Image fill src='/person.jpg' alt="john doe" sizes="60px" className="object-cover rounded-full" />
                </div>
                </div>
                <p className="font-semibold">John Doe</p>
                <p>Investment Analyst, ABC Inc.</p>
            </div>
            <div className="flex flex-col-reverse items-end w-full absolute mt-[9rem] -z-10">
            <div className="h-[63px] w-[10%] xl:w-[48%] bg-colm"/>
            <div className="h-[63px] w-[10%] xl:w-[43%] bg-colm2"/>
            <div className="h-[63px] w-[10%] xl:w-[38%] bg-colm3"/>
            <div className="h-[63px] w-[10%] xl:w-[33%] bg-colm4"/>
            <div className="h-[63px] w-[10%] xl:w-[28%] bg-colm5"/>
            <div className="h-[63px] w-[10%] xl:w-[23%] bg-colm6"/>
            </div>
            <div className="flex flex-col-reverse items-start w-full absolute mt-[9rem] -z-10">
            <div className="h-[63px] w-[10%] xl:w-[48%] bg-colm"/>
            <div className="h-[63px] w-[10%] xl:w-[43%] bg-colm2"/>
            <div className="h-[63px] w-[10%] xl:w-[38%] bg-colm3"/>
            <div className="h-[63px] w-[10%] xl:w-[33%] bg-colm4"/>
            <div className="h-[63px] w-[10%] xl:w-[28%] bg-colm5"/>
            <div className="h-[63px] w-[10%] xl:w-[23%] bg-colm6"/>
            </div>
        </div>
    )
}

export default Testimonials