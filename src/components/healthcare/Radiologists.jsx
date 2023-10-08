import React from "react";
import doctor from "../assets/doctors-2 1.png";
import doctor2 from "../assets/doctors 1.png";
import doctor3 from "../assets/doctor-6 1.png";
import doctor4 from "../assets/doctor-3 1.png";
import Image from "next/image";
import Link from "next/link";
const Radiologists = () => {
  return (
    <div>
      <section className="flex flex-col justify-center m-auto md:my-12 text-black font-sans">
        <div className="container max-w-[1200px] py-12  px-4 sm:px-6 flex justify-between gap-4 items-center mx-auto">
          <div className="flex flex-col space-y-4">
            <h1 className="font-lora text-4xl font-bold text-center">
              Our <span className="text-primary">Radiologists</span>
            </h1>
            <p className="text-lg text-center">
              At AMORAD, we understand the critical role that radiologists play
              in healthcare. With the increasing demand for radiology services
              and the integration of AI technology, our platform empowers
              radiologists to excel in their field.
            </p>

            <Radiologist />
          </div>
        </div>
        <Link
          href="/contact"
          className="bg-primary mx-auto text-center text-white hover:text-primary hover:ring-primary hover:ring-2 focus:ring-2 focus:ring-primary hover:bg-white py-3 px-12 rounded-lg text-lg font-semibold transition duration-300"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Radiologists;

const radiologist = [
  {
    id: 0,
    img: doctor,
    name: "Dr. Karen Patel",
    profession: "Radiologist",
  },
  {
    id: 1,
    img: doctor2,
    name: "Dr. Marcus Wong",
    profession: "Radiologist",
  },
  {
    id: 2,
    img: doctor3,
    name: "Dr. Olivia Nguyen",
    profession: "Radiologist",
  },
  {
    id: 3,
    img: doctor4,
    name: "Dr. Miguel Rodriguez",
    profession: "Radiologist",
  },
];

function Radiologist() {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
      {radiologist.map((person) => {
        const { id, img, name, profession } = person;
        return (
          <div key={id} className="space-y-3 font-sans">
            <div className="bg-gray-100 rounded-xl pt-4 px-12">
              <Image src={img} alt={name} className="mx-auto object-cover" />
            </div>
            <h3 className="md:text-2xl text-[20px] font-medium">{name}</h3>
            <p className="text-lg">{profession}</p>
          </div>
        );
      })}
    </div>
  );
}
