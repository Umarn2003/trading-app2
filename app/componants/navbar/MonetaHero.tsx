"use client";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  Award,
  Brain,
  TrendingUp,
  Globe,
  Headphones,
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Trading Sécurisé",
      desc: "Une sécurité avancée protège vos fonds et vos données en permanence.",
      icon: TrendingUp,
      linear: "from-blue-500 via-blue-600 to-indigo-600",
    },
    {
      title: "Exécution Rapide",
      desc: "Placez des ordres instantanément avec une exécution à haute vitesse.",
      icon: Activity,
      linear: "from-cyan-500 via-teal-500 to-emerald-500",
    },
    {
      title: "Informations en Temps Réel",
      desc: "Négociez plus intelligemment en utilisant des données de marché en direct.",
      icon: Brain,
      linear: "from-violet-500 via-purple-500 to-fuchsia-500",
    },
    {
      title: "Marchés Mondiaux",
      desc: "Accédez au Forex, Crypto, Indices, ETFs en un seul endroit.",
      icon: Globe,
      linear: "from-amber-500 via-orange-500 to-red-500",
    },
    {
      title: "Compétition Mensuelle",
      desc: "Participez à des compétitions mensuelles et concourez pour des récompenses.",
      icon: Award,
      linear: "from-pink-500 via-rose-500 to-red-500",
    },
    {
      title: "Support 24/7",
      desc: "Obtenez une aide experte à tout moment dont vous avez besoin.",
      icon: Headphones,
      linear: "from-green-500 via-emerald-500 to-teal-500",
    },
  ];

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-32 bg-linear-to-b from-slate-950 via-blue-950/20 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-4 text-white">
            Votre ALLIÉ CFD
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-blue-500">
                Points Clés
              </h3>

              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Boostez votre succès de trading avec FundedNext et obtenez la
                récompense maximale.
              </p>

              <div className="space-y-4">
                {[
                  "Commissions faibles",
                  "Spreads bruts",
                  "Meilleurs forfaits",
                  "Abordable",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500 group-hover:scale-150 transition-transform" />
                    <p className="text-white/80 group-hover:text-white transition-colors text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              const isVisible = visibleCards.includes(i);

              return (
                <div
                  key={i}
                  ref={(el) => {
                    cardsRef.current[i] = el;
                  }}
                  data-index={i}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  className={`transform transition-all duration-700 bg-[#141a30] ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="group h-full bg-[#141a30] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl cursor-pointer relative overflow-hidden">
                    <div className={`absolute inset-0 rounded-2xl`} />

                    <div
                      className={`relative w-16 h-16 rounded-2xl mb-6 flex items-center justify-center  shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <Icon className="w-8 h-8 text-white relative z-10" />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:bg-white/30 transition-colors" />
                    </div>

                    <h3
                      className={`text-xl font-bold mb-4 text-blue-500 group-hover:scale-105 transition-transform origin-left`}
                    >
                      {item.title}
                    </h3>

                    <p className="text-white/60 text-base leading-relaxed group-hover:text-white/80 transition-colors">
                      {item.desc}
                    </p>

                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <button className="group relative px-8 py-4 rounded-full text-white bg-blue-500 hover:bg-blue-800 cursor-pointer font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Commencer Maintenant</span>
            <div className="absolute inset-0 rounded-full duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
