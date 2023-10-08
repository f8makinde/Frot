// "use client"
import Image from "next/image";
import Amorad from "../../assets/amorad.png";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Link as ScrollLink  } from "react-scroll";
const navigation = {
    services: [
      { name: 'Marketing', href: '/comingSoon' },
      { name: 'Advertisement', href: '/comingSoon' },
      { name: 'Health Center', href: '/health' },
    ],
    company: [
      { name: 'About', to: "about"},
      { name: 'Blog', to: "/comingSoon"},
    ],
    legal: [
      { name: 'Claim', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
    ],
   
  }
  const social =   [
    {
      name: 'Instagram',
      href: '/instagram',
      icon: <FaInstagram size={25}/>
    },
    {
      name: 'Twitter',
      href: '/twitter',
      icon: <FaXTwitter size={25}/>
    },
    {
      name: 'Linkedin',
      href: '/linkedin',
      icon: <FaLinkedin size={25}/>
    },
  ]

  export default function Footer() {
    const handleSetActive = (to) => {
      console.log(to);
    };
    return (
      <footer className="bg-white font-sans" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-[1440px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="sm:grid xl:grid-cols-5 lg:grid-cols-4 xl:gap-8  space-y-8">
            <div className="space-y-8 xl:col-span-2 ">
              <Image
                className="h-10"
                src={Amorad}
                alt="Company name"
              />
              <p className="text-gray-500 text-base">
                Making the world a better place through constructing elegant hierarchies.
              </p>
              <div className="flex space-x-6">
                {social.map((item) => (
                  <Link key={item.name} href={item.href} className="text-primary hover:text-gray-700">
                    {item.icon}             
                  </Link>
                ))}
              </div>
            </div>
        
              <div>
                  <h3 className="text-base font-semibold text-primary tracking-wider uppercase">Services</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.services.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              
                <div>
                  <h3 className="text-base font-semibold text-primary tracking-wider uppercase">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <ScrollLink className="text-base text-gray-500 hover:text-gray-900"
                            activeClass="active" 
                            to={item.to}
                            spy={true} 
                            smooth={true} 
                            offset={-50} 
                            duration={500} 
                            onSetActive={handleSetActive}>
                          {item.name}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-semibold text-primary tracking-wider uppercase">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
        
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center"> &copy; {new Date().getFullYear()}  Workflow, Inc. All rights reserved.</p>
          </div>
        
      </footer>
    )
  }
  