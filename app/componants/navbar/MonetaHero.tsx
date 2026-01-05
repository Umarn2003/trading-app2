"use client";

import { useEffect, useRef, useState } from "react";
import {
  Activity,
  Award,
  Brain,
  ChartCandlestick,
  Globe,
  HandFist,
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Trading Sécurisé",
      desc: "Une sécurité avancée protège vos fonds et vos données en permanence.",
      icon: ChartCandlestick,
    },
    {
      title: "Exécution Rapide",
      desc: "Placez des ordres instantanément avec une exécution à haute vitesse.",
      icon: Activity,
    },
    {
      title: "Informations en Temps Réel",
      desc: "Négociez plus intelligemment en utilisant des données de marché en direct et des analyses.",
      icon: Brain,
    },
    {
      title: "Marchés Mondiaux",
      desc: "Accédez au Forex, Crypto, Indices, ETFs en un seul endroit.",
      icon: Globe,
    },
    {
      title: "Compétition Mensuelle",
      desc: "Participez à des compétitions mensuelles gratuites et concourez pour des récompenses exclusives.",
      icon: Award,
    },
    {
      title: "Support 24/7",
      desc: "Obtenez une aide experte à tout moment dont vous avez besoin.",
      icon: HandFist,
    },
  ];

  const cardsRef = useRef<(HTMLDivElement | null)[]>(new Array(benefits.length).fill(null));
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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-black py-32">
      <h2 className="text-2xl md:text-5xl text-center mb-16 bg-linear-to-br font-semibold from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text">
        Votre ALLIÉ CFD
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-1">
          <h3 className="text-xl md:text-4xl font-bold bg-linear-to-br from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text leading-tight mb-6">
            Points <br /> Clés
          </h3>

          <p className="text-white/70 mb-10 max-w-sm">
            Boostez votre succès de trading avec FundedNext et obtenez la
            récompense maximale.
          </p>

          <div className="space-y-4 text-white/80">
            <p>• Commissions faibles</p>
            <p>• Spreads bruts</p>
            <p>• Meilleurs forfaits</p>
            <p>• Abordable</p>
          </div>
        </div>

        {/* CARDS */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-16">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            const isVisible = visibleCards.includes(i);

            return (
              <div
                key={i}
                ref={(el) => { cardsRef.current[i] = el; }}
                data-index={i}
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`transform transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-14"
                  }`}
              >
                <div
                  className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center
                  bg-linear-to-br from-black/60 to-black/20
                  shadow-[0_0_30px_rgba(234,179,8,0.35)]"
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3 bg-linear-to-br from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text">
                  {item.title}
                </h3>

                <p className="text-white/60 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
