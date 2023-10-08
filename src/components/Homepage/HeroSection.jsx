import React from "react";
import radilogy from "../../assets/herobg.jpg";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section id="hero" className="flex flex-col justify-center lg:h-screen m-auto text-black font-sans">
      <div className="container max-w-[1440px] px-4 sm:px-6 flex lg:flex-row flex-col justify-between gap-4 items-center mx-auto">
        <div className="py-24">
          <h1 className="text-4xl xl:text-6xl lg:text-5xl font-bold font-lora xl:leading-widest">
            {/* <span>Connecting Marketing, Advertisement, and Radiology</span>  */}
            Streamline Radiology Marketing with Data-Driven Advertising Solutions     
          </h1>
          <p className="text-lg font-medium my-6">
          Your all-in-one platform for seamless integration of marketing strategies,
          targeted advertisements, and advanced radiology solutions.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-white hover:text-primary hover:bg-white py-3 px-6 hover:ring-primary hover:ring-2 focus:ring-2 focus:ring-primary  rounded-lg text-lg font-semibold transition duration-300"
          >
            Get Started
          </Link>
      
        </div>
        <Image src={radilogy} alt="scan" className="lg:w-1/2 rounded-tl-[50%] rounded-br-[50%]" />
      </div>
    </section>
  );
};

export default HeroSection;

// function Counter() {
//   return (
//     <div className="flex items-center text-primary">
//       {/* <div className="mt-8 text-4xl font-poppins">
//           <CountUp start={0} end={100} duration={3} />+ 
//           <p className='font-sans text-base font-semibold text-black'>Radiologists</p>        
//         </div> */}
//       <div className="flex justify-center space-x-6 mt-8 md:text-4xl sm:text-3xl text-2xl font-poppins">
//         <div>
//           <CountUp end={1500} duration={5} />+
//           <p className="font-sans text-base font-semibold text-black">
//             Patients Connected
//           </p>
//         </div>
//         <div>
//           <CountUp end={500} duration={5} />+
//           <p className="font-sans text-base font-semibold text-black">
//             Radiologists Available
//           </p>
//         </div>
//         <div>
//           <CountUp end={100} duration={5} />+
//           <p className="font-sans text-base font-semibold text-black">
//             Hospitals Linked
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
