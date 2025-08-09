"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Menu from "./ui/Menu";
import { AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "GreenPX", href: "/greenpx" },
  { label: "Marketplace", href: "/marketplace/greenpx-midi" },
];

const Navbar = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);

  const handleMenuToggle = () => setIsMenuOpen((prevState) => !prevState);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        setIsVisible(true);
      } else if (window.scrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="bg-white lg:px-10 md:px-5 px-4 py-5 flex-between relative">
        {/* logo section */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.svg"}
            alt="px-logo"
            width={40}
            height={40}
            priority
          />
          <div className="flex flex-col gap-px text-sm md:text-base">
            <h1 className="font-extrabold">Green</h1>
            <h1 className="font-extrabold -mt-2">Potentia</h1>
          </div>
        </div>

        {/* mobile menu */}
        <div onClick={handleMenuToggle} className="block md:hidden">
          {isMenuOpen ? <X size={30} /> : <Menu />}
        </div>

        {/* navigation bars */}
        <div className="md:flex-center gap-2 hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className={cn(
                "relative font-bold md:text-[0.9rem] text-black 2xl:text-sm px-6 py-2 after:content-[''] hover:bg-brandGreen/10 hover:text-brandGreen transition-all duration-300 ease-in-out rounded-full",
                pathName === href &&
                  "bg-brandGreen/10 text-brandGreen rounded-full px-6 py-2"
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* contact */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="font-semibold bg-brandGreen hover:bg-black hover:text-brandOrange transition-colors duration-300 ease-in-out text-white rounded-2xl text-xs md:text-[0.9rem] 2xl:text-sm px-4 md:px-5 lg:px-8 py-3"
          >
            Contact Us
          </Link>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <MobileNavbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
