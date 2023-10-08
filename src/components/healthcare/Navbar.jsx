/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { FaAlignRight } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { Popover, Transition } from "@headlessui/react";
import Amorad from "../../assets/amorad.png";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink  } from "react-scroll";
const navigation = [
  { name: "About", to: "about" },
  { name: "Features", to: "feature" },
  { name: "Radiologists", to: "radiologist" },
  { name: "Diagnosis centres", to: "center" },
];

export default function Navbar() {
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <div className="fixed w-full z-10 bg-gray-50 font-sans">
      <div className="relative py-6">
        <Popover>
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
            <nav
              className="relative flex items-center justify-between sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div className="flex items-center flex-1 lg:absolute lg:inset-y-0 lg:left-0">
                <div className="flex items-center justify-between w-full lg:w-auto">                
                    <Link href="/">
                    <Image
                      className="h-8 w-auto sm:h-10 object-cover"
                      src={Amorad}
                      alt="amorad-logo"
                    />
                    </Link>
                  <div className="-mr-2 flex items-center lg:hidden">
                    <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-gray-500 hover:bg-gray-100 outline-none">
                      <FaAlignRight size={25} />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex lg:space-x-10 md:space-x-4">
                <Link href="/"         className="font-medium text-gray-500 hover:text-gray-900">
                   Home 
                </Link>
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.name}
                    activeClass="active" 
                    to={item.to} 
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={500} 
                    onSetActive={handleSetActive}
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
              <div className="hidden lg:absolute lg:flex md:items-center md:justify-end md:inset-y-0 md:right-0 lg:space-x-4 md:space-x-2">
                <span className="inline-flex rounded-md shadow">
                  <Link
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:text-white hover:bg-primary"
                  >
                    Get Started
                  </Link>
                </span>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
            >
              <div className="rounded-lg shadow-md h-full bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <Image className="h-8 w-auto" src={Amorad} alt="" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-gray-500 outline-none">
                      <span className="sr-only">Close menu</span>
                      <GiCancel size={25} />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <ScrollLink
                    key={item.name}
                    activeClass="active" 
                    to={item.to} 
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={500} 
                    onSetActive={handleSetActive}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </ScrollLink>
                  ))}
                </div>
                <Link
                  href="#"
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                >
                  Get Started
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
}
