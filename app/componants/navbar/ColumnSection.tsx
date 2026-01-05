import Image from "next/image";
import {
  CalendarDays,
  LineChart,
  CandlestickChart,
  Monitor,
  BarChart3,
  HandCoins,
} from "lucide-react";

/* ================= FEATURES DATA ================= */
const features = [
  {
    icon: CalendarDays,
    title: "Premium Economic Calendar",
    desc: "Start trading news like the pros with our pro economic calendar",
  },
  {
    icon: LineChart,
    title: "Technical Views",
    desc: "Access live trading setups based on pattern recognition and expert analysis.",
  },
  {
    icon: CandlestickChart,
    title: "Alpha EA",
    desc: "Unlock live trading ideas with three EA for your MT4 and MT5 platform.",
  },
  {
    icon: Monitor,
    title: "AI Market Buzz",
    desc: "Gain live market moving insights of over 35,000 tradable assets",
  },
  {
    icon: BarChart3,
    title: "Forex Signals",
    desc: "Access daily forex trading ideas and technical setups in real-time",
  },
  {
    icon: HandCoins,
    title: "Cashback Bonus",
    desc: "Get a 50% Cashback Bonus that converts to cash when you trade",
    popular: true,
  },
];

export default function ImproveTradings() {
  return (
    <main className="bg-[#050b1e] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-b from-[#050b1e] to-[#070f2b] pt-24 pb-28">
        <div className="relative z-10 mx-auto max-w-5xl text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Improve your Trading with a Range of{" "}
            <span className="text-gray-300">Exclusive</span>
            <br />
            Trading Tools
          </h1>
        </div>

        {/* Bent Image */}
        <div className="relative mt-24 flex justify-center">
          <div className="relative w-[90%] max-w-6xl perspective-[1200px]">
            <div
              className="
                relative
                overflow-hidden
                rounded-t-2xl
                [clip-path:polygon(0_8%,100%_0,100%_100%,0_100%)]
                transform
                rotateX-[8deg]
              "
            >
              <Image
                src="/d7587b18-3112-4afc-a4f1-fe947a9b5a2d.png"
                alt="Trading Platform"
                width={1600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Glow */}
            <div className="absolute inset-x-0 -bottom-24 h-48 bg-blue-600/20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="bg-gradient-to-b from-[#070f2b] to-[#050b1e] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-x-16 gap-y-20 md:grid-cols-2 lg:grid-cols-3">

            {features.map((f, i) => (
              <div
                key={f.title}
                className="group animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-4 w-9 h-9 text-blue-500 transition-all duration-300 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">
                  <f.icon className="w-full h-full" />
                </div>

                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">
                    {f.title}
                  </h3>
                  {f.popular && (
                    <span className="rounded-full bg-red-500 px-3 py-0.5 text-xs font-medium text-white">
                      Popular
                    </span>
                  )}
                </div>

                <p className="mt-3 text-gray-400 leading-relaxed max-w-sm">
                  {f.desc}
                </p>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-blue-500 transition hover:text-blue-400"
                >
                  Find out more
                  <span className="transition group-hover:translate-x-1">›</span>
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= GLOBAL STYLES ================= */}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>

    </main>
  );
}
