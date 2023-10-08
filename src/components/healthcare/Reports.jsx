import React from "react";

const Reports = () => {
  return (
    <div className="w-full">
      <section className="flex flex-col justify-center m-auto text-black/70 py-20 font-sans">
        <div className="container max-w-[1200px] space-y-6 px-4 sm:px-6 mx-auto">
          <Benefits />
          <div className="flex md:flex-row flex-col">
            <Mission />
            <Vision />
          </div>
        </div>
      </section>
    </div>
  );
};
// style={{background: "linear-gradient(180deg, #186784 0%, rgba(229, 239, 255, 0.26) 86.22%, rgba(229, 239, 255, 0.00) 100%)"}}

export default Reports;

function Benefits() {
  return (
    <div>
      <div className="flex lg:flex-row flex-col space-y-4 gap-3 justify-between items-center">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold font-lora">
            {" "}
            Revolutionizing Remote Radiology Reports
          </h1>
          <p className="font-sans leading-relaxed">
            Amorad is an exceptional teleradiology platform that offers a range
            of benefits, making it the best choice for your needs. Our services
            are characterized by speed, accuracy, and on-demand availability. We
            understand the importance of timely reports, which is why we strive
            to deliver cold case reports within 12 hours and emergency case
            reports within 90 minutes. Every report is meticulously crafted by
            our team of seasoned consultant radiologists using a DICOM viewer
            with AI capabilities. With our commitment to providing
            round-the-clock service, you can rely on us whenever you need
            high-quality radiological reports.
          </p>
        </div>
        <Timeline />
      </div>
    </div>
  );
}
const timeline = [
  {
    id: 1,
    content: `AMORAD's platform spans the globe, offering hospitals access to a diverse pool of radiologists, ensuring 24/7 coverage and reducing dependence on local resources`,
    target: "Global Radiologist Network",
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content:
      "Quick access to remote radiologists means faster image interpretation, reducing patient anxiety and improving treatment planning",
    target: "Reduced Diagnosis Time",
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content:
      "AI-enhanced DICOM viewers assist radiologists in identifying subtle abnormalities and making more precise diagnoses, enhancing the quality of radiology reports",
    target: "Improved Accuracy",
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: `AMORAD's innovative approach reduces the need for full-time, in-house radiologists, optimizing resource allocation for healthcare institutions.`,
    target: "Cost-Efficiency",
    iconBackground: "bg-blue-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Timeline() {
  return (
    <div className="lg:w-1/2">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                    )}
                  ></span>
                </div>
                <div className="min-w-0 flex-col flex space-y-6">
                  <div>
                    <a href="" className="font-medium text-gray-900">
                      {event.target}
                    </a>
                    <p className="text-sm text-gray-500 flex-wrap">
                      {event.content}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Mission() {
  return (
    <div className="text-center bg-[#0A3E51] text-white p-6 flex-1">
      <h2 className="text-3xl font-lora font-bold">
        <span>Our</span>
        <span className=""> Mission</span>
      </h2>
      <p className="font-sans text-lg">
        AMORAD's mission is to bridge radiology's workforce gap by connecting
        hospitals with skilled radiologists worldwide, leveraging AI for
        enhanced productivity, ultimately improving patient care through timely
        and accurate diagnoses.
      </p>
    </div>
  );
}
function Vision() {
  return (
    <div className="text-center bg-[#123D76] text-white p-6 flex-1">
      <h2 className="text-3xl font-lora font-bold">
        <span>Our</span>
        <span className=""> Vision</span>
      </h2>
      <p className="font-sans text-lg">
        "AMORAD envisions a world where radiology thrives through AI-driven
        collaboration, alleviating shortages, and delivering exceptional patient
        care globally."
      </p>
    </div>
  );
}
