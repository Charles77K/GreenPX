"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Menu from "./ui/Menu";
import { AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import MobileNavbar from "./MobileNavbar";

export const NAV_LINKS = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "GreenPX", href: "/features" },
  { label: "Marketplace", href: "/marketplace" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleMenuToggle = () => setIsMenuOpen((prevState) => !prevState);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="bg-white shadow-md lg:px-10 md:px-5 px-4 py-4 flex-between relative">
        {/* logo section */}
        <div className="flex gap-2 items-center">
          <Image src={"/logo.svg"} alt="px-logo" width={48} height={48} />
          <div className="flex flex-col text-lg">
            <h1 className="font-extrabold">Green</h1>
            <h1 className="font-extrabold -mt-2">Potentia</h1>
          </div>
        </div>

        {/* mobile menu */}
        <div onClick={handleMenuToggle} className="block md:hidden">
          {isMenuOpen ? <X size={40} /> : <Menu />}
        </div>

        {/* navigation bars */}
        <div className="md:flex-center hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className="relative font-medium text-md px-6 py-4
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-full after:h-[1px] after:bg-gray-800 after:scale-x-0 
                after:transition-transform after:duration-300 
                hover:after:scale-x-100
                "
            >
              {label}
            </Link>
          ))}
        </div>

        {/* contact */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="font-bold bg-brandGreen text-white rounded-2xl text-sm lg:text-md px-4 md:px-5 lg:px-8 py-3.5"
          >
            Contact Us
          </Link>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && <MobileNavbar isOpen={isMenuOpen} />}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
