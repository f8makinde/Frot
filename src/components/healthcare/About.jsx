import React from "react";
import amorad from "../../assets/iPhone mini - Dark (2).png";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full bg-gray-100">
      <section className="flex flex-col justify-center m-auto text-black py-20 font-sans">
        <div className="container max-w-[1200px] px-4 sm:px-6 mx-auto">
          <div className="flex lg:flex-row flex-col justify-between gap-4 items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-lora font-bold">
                <span>About</span>
                <span className="text-primary"> Amorad</span>
              </h1>
              <p className="text-gray-600">
                Amorad is a cutting-edge teleradiology platform designed to
                address the critical challenges of radiologist shortages and
                slow medical report processing.
              </p>
              <p className="text-gray-600 mt-4">
                We connect hospitals with skilled radiologists, delivering
                accurate and competent reports 50% faster through our
                AI-enhanced modules. Unlike rigid templates, we provide
                customizable solutions tailored to each case.
              </p>
              <p className="text-gray-600 mt-4">
                Amorad also offers a valuable second opinion service to enhance
                diagnostic accuracy.
              </p>
              <p className="text-gray-600 my-4">
                We are committed to accessibility and provide free setup for all
                clients, regardless of their location. Our mission is to bridge
                the radiologist gap and elevate the quality of diagnostic
                reports using artificial intelligence.
              </p>
              <Link
                href="/contact"
                className="bg-primary text-white hover:text-primary hover:ring-primary hover:ring-2 focus:ring-2 focus:ring-primary hover:bg-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
              >
                Get Started
              </Link>
            </div>
            <div>
              <Image src={amorad} alt="amorad" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
