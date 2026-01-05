
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/apptrader-1.png",
  "/apptrader-2.png",
  "/apptrader-3.png",
  "/apptrader-4.png",
];

export default function AppTraderHero() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050812] via-[#071a3a] to-[#050812]">
      <div className="absolute right-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          <div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Access Global Markets on the <span className="text-white/70">go</span>
              <br />with AppTrader
            </h1>

            <p className="mt-6 max-w-xl text-white/70">
              Trade 1000+ instruments globally using Moneta Markets AppTrader.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {[
                "Advanced Charting",
                "Custom Watchlists",
                "Lightning Fast Trading",
                "Fast & Easy Deposits",
              ].map((label, index) => (
                <button
                  key={label}
                  onClick={() => setActiveImage(index)}
                  className={`rounded-full border px-5 py-3 text-sm backdrop-blur transition
                    ${
                      activeImage === index
                        ? "border-blue-500 bg-blue-500/20 text-white"
                        : "border-white/15 bg-white/5 text-white/70 hover:text-white"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end overflow-hidden">
            <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] h-[720px]">

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -60 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[activeImage]}
                    alt="AppTrader App Screen"
                    fill
                    className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


