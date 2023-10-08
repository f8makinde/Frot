"use client";
import { Fragment, useState } from "react";
import { FaAlignRight, FaNewspaper, FaXRay } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { Popover, Transition } from "@headlessui/react";
// import Link from "next/link";
import { RiArrowDownSFill } from "react-icons/ri";
import { BsMegaphoneFill } from "react-icons/bs";
import Amorad from "../../assets/amorad.png";
import Image from "next/image";
import { Link as ScrollLink  } from "react-scroll";
 import Link from "next/link";
const navigation = [
  {
    name: "Marketing",
    href: "/comingSoon",
    icon: <BsMegaphoneFill size={25} />,
  },
  {
    name: "Advertisement",
    href: "/comingSoon",
    icon: <FaNewspaper size={25} />,
  },
  { name: "Health Center", href: "/health", icon: <FaXRay size={25} /> },
  // { name: "Services", href: "#" },
  // { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [select, setSelect] = useState(false);
  const [blog, setBlog] = useState(false);
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <div className="fixed w-full z-10 bg-gray-50  font-sans">
      <div className="relative py-6">
        <Popover>
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
            <nav
              className="relative flex items-center justify-between sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div className="flex items-center flex-1 lg:absolute lg:inset-y-0 lg:left-0">
                <div className="flex items-center justify-between w-full lg:w-auto">
                  <Link href="#">
                    <span className="sr-only">Workflow</span>
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
                <ScrollLink              
                  activeClass="active" 
                  to="hero" 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500} 
                  onSetActive={handleSetActive}
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  Home

                </ScrollLink>
                <ScrollLink
                         className="font-medium text-gray-500 hover:text-gray-900"
      activeClass="active" 
      to="about" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500} 
      onSetActive={handleSetActive}
    >
     

                  About Us
                  </ScrollLink>
                <ScrollLink
                  className="font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1 relative"
                 
                  activeClass="active" 
                  to="section" 
                  spy={true} 
                  smooth={true} 
                  offset={-100} 
                  duration={500} 
                  onSetActive={handleSetActive}
                  onMouseEnter={() => setSelect(true)}
                  onMouseLeave={() => setSelect(false)}
                >
                  Services
                  <span>
                    <RiArrowDownSFill size={25} />
                  </span>
                  {select && (
                    <div className="absolute top-5 origin-top-right right-0 mt-2 w-72 p-6 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <ul className="space-y-6 text-xl font-poppins">
                        {navigation.map((item) => (
                          <li
                            key={item.name}
                            className="font-medium text-primary flex items-center space-x-3 hover:text-gray-900"
                          >
                            <span>{item.icon}</span>
                            <Link href={item.href}>{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </ScrollLink>

                     
                <Link
                  href=""
                  className="font-medium text-gray-500 hover:text-gray-900 relative"
                  onMouseEnter={() => setBlog(true)}
                  onMouseLeave={() => setBlog(false)}
                >
                  Blog
                  {blog && 
                    <div className="text-xl absolute top-5 origin-top-right right-0 mt-2 w-56 p-6 font-bold h-24 border bg-white text-primary">
                      Coming soon...
                    </div>
                  }
                
                </Link>
              </div>
              <div className="hidden lg:absolute lg:flex md:items-center md:justify-end md:inset-y-0 md:right-0 lg:space-x-4 md:space-x-2">
                <span className="inline-flex rounded-md shadow">
                <ScrollLink 
                     activeClass="active" 
                     to="contact" 
                     spy={true} 
                     smooth={true} 
                     offset={-50} 
                     duration={500} 
                     onSetActive={handleSetActive}

                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:text-white hover:bg-primary"
                    
                  >
                   Contact Us
                  </ScrollLink>
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
                <ScrollLink              
                  activeClass="active" 
                  to="hero" 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500} 
                  onSetActive={handleSetActive}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                >
                  Home

                </ScrollLink>
                <ScrollLink
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
      activeClass="active" 
      to="about" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500} 
      onSetActive={handleSetActive}
    >
     

                  About Us
                  </ScrollLink>
                  <ScrollLink
                  className="font-medium flex items-center gap-1 relative px-3 py-2 rounded-md text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                 
                  activeClass="active" 
                  to="section" 
                  spy={true} 
                  smooth={true} 
                  offset={-100} 
                  duration={500} 
                  onSetActive={handleSetActive}
                  onMouseEnter={() => setSelect(true)}
                  onMouseLeave={() => setSelect(false)}
                >
                  Services
                  <span>
                    <RiArrowDownSFill size={25} />
                  </span>
                  {select && (
                    <div className="absolute top-5 right-0 left-0 mt-2 w-72 h-36 p-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <ul className="space-y-2 text-base font-poppins">
                        {navigation.map((item) => (
                          <li
                            key={item.name}
                            className="font-medium text-primary flex items-center space-x-3 hover:text-gray-900"
                          >
                            <span>{item.icon}</span>
                            <Link href={item.href}>{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </ScrollLink>
                                  <Link
                  href=""
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                  onMouseEnter={() => setBlog(true)}
                  onMouseLeave={() => setBlog(false)}
                >
                  Blog
                  {blog && 
                    <div className="text-xl absolute bottom-5  right-0 left-0 mt-2 w-48 p-3 font-bold h-12 border bg-white text-primary">
                      Coming soon...
                    </div>
                  }
                
                </Link>
                </div>
                <ScrollLink
                  
                  activeClass="active" 
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  offset={100} 
                  duration={500} 
                  onSetActive={handleSetActive}
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                >
                Contact Us
                </ScrollLink>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
}
