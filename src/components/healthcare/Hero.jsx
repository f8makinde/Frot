import React from "react";
import radilogy from "../../assets/pexels-andre-11722768.jpg";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="flex flex-col justify-center  m-auto xl:h-screen text-black font-sans">
      <div className="container max-w-[1440px] px-4 sm:px-6 flex lg:flex-row flex-col justify-between gap-4 items-center mx-auto">
        <div className="py-24">
          <h1 className="text-4xl xl:text-7xl lg:text-6xl font-bold font-lora">
            <span>Your Gateway to</span>
            <span className="text-primary"> Radiological Excellence</span>
          </h1>
          <p className="text-lg font-medium mb-8">
            Frot is pioneering the future of teleradiology, delivering
            unparalleled, high-quality radiological reports with seamless remote
            access.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-white hover:text-primary hover:bg-white py-2 px-6 hover:ring-primary hover:ring-2 focus:ring-2 focus:ring-primary  rounded-lg text-lg font-semibold transition duration-300"
          >
            Get Started
          </Link>
      
        </div>
        <Image src={radilogy} alt="scan" className="lg:w-1/2 rounded-lg" />
      </div>
    </section>
  );
};

export default Hero;

