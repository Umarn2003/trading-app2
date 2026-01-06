"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Access up to",
    highlight: "1000:1",
    subtitle: "Leverage on Gold",
    image: "/1.png",
  },
  {
    title: "Trade",
    highlight: "Forex",
    subtitle: "With Tight Spreads",
    image: "/2.png",
  },
  {
    title: "Invest in",
    highlight: "Crypto",
    subtitle: "24/7 Global Market",
    image: "/3.png",
  },
  {
    title: "Get your",
    highlight: "Cash back",
    subtitle: "with bonus",
    image: "/4.png",
  },
];

const SLIDE_DURATION = 5000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const safeActive = active % slides.length;

  useEffect(() => {
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setActive((prev) => (prev + 1) % slides.length); // :white_check_mark: FIXED
          return 0;
        }
        return p + 2;
      });
    }, SLIDE_DURATION / 50);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex justify-center border-b">
      <div className="max-w-7/12 w-full mx-auto my-auto grid lg:grid-cols-2 items-center">
        <div key={safeActive} className="space-y-6 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            {slides[safeActive].title}
            <br />
            {slides[safeActive].highlight}
            <br />
            {slides[safeActive].subtitle}
          </h1>
          <button className="bg-blue-600 hover:bg-blue-800 transition text-white px-6 py-3 rounded-md font-semibold shadow-lg">
            Start Trading
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div key={safeActive} className="animate-slideFromRight">
            <Image
              src={slides[safeActive].image}
              alt="Hero slide"
              width={420}
              height={420}
              className="object-cover drop-shadow-blue-700 drop-shadow-2xl h-[50dvh]"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 absolute bottom-7">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative w-14 h-1.5 bg-blue-900/60 rounded-full overflow-hidden"
          >
            <span
              className="absolute left-0 top-0 h-full bg-blue-500 transition-all"
              style={{ width: i === safeActive ? `${progress}%` : "0%" }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
