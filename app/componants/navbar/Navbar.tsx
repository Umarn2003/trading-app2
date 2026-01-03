"use client";
import {
  ChevronDown,
  ChevronRight,
  Handshake,
  Mail,
  Menu,
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
            <Image
              src={logo}
              alt="B2Clogo"
              width={100}
              height={8}
              className="px-2 h-8 hover:cursor-pointer transition-transform duration-500"
            />
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
                          ? "max-h-[500px] opacity-100"
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
      <div
        className={`${
          strecth ? "md:w-5/12 md:p-0 p-1" : "md:w-8/12 p-1"
        } bg-black/70 bg-opacity-90 flex flex-col w-full transition-all duration-500`}
      >
        <div className="transition-all duration-500 p-2 flex items-center justify-between h-fit">
          <div className="gap-2 flex justify-center items-center">
            <Link href={"/"}>
              <span
                className={`ml-2 ${
                  strecth
                    ? "md:flex hidden p-2 md:bg-blue-600 hover:bg-blue-800 transition-all duration-300"
                    : "hidden"
                }`}
              >
                <Image
                  src="/B2CIconWhite.png"
                  alt="logo"
                  width={5}
                  height={5}
                  className="h-5 w-5 hover:cursor-pointer"
                />
              </span>
            </Link>
            <Link href={"/"}>
              <h1
                className="transition-opacity duration-300"
                onMouseEnter={() => setLogo("/spaced logo blue.png")}
                onMouseLeave={() => setLogo("/white spaced logo.png")}
              >
                {strecth ? (
                  <Image
                    src={logo}
                    alt="B2Clogo"
                    width={100}
                    height={8}
                    className="px-2 w-full h-8 hover:cursor-pointer transition-transform duration-500 md:hidden block"
                  />
                ) : (
                  <Image
                    src={logo}
                    alt="B2Clogo"
                    width={100}
                    height={8}
                    className="px-2 w-full h-8 hover:cursor-pointer transition-transform duration-500"
                  />
                )}
              </h1>
            </Link>
          </div>
          <div className="md:flex hidden justify-center relative">
            <ul className="flex gap-5">
              {["What we do", "Who we are", "Insights"].map((value, idx) => (
                <div key={idx} className="relative">
                  <li
                    key={idx}
                    onMouseEnter={() => {
                      setNavHover(true);
                      setIndex(idx);
                      setSelectedNav(value);
                    }}
                    className="flex items-center gap-1 hover:cursor-pointer hover:text-gray-400 transition-all duration-300"
                  >
                    {value}
                    {value !== "Case Studies" ? (
                      navHover && index === idx ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )
                    ) : (
                      <></>
                    )}
                  </li>
                </div>
              ))}
              <Link href={"/design/pages/our-works"} className="">
                CaseStudies
              </Link>
            </ul>
          </div>
          <div className="md:flex hidden justify-center">
            {strecth ? (
              <button
                className={`bg-blue-600 hover:bg-blue-800 transition-all duration-500 ${
                  strecth ? "p-2" : "px-4 py-2 font-medium text-sm"
                }`}
              >
                <Handshake className="h-5 w-5" />
              </button>
            ) : (
              <Link
                href={"/pages/contact"}
                className={`bg-blue-600 hover:bg-blue-800 transition-all duration-500 ${
                  strecth ? "p-2" : "px-4 py-2 font-medium text-sm"
                }`}
              >
                Quick demo
              </Link>
            )}
          </div>
          <div className="md:hidden flex">
            <button
              className={`bg-blue-600 hover:bg-blue-800 transition-all duration-500 px-4 py-2`}
              onClick={() => setOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* MODAL */}
        {/* {selectedNav === "what we do" && navHover && index === 0 && ( */}
        <div
          onMouseLeave={() => {
            setSelectedNav(null);
            setNavHover(false);
            setIndex(null);
          }}
          className={`absolute top-full mt-1 flex ${
            strecth ? "flex-col" : "flex-row"
          } gap-2 justify-center ${
            strecth ? "w-5/12" : "w-8/12"
          }  transition-all duration-500 ${
            navHover
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-1"
          }`}
        >
          {selectedNav === "What we do" && (
            <div
              className={`bg-black/80 p-6 shadow flex justify-center text-xs font-pt ${
                strecth ? "w-full" : "w-8/12"
              }`}
            >
              <div className="grid grid-cols-3 grid-flow-col text-sm gap-x-6">
                <div
                  className={`flex flex-col gap-4 border-r px-4 border-gray-500`}
                >
                  <span className="text-gray-500 text-xs font-bold mb-1">
                    Our Expertise
                  </span>
                  {[
                    { heading: "Design", to: "/design" },
                    {
                      heading: "Digital Marketing",
                      to: "/pages/products/digital-marketing",
                    },
                    {
                      heading: "App & Web Development",
                      to: "/pages/products/app-and-web",
                    },
                    {
                      heading: "Online Reputation Management (ORM)",
                      to: "/pages/services/orm-service",
                    },
                    {
                      heading: "AI Automation",
                      to: "/pages/services/ai-service",
                    },
                  ].map((value, idx) => (
                    <Link
                      href={value.to}
                      key={idx}
                      className="hover:text-blue-500 text-sm transition hover:cursor-pointer"
                    >
                      {value.heading}
                    </Link>
                  ))}
                </div>
                <div
                  className={`flex flex-col gap-4 border-r px-4 border-gray-500`}
                >
                  <span className="text-gray-500 text-xs font-bold mb-1">
                    Fintech specialization
                  </span>
                  {[
                    {
                      heading: "Trading Platform",
                      to: "/pages/finetech/trading",
                    },
                    {
                      heading: "Blockchain Development",
                      to: "/pages/finetech/blockchain",
                    },
                    {
                      heading: "Payment Gateway Integration",
                      to: "/pages/finetech/paymentgateway",
                    },
                  ].map((value, idx) => (
                    <Link
                      href={value.to}
                      key={idx}
                      className="hover:text-blue-500 transition hover:cursor-pointer"
                    >
                      {value.heading}
                    </Link>
                  ))}
                </div>
                <div className={`flex flex-col gap-4 pl-4`}>
                  <span className="text-gray-500 text-xs font-bold mb-1">
                    Diversification
                  </span>
                  {[
                    {
                      heading: "Real State",
                      to: "/pages/specialization/realstate",
                    },
                    {
                      heading: "Trading Platform",
                      to: "/pages/specialization/tradings",
                    },
                    {
                      heading: "Online Reputation Management (ORM's)",
                      to: "/pages/specialization/orm-service",
                    },
                  ].map((value, idx) => (
                    <Link
                      href={value.to}
                      key={idx}
                      className="hover:text-blue-500 transition hover:cursor-pointer"
                    >
                      {value.heading}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectedNav === "Who we are" && (
            <div
              className={`bg-black/80 p-6 shadow flex text-xs font-pt ${
                strecth ? "w-full" : "w-8/12"
              }`}
            >
              <div>
                <div className="flex flex-row text-base px-5">
                  <div className="flex flex-col gap-4 w-1/3 border-r-2  border-gray-700">
                    {[
                      {
                        heading: "About us",
                        to: "/about-us",
                      },
                      { heading: "Leadership", to: "/weare/leadership" },
                      { heading: "Expertise", to: "/weare/expertise" },
                      {
                        heading: "Carrers",
                        to: "/pages/weare/leadership/carrers",
                      },
                      {
                        heading: "Certification",
                        to: "/weare/certification",
                      },
                    ].map((value, idx) => (
                      <Link
                        href={value.to}
                        key={idx}
                        className="hover:text-blue-500 transition hover:cursor-pointer"
                      >
                        {value.heading}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col w-2/3 pl-10">
                    <div className="flex justify-end">
                      <h4 className="text-blue-500 font-bold pb-2">
                        B2C Incorporation
                      </h4>
                    </div>
                    <p className="">
                      We are extremely satisfied with our collaboration with
                      B2CINC. We engaged them for business analysis, UI/UX
                      design, web development, and testing.
                    </p>
                    <div className="flex flex-col justify-start pt-5">
                      <h4>Gulfam .......</h4>
                      <h5 className="text-gray-500">CEO</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Insights */}
          {selectedNav === "Insights" && (
            <div
              className={`bg-black/80 p-6 shadow flex text-xs font-pt ${
                strecth ? "w-full" : "w-8/12"
              }`}
            >
              <div>
                <div className="grid grid-flow-col grid-cols-3 text-base px-5">
                  <div className="flex flex-col  gap-3 border-r  border-gray-700">
                    <h4 className="hover:text-blue-500 hover:cursor-pointer">
                      Blog
                    </h4>
                    <h4 className="hover:text-blue-500 hover:cursor-pointer">
                      Company updates
                    </h4>
                  </div>
                  <div className="grid col-span-2 grid-flow-col">
                    <div className="flex flex-col border-r px-10  border-gray-700">
                      <img
                        src="/workflow.jpeg"
                        alt="workflow"
                        className="w-full h-32"
                      />
                      <h5 className="mt-4">
                        Architecture review: a strategic investment in
                        sustainable growth
                      </h5>
                    </div>
                    <div className="flex flex-col items-center pl-10">
                      <img
                        src="/lecture.jpeg"
                        alt="lecture"
                        className="w-full h-32"
                      />
                      <h5 className="mt-4">
                        Architecture review: a strategic investment in
                        sustainable growth
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};
