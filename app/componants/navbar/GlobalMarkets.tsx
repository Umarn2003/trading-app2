"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GlobalMarkets() {
  const cards = [
    {
      title: "Premium Economic Calendar",
      description:
        "Start trading news like the pros with our professional economic calendar.",
      outputs: [
        "Real-time global economic events",
        "High-impact news filtering",
        "Advanced market timing insights",
      ],
    },
    {
      title: "Technical Views",
      description:
        "Access live trading setups based on pattern recognition and expert analysis.",
      outputs: [
        "Professional technical analysis",
        "Pattern recognition setups",
        "Actionable trade ideas",
      ],
    },
    {
      title: "Alpha EA",
      description:
        "Unlock live trading ideas with three Expert Advisors for MT4 and MT5.",
      outputs: [
        "Three powerful automated EAs",
        "MT4 & MT5 compatibility",
        "Live algorithmic trade signals",
      ],
    },
    {
      title: "AI Market Buzz",
      description:
        "Gain live market-moving insights across thousands of tradable assets.",
      outputs: [
        "AI-powered sentiment analysis",
        "Coverage of 35,000+ assets",
        "Real-time market buzz alerts",
      ],
    },
    {
      title: "Forex Signals",
      description:
        "Access daily forex trading ideas and technical setups in real-time.",
      outputs: [
        "Daily trading signals",
        "Technical entry & exit points",
        "Real-time signal updates",
      ],
    },
    {
      title: "Cashback Bonus",
      description:
        "Get a 50% cashback bonus that converts into real cash as you trade.",
      outputs: [
        "50% cashback on trading volume",
        "Bonus converts to withdrawable cash",
        "Automatic reward tracking",
      ],
    },
  ];

  const duplicatedCards = [...cards, ...cards];

  return (
    <section className="bg-linear-to-b from-[#050b1e] to-[#020617] text-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-semibold text-white">
            Improve your Trading with a Range of Exclusive Trading Tools
          </h2>
        </div>

        {/* Grid Layout with Stagger Animation */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          <div
        className="absolute -left-40 bottom-10 md:w-[400px] w-[300px] h-[300px] 
              bg-blue-700/70 blur-[120px] rounded-full"
      ></div>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="
                rounded-2xl p-8 hover:-translate-y-2 transition duration-300
                bg-[#141a30]
                border border-gray-500
                shadow-lg
                hover:border-blue-500
                hover:shadow-blue-500/20
                cursor-pointer
              "
            >
              <p className="text-sm opacity-90 text-blue-500">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="text-2xl text-white/90 font-semibold mt-3 mb-4">
                {card.title}
              </h3>

              <p className="text-white/50 mb-6">{card.description}</p>

              <ul className="space-y-2 text-sm">
                {card.outputs.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-blue-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
