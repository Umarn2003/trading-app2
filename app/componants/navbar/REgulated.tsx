"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function RegulationAndPartners() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen flex"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="rotating-circle w-250 h-250 rounded-full border-8 border-white/10" />
        <div className="absolute w-175 h-175 rounded-full border-8 border-white/5" />
        <div className="absolute h-[80dvh] w-[80dvh] rounded-full blur-[120px] bg-blue-500/40 -bottom-2/3 shadow-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 my-auto text-white">
        <h2 className="text-3xl font-medium md:text-5xl text-center pb-28">
          Financial Regulation
        </h2>
        <div className="justify-between grid md:grid-cols-2 gap-24">
          <div
            className={`transition-all duration-1000 ease-out text-center w-5/6 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
            }`}
          >
            <h2 className="text-5xl text-blue-500 mb-8">We’re Regulated</h2>
            <p className="text-white/70 text-lg md:text-xl leading-loose ">
              Moneta Markets operates in accordance with the financial
              regulations and compliance standards outlined by the SLIBC (Reg.
              No. 2023-00068) and FSCA (Reg. No. 47490).
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-150 ease-out text-center w-5/6 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
            }`}
          >
            <h2 className="text-5xl mb-8 text-blue-500">You’re Protected</h2>
            <p className="text-white/70 text-lg leading-loose md:text-xl">
              Client funds are held in a segregated account with an AA-Rated
              Global Bank and trading accounts have negative balance protection.
              We are subject to regular audits and have comprehensive indemnity
              insurance.
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes rotateSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .rotating-circle {
          animation: rotateSlow 90s linear infinite;
        }
      `}</style>
    </section>
  );
}
