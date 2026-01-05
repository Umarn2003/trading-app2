"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GlobalMarkets() {
  const cards = [
    {
      title: "Trading Sécurisé",
      description: "Une sécurité avancée protège vos fonds et vos données.",
      outputs: [
        "Chiffrement des données de bout en bout",
        "Protection de compte multi-couches",
        "Systèmes de garde de fonds sécurisés",
      ],
    },
    {
      title: "Exécution Rapide",
      description:
        "Placez des ordres instantanément avec une exécution à haute vitesse.",
      outputs: [
        "Traitement à latence ultra-faible",
        "Confirmations instantanées",
        "Infrastructure optimisée",
      ],
    },
    {
      title: "Marchés Mondiaux",
      description:
        "Accédez au Forex, Crypto, Indices, ETFs en un seul endroit.",
      outputs: [
        "Accès multi-actifs",
        "Connectivité mondiale",
        "Tableau de bord unifié",
      ],
    },
    {
      title: "Informations en Temps Réel",
      description:
        "Négociez plus intelligemment en utilisant des données de marché en direct et des analyses.",
      outputs: [
        "Graphiques et flux en direct",
        "Analyses avancées",
        "Indicateurs personnalisés",
      ],
    },
    {
      title: "Support 24/7",
      description:
        "Obtenez une aide experte à tout moment dont vous avez besoin.",
      outputs: [
        "Assistance toujours disponible",
        "Chat en direct et tickets",
        "Spécialistes dédiés",
      ],
    },
  ];

  const duplicatedCards = [...cards, ...cards];

  return (
    <section className="bg-black text-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto ">
          <h2 className="text-2xl md:text-5xl font-semibold bg-linear-to-br from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text">
            Avantages du Trading CFD
          </h2>
          <p className="text-white/60 mt-4 md:text-lg text-sm">
            Fonctionnalités puissantes conçues pour les traders modernes.
          </p>
        </div>

        <div className="mt-16 overflow-hidden relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-24 
    bg-linear-to-r from-black via-black/70 to-transparent z-10"
          />

          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-24 
    bg-linear-to-l from-black via-black/80 to-transparent z-10"
          />

          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedCards.map((card, index) => (
              <div
                key={index}
                className="
          min-w-[320px] md:w-120 rounded-2xl p-8
          bg-linear-to-br from-yellow-400/85 via-black/60 to-yellow-400/85
          backdrop-blur-lg border border-white/30
          shadow-lg
        "
              >
                <p className="text-sm opacity-60">
                  {String((index % cards.length) + 1).padStart(2, "0")}
                </p>

                <h3 className="text-2xl text-yellow-400 font-semibold mt-3 mb-4">
                  {card.title}
                </h3>

                <p className="text-white/80 mb-6">{card.description}</p>

                <ul className="space-y-2 text-sm">
                  {card.outputs.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-yellow-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
