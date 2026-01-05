"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  number: string;
  question: string;
  answer: string;
}

export const FAQForTrading: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      number: "01",
      question: "Qu'est-ce que Trade002 ?",
      answer:
        "Trade001 est une plateforme de trading CFD sécurisée et conviviale offrant un accès au Forex, Crypto, Indices, ETFs. Elle est conçue pour les traders débutants et professionnels.",
    },
    {
      id: 2,
      number: "02",
      question: "Qu'est-ce que les CFD ?",
      answer:
        "Un CFD, ou Contrat sur Différence, est un accord financier permettant aux traders de profiter des mouvements de prix d'un actif sans le posséder. Les traders peuvent aller long ou short selon la direction du marché.",
    },
    {
      id: 3,
      number: "03",
      question: "Comment l'IA peut-elle aider une entreprise ?",
      answer:
        "L'IA aide les entreprises en automatisant les tâches routinières, en fournissant des insights basés sur les données pour une meilleure prise de décision, en personnalisant les expériences client, en améliorant l'efficacité opérationnelle, en réduisant les coûts, en prédisant les tendances du marché, en améliorant les recommandations de produits, en optimisant les chaînes d'approvisionnement, en détectant la fraude, et en permettant un support client 24/7 via des chatbots et des assistants virtuels.",
    },
    {
      id: 4,
      number: "04",
      question: "Trade002 est-il sécurisé et sûr ?",
      answer:
        "Oui, Trade001 utilise des protocoles de sécurité avancés pour protéger vos fonds et vos données personnelles tout en offrant un environnement de trading fiable.",
    },
    {
      id: 5,
      number: "05",
      question: "Quels marchés puis-je trader sur 002 ?",
      answer:
        "Vous pouvez trader du Forex, Crypto, Indices, ETFs depuis une plateforme unique et facile à utiliser.",
    },
    {
      id: 6,
      number: "06",
      question: "Trade002 offre-t-il l'exécution des trades ?",
      answer:
        "Trade001 garantit une exécution ultra-rapide pour que vous puissiez saisir les opportunités du marché sans délai.",
    },
    {
      id: 7,
      number: "07",
      question: "Les débutants peuvent-ils trader sur 002 ?",
      answer:
        "Absolument. La plateforme est conçue pour les traders de tous niveaux d'expérience, avec des ressources éducatives et un support expert 24/7.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="py-10 px-8 relative">
      <div
        className="absolute right-0 top-10 md:w-[400px] w-[300px] h-[300px] 
              bg-blue-700/70 blur-[120px] rounded-full"
      ></div>
      <div
        className="absolute left-0 bottom-10 md:w-[400px] w-[300px] h-[300px] 
              bg-blue-700/40 blur-[120px] rounded-full"
      ></div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20  rounded-2xl shadow-lg bg-[#06122A] flex items-center justify-center transform rotate-12">
                  <div className="w-8 h-8 bg-blue-500 rounded"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#06122A] rounded-full opacity-80"></div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl md:text-5xl font-semibold text-white/80 mb-4">
            FAQ sur le Trading
          </h2>
        </div>

        <div className="space-y-4 flex justify-center items-center flex-col w-2/3 mx-auto">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border-b last:border-b-0 border-gray-500 pb-4 w-full"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-start justify-between py-4 text-left hover:opacity-70 transition group hover:cursor-pointer"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-white/70 font-semibold text-lg">
                    {item.number}
                  </span>
                  <h3 className="text-xl font-normal text-white/90 flex-1 group-hover:translate-x-2 transition-transform duration-400">
                    {item.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 transition-transform shrink-0 ml-4 group-hover:-translate-x-2 duration-400 ${
                    openItem === item.id ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openItem === item.id && (
                <div className="ml-12 mt-2 pr-10">
                  <p className="text-white/70 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
