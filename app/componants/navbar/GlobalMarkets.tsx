"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GlobalMarkets() {
  const cards = [
    {
      title: "Calendrier économique",
      description:
        "Commencez à trader les actualités comme les pros grâce à notre calendrier économique professionnel.",
      outputs: [
        "Événements économiques mondiaux en temps réel",
        "Filtrage des actualités à fort impact",
        "Analyses avancées de synchronisation du marché",
      ],
    },
    {
      title: "Analyses techniques",
      description:
        "Accédez à des configurations de trading en direct basées sur la reconnaissance de motifs et l'analyse d'experts.",
      outputs: [
        "Analyse technique professionnelle",
        "Configurations basées sur la reconnaissance de motifs",
        "Idées de trading exploitables",
      ],
    },
    {
      title: "Alpha EA",
      description:
        "Déverrouillez des idées de trading en direct avec trois Expert Advisors pour MT4 et MT5.",
      outputs: [
        "Trois EAs automatisés puissants",
        "Compatibilité MT4 & MT5",
        "Signaux de trading algorithmiques en direct",
      ],
    },
    {
      title: "Tendances du marché par IA",
      description:
        "Obtenez des insights en direct qui font bouger le marché sur des milliers d'actifs négociables.",
      outputs: [
        "Analyse de sentiment par IA",
        "Couverture de plus de 35 000 actifs",
        "Alertes de tendances du marché en temps réel",
      ],
    },
    {
      title: "Signaux Forex",
      description:
        "Accédez à des idées de trading forex quotidiennes et à des configurations techniques en temps réel.",
      outputs: [
        "Signaux de trading quotidiens",
        "Points d'entrée et de sortie techniques",
        "Mises à jour des signaux en temps réel",
      ],
    },
    {
      title: "Bonus Cashback",
      description:
        "Recevez un bonus de cashback de 50% qui se convertit en argent réel au fur et à mesure de vos trades.",
      outputs: [
        "50% de cashback sur le volume de trading",
        "Le bonus se convertit en argent retirable",
        "Suivi automatique des récompenses",
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
        <div className="mb-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">
          <div
            className="absolute left-0 bottom-10 md:w-[400px] w-[300px] h-[300px] left-1/3
              bg-blue-700/70 blur-[120px] rounded-full"
          ></div>
          {cards.slice(0, 2).map((card, index) => (
            <div
              key={index}
              className={`${index <= 1 && "w-full"} flex  mx-auto ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
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
                rounded-2xl p-6 hover:-translate-y-2 transition duration-300 w-100
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
            </div>
          ))}
        </div>
        <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 relative w-5/6 mx-auto">
          <div
            className="absolute bottom-10 md:w-[200px] w-[150px] h-[300px] left-0
              bg-blue-700/70 blur-[120px] rounded-full"
          ></div>
          {cards.slice(2, 4).map((card, index) => (
            <div
              key={index}
              className={`w-11/12 flex  mx-auto ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } `}
            >
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
                rounded-2xl p-6 hover:-translate-y-2 transition duration-300 w-100
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
            </div>
          ))}
        </div>

        <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-4/6 mx-auto">
          {cards.slice(0, 2).map((card, index) => (
            <div
              key={index}
              className={`w-full flex  mx-auto ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } `}
            >
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
                rounded-2xl p-6 hover:-translate-y-2 transition duration-300 w-110
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
