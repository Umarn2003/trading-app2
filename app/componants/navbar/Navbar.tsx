"use client";
import {
  ChevronDown,
  ChevronRight,
  Handshake,
  Mail,
  Menu,
  Octagon,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Navbar: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [index, setIndex] = useState<number | null>(null);
  const [strecth, setStrech] = useState(false);
  const [logo, setLogo] = useState("/white spaced logo.png");
  const [navHover, setNavHover] = useState(false);
  const [selectedNav, setSelectedNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 4 && currentScroll > lastScrollY) {
        setStrech(true);
      } else if (currentScroll < lastScrollY) {
        setStrech(false);
      }
      setLastScrollY(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [open, setOpen] = useState(false);

  // Load script ONCE
  useEffect(() => {
    const scriptId = "leadconnector-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const menu = [
    {
      title: "What we do",
      sections: [
        {
          heading: "Our Expertise",
          links: [
            "Design",
            "Digital Marketing",
            "App & Web Development",
            "Online Reputation Management (ORM)",
            "AI Automation",
          ],
        },
        {
          heading: "Fintech Specialization",
          links: [
            "Trading Platform",
            "Blockchain Development",
            "Payment Gateway Integration",
          ],
        },
        {
          heading: "Diversification",
          links: [
            "Real Estate",
            "Trading Platform",
            "Online Reputation Management (ORM)",
          ],
        },
      ],
    },
    {
      title: "Who we are",
      sections: [
        {
          heading: "Fintech Specialization",
          links: [
            "Trading Platform",
            "Blockchain Development",
            "Payment Gateway Integration",
          ],
        },
      ],
    },
    {
      title: "Insights",
      sections: [
        {
          heading: "Diversification",
          links: [
            "Real Estate",
            "Trading Platform",
            "Online Reputation Management (ORM)",
          ],
        },
      ],
    },
    {
      title: "Case Studies",
      sections: [],
    },
  ];

  return (
    <div className="flex fixed w-full z-30 md:justify-center text-white mt-3">
      {/* Mobile nav */}

      <div
        className={`fixed inset-0 bg-black/90 z-20 flex transition-opacity ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className="w-full h-[50vh] bg-black/70"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-4 py-6 border-b font-semibold flex justify-between items-center">
            {/* <Image
              src={logo}
              alt="B2Clogo"
              width={100}
              height={8}
              className="px-2 h-8 hover:cursor-pointer transition-transform duration-500"
            /> */}
            <h5>LOGO</h5>
            <button
              className={`hover:bg-gray-800 transition-all duration-500 px-2 py-2`}
              onClick={() => setOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="md:hidden text-white w-full">
            <ul className="flex flex-col">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className="border-b border-white/10 py-2 hover:text-blue-400"
                >
                  {/* Top Level Button */}
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between px-6 py-2 text-left text-base"
                  >
                    {item.title}
                    <ChevronDown
                      className={`transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-300
                      ease-in-out
                      ${
                        openIndex === index
                          ? "max-h-125 opacity-100"
                          : "max-h-0 opacity-0"
                      }
                      bg-neutral-900 px-6
                    `}
                  >
                    <div className="py-2 space-y-2">
                      {item.sections.map((section, i) => (
                        <div key={i} className="flex flex-col gap-2">
                          <h4 className="text-xs text-white/40 my-2">
                            {section.heading}
                          </h4>
                          <ul className="flex flex-col gap-2 pl-3">
                            {section.links.map((link, j) => (
                              <li
                                key={j}
                                className="text-white hover:text-blue-600 transition hover:scale-[1.05] text-sm"
                              >
                                <Link href={"/design"}>{link}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* )} */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop nav */}

      <div
        className={`${
          strecth ? "md:w-full" : "md:w-7/12"
        } bg-[#141a30] bg-opacity-90 flex flex-col w-full transition-all duration-500 backdrop-blur-lg rounded-sm border-[#dbdce922] border items-center`}
      >
        <div
          className={`md:flex hidden justify-center relative py-3 ${
            strecth ? "w-7/12" : "w-full"
          }`}
        >
          <ul className="flex justify-between items-center w-9/12">
            {[
              "Benefits",
              "Regulations",
              "Tools",
              "Trade Web",
              "Learn",
              "FAQs",
              "Contact us",
            ].map((value, idx) => (
              <div key={idx} className="relative">
                {value === "Trade Web" ? (
                  <Link href="/">
                    <li
                      key={idx}
                      onMouseEnter={() => {
                        setNavHover(true);
                        setIndex(idx);
                        setSelectedNav(value);
                      }}
                      className="flex flex-row hover:cursor-pointer hover:text-gray-400 transition-all duration-300 gap-1 justify-center items-center md:text-xl text-sm"
                    >
                      <Octagon className="text-red-500 font-extrabold h-9 w-9" />
                      <div className="flex flex-col leading-tight justify-center items-center">
                        <p className="font-bold">{value}</p>
                        <span className="text-sm tracking-[0.4em]">
                          MARKETS
                        </span>
                      </div>
                    </li>
                  </Link>
                ) : (
                  <Link href={"#" + value.toLowerCase()}>
                    <li
                      key={idx}
                      onMouseEnter={() => {
                        setNavHover(true);
                        setIndex(idx);
                        setSelectedNav(value);
                      }}
                      className="flex items-center gap-1 hover:cursor-pointer hover:text-gray-400 transition-all duration-300 md:text-lg text-sm"
                    >
                      {value}
                    </li>
                  </Link>
                )}
              </div>
            ))}
          </ul>
        </div>
        {/* Hamburger Icon */}

        <div className="md:hidden flex">
          <button
            className={`bg-blue-600 hover:bg-blue-800 transition-all duration-500 px-4 py-2`}
            onClick={() => setOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
