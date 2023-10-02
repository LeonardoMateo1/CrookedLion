"use client"

import Image from "next/image";
import React, { useEffect } from 'react';
import { LogSignForms } from "@/constants";


const FormTestimonials = () => {

  const [testimonialslide, setTestimonialslide] = React.useState(1);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setTestimonialslide(prevSlide => {
        return prevSlide < LogSignForms.length ? prevSlide + 1 : 1;
      });
    }, 10000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className='hidden lg:flex h-screen w-[50%] bg-red-50 relative z-20 text-black overflow-hidden'>
      <div className="w-full h-full flex-center overflow-hidden">
        {LogSignForms.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-slide absolute top-0 transition-transform ease-in-out duration-1000 ${index + 1 < testimonialslide ? 'translate-x-full' : index + 1 > testimonialslide ? '-translate-x-full' : 'translate-x-0'}`}
          >
            <p className="w-[70%] text-center font-medium mb-5 text-lg">"{testimonial.description}"</p>
            <div className="w-full flex-center mb-3">
              <div className="relative h-[60px] w-[60px]">
              <Image src={testimonial.imgurl} fill priority sizes="60px" alt={`${testimonial.name} image`} className="object-cover rounded-full" />
              </div>
            </div>
            <p className="font-semibold text-accent">{testimonial.name}</p>
            <p className="text-xs font-bold">{testimonial.position}, {testimonial.company}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FormTestimonials;