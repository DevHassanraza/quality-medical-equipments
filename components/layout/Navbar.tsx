"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
   <header className="fixed left-0 top-0 z-[9999] w-full bg-white">
      {/* TOP BAR */}
      <div className="bg-[#052646] text-white "   style={{
    paddingLeft: "40px",
    paddingRight: "40px",
  }}>
        <div className="mx-auto flex min-h-[42px] w-full  items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
          
          <p className="text-[12px] font-medium sm:text-[13px]">
            Quality Medical Equipments
          </p>

          <p className="whitespace-nowrap text-[12px] sm:text-[13px]">
            <span className="font-semibold text-[#39CBCC]">
              Call:
            </span>{" "}
            +92 XXX XXXXXXX
          </p>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="border-b border-[#E5E5E5] bg-white shadow-[0_4px_18px_rgba(5,38,70,0.08)]">
        <div className="mx-auto flex h-[92px] max-w-[1600px] items-center justify-between px-5 sm:px-7 lg:h-[105px]">
          
          {/* LOGO */}
          <Link href="/" onClick={closeMenu}>
            <div className="relative h-[72px] w-[165px] overflow-hidden sm:w-[185px] lg:h-[90px] lg:w-[230px]">
              <Image
                src="/logos/quality-medical-logo.jpeg"
                alt="Quality Medical Equipments"
                fill
                priority
                className="scale-[1.65] object-contain"
              />
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden flex-1 items-center justify-center lg:flex">
            <div className="flex items-center gap-8 xl:gap-12">
              <Link
                href="/"
                className="group relative py-3 text-[16px] font-semibold text-[#052646]"
              >
                Home
                <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#39CBCC]" />
              </Link>

              <Link
                href="/about"
                className="group relative py-3 text-[16px] font-medium text-[#052646] transition hover:text-[#39CBCC]"
              >
                About Us
                <span className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-[#39CBCC] transition-all group-hover:w-full" />
              </Link>

              <Link
                href="/products"
                className="group relative py-3 text-[16px] font-medium text-[#052646] transition hover:text-[#39CBCC]"
              >
                Products
                <span className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-[#39CBCC] transition-all group-hover:w-full" />
              </Link>

              <Link
                href="/services"
                className="group relative py-3 text-[16px] font-medium text-[#052646] transition hover:text-[#39CBCC]"
              >
                Services
                <span className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-[#39CBCC] transition-all group-hover:w-full" />
              </Link>

              <Link
                href="/contact"
                className="group relative py-3 text-[16px] font-medium text-[#052646] transition hover:text-[#39CBCC]"
              >
                Contact Us
                <span className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-[#39CBCC] transition-all group-hover:w-full" />
              </Link>
            </div>
          </div>

          {/* DESKTOP CTA */}
          <Link
            href="/contact#quote-form"
            className="hidden min-w-[145px] items-center justify-center rounded-lg bg-[#39CBCC] px-6 py-[13px] text-[15px] font-semibold text-[#052646] shadow-[0_5px_14px_rgba(57,203,204,0.30)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#052646] hover:!text-white hover:shadow-[0_7px_18px_rgba(5,38,70,0.20)] lg:inline-flex"
          >
            Get a Quote
          </Link>
          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="mr-3 flex h-[46px] w-[46px] flex-col items-center justify-center gap-[5px] rounded-lg bg-[#052646] shadow-md lg:hidden"
          >
            <span
              className={`h-[2px] w-[22px] bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-[2px] w-[22px] bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-[2px] w-[22px] bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden border-t border-[#E5E5E5] bg-white transition-all duration-300 lg:hidden ${
            menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4 px-6 py-6 text-center">
            <Link
              href="/"
              onClick={closeMenu}
              className="relative w-full max-w-[260px] py-2 text-[15px] font-semibold text-[#39CBCC]"
            >
              Home
              <span className="absolute bottom-0 left-1/2 h-[2px] w-[35px] -translate-x-1/2 rounded-full bg-[#39CBCC]" />
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="w-full max-w-[260px] py-2 text-[15px] font-medium text-[#052646] transition hover:text-[#39CBCC]"
            >
              About Us
            </Link>

            <Link
              href="/products"
              onClick={closeMenu}
              className="w-full max-w-[260px] py-2 text-[15px] font-medium text-[#052646] transition hover:text-[#39CBCC]"
            >
              Products
            </Link>

            <Link
              href="/services"
              onClick={closeMenu}
              className="w-full max-w-[260px] py-2 text-[15px] font-medium text-[#052646] transition hover:text-[#39CBCC]"
            >
              Services
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="w-full max-w-[260px] py-2 text-[15px] font-medium text-[#052646] transition hover:text-[#39CBCC]"
            >
              Contact Us
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-1 w-full max-w-[260px] rounded-lg bg-[#39CBCC] py-3 text-[15px] font-bold text-[#052646]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}