import Image from "next/image";
import about from "../../assets/iPhone 12 Pro - Dark (1).png"
const About = () => {
    return (
        <section id="about" className="flex flex-col justify-center m-auto text-black font-sans my-12 bg-gray-100 ">
        <div className="container max-w-[1440px] py-12 px-4 sm:px-6 flex lg:flex-row flex-col justify-between gap-4 items-center mx-auto">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold font-lora mb-4">
            About
            <span className="text-primary">&nbsp;Us</span>
          </h2>
          <p className="text-lg mb-8">
            We're passionate about connecting the worlds of marketing, advertisement, and radiology. Our platform empowers healthcare providers and marketing professionals to unlock new opportunities and insights.
          </p>
          <p className="text-lg mb-3">
            With our innovative solutions, you can:
          </p>
          <ul className="text-lg mb-3 list-disc pl-4">
            <li>Effortlessly integrate radiology data into your marketing campaigns.</li>
            <li>Gain valuable insights from medical imaging to enhance targeting.</li>
            <li>Optimize your ad spend with data-driven decisions.</li>
          </ul>
          
          <div>
          <p className="text-lg mb-2">
        Our Values
          </p>
             <OurValue title="Innovation:" text="We embrace cutting-edge technologies to deliver the best solutions."/>
             <OurValue title="Transparency:" text="We believe in open communication and honesty with our clients."/>
             <OurValue title="Collaboration:" text="We work closely with our clients to understand their unique needs."/>
             <OurValue title="Services:" text="We're committed to delivering high-quality services."/>
          </div>
          {/* <div className="flex md:flex-row flex-col justify-between">
                <MissionStatement />
                <VisionStatement />
          </div> */}
        </div>       
         <Image src={about} alt="about-us" />
        </div>
      </section>
    );
  };
  
  export default About;
  
  
  const OurValue = ({title, text}) => {
    return (
      <section className="space-y-3">
          <h1 className="text-primary text-xl font-bold">
            {title}
          <span className="text-black font-normal">&nbsp;{text}</span>
          </h1>     
      </section>
    );
  };
  

const MissionStatement = () => {
  return (
    <section className="bg-primary p-3 text-white flex-1">
        <h1 className="text-xl font-semibold">Our Mission</h1>
      <p>At Amorad, we bridge the gap between healthcare and marketing, offering cutting-edge radiology solutions with targeted marketing and advertising strategies. Our mission is to enhance patient care, empower medical professionals, and drive growth for businesses, all through innovative technology and data-driven insights</p>
    </section>
  );
};

const VisionStatement = () => {
    return (
      <section className="bg-[#F75F63] p-3 text-white flex-1">
          <h1 className="text-xl font-semibold">Our Mission</h1>
        <p>"Empowering healthcare providers with cutting-edge radiology solutions through seamless marketing and advertisement integration. Our platform streamlines radiology services, enhancing patient care and practitioner outreach for a healthier future."</p>
      </section>
    );
  };