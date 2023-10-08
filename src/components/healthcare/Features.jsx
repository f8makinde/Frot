import React from "react";
import { FaCheck, FaClock, FaShield, FaRobot } from "react-icons/fa6";
import Gallery from "./Gallery";
const Features = () => {
  return (
    <div className="w-full bg-gray-100">
      <section className="flex flex-col justify-center m-auto md:py-12 text-black font-sans">
        <div className="container max-w-[1200px]  md:py-0 py-24 px-4 sm:px-6 flex justify-between gap-4 items-center mx-auto">
          <div className="lg:flex-row flex-col flex lg:items-center gap-6">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-lora font-bold">Features</h1>
              <p>
                "Experience the Amorad platform, designed for your convenience.
                Our user-friendly web-based interface is accessible 24/7,
                ensuring we're there for you whenever you need us. With a team
                of highly skilled radiologists covering every subspecialty, our
                teleradiology platform, enhanced with AI capabilities, offers
                on-demand assistance—a perfect solution to meet your radiologist
                needs effectively."
              </p>
            </div>
            <div className="flex-col gap-3 flex lg:flex-1">
              <ContentCard
                bgColor="#fff"
                icon={<FaCheck />}
                title="No Setup Fees"
                content="Enjoy the convenience of the Amorad platform without any setup fees, making it cost-effective from the start."
              />
              <ContentCard
                bgColor="#fff"
                icon={<FaRobot />}
                title="AI-Enhanced Tools"
                content="Integration of DICOM viewers with AI capabilities aids radiologists in expediting image analysis, enhancing productivity, and report generation."
              />
            </div>
            <div className="flex-col flex md:flex-1 gap-3 lg:mt-12">
              <ContentCard
                bgColor="#fff"
                icon={<FaClock />}
                title="24/7 Availability"
                content="We are open around the clock to take care of all your cases, ensuring you receive prompt and reliable service."
              />
              <ContentCard
                bgColor="#fff"
                icon={<FaShield />}
                title="Privacy Assurance"
                content="We hold your patient's privacy in the highest regard, ensuring 100% confidentiality and security."
              />
            </div>
          </div>
        </div>
        <Gallery />
      </section>
    </div>
  );
};

export default Features;

function ContentCard({ title, content, bgColor, icon }) {
  return (
    <div
      style={{ background: `${bgColor}` }}
      className="text-black text-left flex-1 px-3 py-6 h-[70%] space-y-3 rounded-xl shadow-lg"
    >
      <div className="h-8 w-8 flex justify-center items-center rounded-full bg-gray-100 text-black">
        {icon}
      </div>
      <h1 className="font-poppins text-2xl font-medium">{title}</h1>
      <p className="font-sans">{content}</p>
    </div>
  );
}
