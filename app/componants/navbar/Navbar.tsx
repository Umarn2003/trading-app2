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

      {/* Desktop nav */}

      <div
        className={`${
          strecth ? "md:w-full" : "md:w-7/12"
        } bg-[#141a30] bg-opacity-90 flex flex-col w-full transition-all duration-500 backdrop-blur-lg rounded-sm border-[#dbdce922] border`}
      >
        <div className="md:flex hidden justify-center relative py-3">
          <ul className="flex justify-between items-center w-9/12">
            {["Trading", "Client", "Trade Web", "About us", "Partnership"].map(
              (value, idx) => (
                <div key={idx} className="relative">
                  {value === "Trade Web" ? (
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
                  ) : (
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
                  )}
                </div>
              )
            )}
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
        {/* MODAL */}
        {/* {selectedNav === "what we do" && navHover && index === 0 && ( */}
        <div
          onMouseLeave={() => {
            setSelectedNav(null);
            setNavHover(false);
            setIndex(null);
          }}
          className={`absolute top-full mt-2 flex ${
            strecth ? "flex-col" : "flex-row"
          } gap-2 justify-center ${
            strecth ? "w-7/12" : "w-full"
          }  transition-all duration-500 ${
            navHover
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-1"
          }`}
        >
          {selectedNav === "Trading" && (
            <div
              className={`backdrop-blur-lg bg-[#141a30]/50 p-6 shadow flex justify-center font-pt border-[#dbdce922] border ${
                strecth ? "w-full" : "w-full"
              }`}
            >
              <div className="grid grid-cols-4 grid-flow-col text-sm gap-x-6">
                <div className={`flex flex-col gap-2 px-4`}>
                  <span className="text-[#646a80] text-lg font-mono mb-1">
                    Our Expertise
                  </span>
                  {[
                    { heading: "PRO TRADER", to: "/design" },
                    {
                      heading: "APP TRADER",
                      to: "/pages/products/digital-marketing",
                    },
                    {
                      heading: "METATRADER 4",
                      to: "/pages/products/app-and-web",
                    },
                    {
                      heading: "METATRADER 5",
                      to: "/pages/services/orm-service",
                    },
                    {
                      heading: "METATRADER APP",
                      to: "/pages/services/ai-service",
                    },

                    {
                      heading: "MT4 WEBTRADER",
                      to: "/pages/services/ai-service",
                    },

                    {
                      heading: "COPY TRADERAPP",
                      to: "/pages/services/ai-service",
                    },
                  ].map((value, idx) => (
                    <Link
                      href={value.to}
                      key={idx}
                      className="hover:text-blue-500 text-base font-semibold transition hover:cursor-pointer text-white/70"
                    >
                      {value.heading}
                    </Link>
                  ))}
                </div>
                <div className={`flex flex-col gap-2 px-4 text-base`}>
                  <span className="text-[#646a80] text-lg font-mono mb-1">
                    Products
                  </span>
                  {[
                    {
                      heading: "FOREX",
                      to: "/pages/finetech/trading",
                    },
                    {
                      heading: "COMMODITES",
                      to: "/pages/finetech/blockchain",
                    },
                    {
                      heading: "INDICES",
                      to: "/pages/finetech/paymentgateway",
                    },

                    {
                      heading: "SHARE CFDs",
                      to: "/pages/finetech/paymentgateway",
                    },

                    {
                      heading: "ETFS",
                      to: "/pages/finetech/paymentgateway",
                    },

                    {
                      heading: "BONDS",
                      to: "/pages/finetech/paymentgateway",
                    },
                  ].map((value, idx) => (
                    <Link
                      href={value.to}
                      key={idx}
                      className="hover:text-blue-500 text-base font-semibold transition hover:cursor-pointer text-white/70"
                    >
                      {value.heading}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col col-span-2 pl-10 text-base justify-center items-start">
                  <div className="flex justify-end">
                    <h4 className="text-[#646a80] font-bold pb-2 text-2xl">
                      Access The Global Forex Market
                    </h4>
                  </div>
                  <p className="">
                    Access 1000+ Instruments at up to 1000:1 Leverage through
                    our MT4 and PRO Trader platformsting.
                  </p>
                  <div className="flex flex-col justify-start pt-5">
                    <Link href={"/"} className="text-blue-500 underline">
                      Find out more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedNav === "Client" && (
            <div
              className={`backdrop-blur-lg bg-[#141a30]/50 p-6 shadow flex justify-center font-pt border-[#dbdce922] border ${
                strecth ? "w-full" : "w-full"
              }`}
            >
              <div className="grid grid-cols-4 grid-flow-col text-sm gap-x-6">
                <div className={`flex flex-col gap-2 px-4 `}>
                  <span className="text-[#646a80] text-lg font-mono mb-1 font-thin">
                    TOOLS
                  </span>
                  {[
                    {
                      heading: "Economic Calendar",
                      to: "/pages/client/calendar",
                    },
                    { heading: "Cashback Bonus", to: "/pages/client/cashback" },
                    {
                      heading: "Forex sentiment",
                      to: "/pages/client/sentiment",
                    },
                    { heading: "MARKET NEWS TV", to: "/pages/client/news" },
                    { heading: "Calculators", to: "/pages/client/calculators" },
                    { heading: "MARKET MASTERS", to: "/pages/client/masters" },
                    { heading: "Glossary", to: "/pages/client/glossary" },
                    { heading: "Market Updates", to: "/pages/client/updates" },
                    {
                      heading: "Trading Education",
                      to: "/pages/client/education",
                    },
                    { heading: "FOREX VPS", to: "/pages/client/vps" },
                    { heading: "PRO Trader tools", to: "/pages/client/tools" },
                    { heading: "50% Credit Bonus", to: "/pages/client/bonus" },
                  ].map((value, idx) => (
                    <Link
                      href={value.to}
                      key={idx}
                      className="hover:text-blue-500 text-base font-semibold transition hover:cursor-pointer text-white/70"
                    >
                      {value.heading}
                    </Link>
                  ))}
                </div>
                <div className={`flex flex-col gap-2 px-4 text-base`}>
                  <span className="text-[#646a80] text-lg font-mono mb-1 font-thin">
                    CLIENTS
                  </span>
                  {[
                    { heading: "Deposit", to: "/pages/client/deposit" },
                    { heading: "Withdraw", to: "/pages/client/withdraw" },
                    { heading: "Leverage", to: "/pages/client/leverage" },
                    { heading: "FAQ", to: "/pages/client/faq" },
                    {
                      heading: "Notifications",
                      to: "/pages/client/notifications",
                    },
                    {
                      heading: "Swap Free Account",
                      to: "/pages/client/swap-free",
                    },
                    {
                      heading: "TEAMVIEWER VIP SUPPORT",
                      to: "/pages/client/support",
                    },
                    {
                      heading: "COMPARE ACCOUNTS",
                      to: "/pages/client/compare",
                    },
                    {
                      heading: "Deposit & Withdrawal",
                      to: "/pages/client/deposit-withdrawal",
                    },
                    { heading: "Policy", to: "/pages/client/policy" },
                  ].map((value, idx) => (
                    <Link
                      href={value.to}
                      key={idx}
                      className="hover:text-blue-500 text-base font-semibold transition hover:cursor-pointer text-white/70"
                    >
                      {value.heading}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col col-span-2 pl-10 text-base justify-center items-start">
                  <div className="flex justify-end">
                    <h4 className="text-[#646a80] font-bold pb-2 text-2xl">
                      Claim Your 50% Cashback Bonus Now!
                    </h4>
                  </div>
                  <p className="">
                    Fund your account and get a 50% bonus that converts to real
                    cash!
                  </p>
                  <div className="flex flex-col justify-start pt-5">
                    <Link href={"/"} className="text-blue-500 underline">
                      Find out more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* about us */}
          {selectedNav === "About us" && (
            <div
              className={`backdrop-blur-lg bg-[#141a30]/50 p-6 shadow flex justify-center font-pt border-[#dbdce922] border ${
                strecth ? "w-full" : "w-full"
              }`}
            >
              <div className="grid grid-cols-3 grid-flow-col justify-between text-sm gap-x-6 w-full">
                <div className="flex flex-col col-span-2 text-base justify-center items-start ml-10">
                  <div className="flex justify-end">
                    <h4 className="text-[#646a80] font-bold pb-2 text-2xl">
                      Join A Global Leader
                    </h4>
                  </div>
                  <p className="">
                    Start trading with a leading, regulated CFD broker!
                  </p>
                  <div className="flex flex-col justify-start pt-5">
                    <Link href={"/"} className="text-blue-500 underline">
                      Find out more
                    </Link>
                  </div>
                </div>
                <div className={`flex flex-col gap-2 px-4 w-fit`}>
                  <span className="text-[#646a80] text-lg font-mono mb-1 font-thin">
                    MOMENT MARKETS
                  </span>
                  {[
                    { heading: "About us", to: "/pages/about" },
                    {
                      heading: "Why Choose Moneta Markets",
                      to: "/pages/why-choose",
                    },
                    {
                      heading: "Our Trading Infrastructure",
                      to: "/pages/infrastructure",
                    },
                    { heading: "Awards", to: "/pages/awards" },
                    { heading: "Media & Press", to: "/pages/media" },
                    { heading: "Legal documents", to: "/pages/legal" },
                    { heading: "Regulation", to: "/pages/regulation" },
                    {
                      heading: "Client Insurance Policy",
                      to: "/pages/insurance",
                    },
                    { heading: "Careers", to: "/pages/careers" },
                    { heading: "Contact Us", to: "/pages/contact" },
                  ].map((value, idx) => (
                    <Link
                      href={value.to}
                      key={idx}
                      className="hover:text-blue-500 text-base font-semibold transition hover:cursor-pointer text-white/70"
                    >
                      {value.heading}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectedNav === "Partnership" && (
            <div
              className={`backdrop-blur-lg bg-[#141a30]/50 p-6 shadow flex justify-center font-pt border-[#dbdce922] border ${
                strecth ? "w-full" : "w-full"
              }`}
            >
              <div className="grid grid-cols-3 grid-flow-col justify-between text-sm gap-x-6 w-full">
                <div className="flex flex-col col-span-2 text-base justify-center items-start ml-10">
                  <div className="flex justify-end">
                    <h4 className="text-[#646a80] font-bold pb-2 text-2xl">
                      Earn More As A CPA Partner
                    </h4>
                  </div>
                  <p className="">
                    Partner with Moneta Markets and earn up to $800 CPA
                  </p>
                  <div className="flex flex-col justify-start pt-5">
                    <Link href={"/"} className="text-blue-500 underline">
                      Find out more
                    </Link>
                  </div>
                </div>
                <div className={`flex flex-col gap-2 px-4 w-fit`}>
                  <span className="text-[#646a80] text-lg font-mono mb-1 font-thin">
                    REFER AND EARN
                  </span>
                  {[
                    {
                      heading: "Introducing Broker",
                      to: "/pages/partnership/ib",
                    },
                    { heading: "CPA affiliate", to: "/pages/partnership/cpa" },
                    { heading: "Hybrid", to: "/pages/partnership/hybrid" },
                    {
                      heading: "Affiliate Login",
                      to: "/pages/partnership/affiliate-login",
                    },
                    {
                      heading: "Hybrid Login",
                      to: "/pages/partnership/hybrid-login",
                    },
                    { heading: "IB Login", to: "/pages/partnership/ib-login" },
                    {
                      heading: "Partnership FAQ",
                      to: "/pages/partnership/faq",
                    },
                  ].map((value, idx) => (
                    <Link
                      href={value.to}
                      key={idx}
                      className="hover:text-blue-500 text-base font-semibold transition hover:cursor-pointer text-white/70"
                    >
                      {value.heading}
                    </Link>
                  ))}
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
