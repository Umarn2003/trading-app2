"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Send,
} from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Formulaire soumis avec succès :rocket:");
    }, 1500);
  };

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row">
      <div
        className="absolute right-0 bottom-10 md:w-[400px] w-[300px] h-[300px] 
              bg-blue-700/70 blur-[120px] rounded-full"
      ></div>
      {/* LEFT PANEL
      <div className="md:w-2/5 p-10 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl" />

        <h2 className="md:text-4xl text-2xl font-bold mb-4 leading-tight text-white/80">
          Négociez avec Confiance. <br />
          <span className="text-white/70 font-semibold">
            Parlez aux Experts du Marché de Trade002.
          </span>
        </h2>

        <p className="md:text-lg text-sm mb-10 text-blue-400 max-w-md">
          Que vous négociiez du crypto, du forex ou des actions — nos experts
          vous aident à exécuter des stratégies plus intelligentes avec
          précision et sécurité.
        </p>

        <div className="grid grid-cols-3 gap-6 mb-10">
          <div>
            <h3 className="text-2xl font-bold text-blue-400">12K+</h3>
            <p className="text-xs text-white">Commerçants Mondiaux</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-400">99.9%</h3>
            <p className="text-xs text-white">
              Temps de Fonctionnement d'Exécution
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-400">24/7</h3>
            <p className="text-xs text-white">Couverture du Marché</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-6 text-blue-400">
          Que se passe-t-il ensuite ?
        </h2>

        <div className="space-y-5 text-sm text-blue-100">
          {[
            {
              icon: <TrendingUp />,
              text: "Notre expert analyse vos objectifs de trading.",
            },
            {
              icon: <ShieldCheck />,
              text: "Vos données restent sécurisées et confidentielles.",
            },
            {
              icon: <BarChart3 />,
              text: "Vous recevez un plan de trading sur mesure.",
            },
            {
              icon: <CheckCircle />,
              text: "L'intégration commence instantanément.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="text-white/80 mt-1">{item.icon}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* RIGHT PANEL - FORM */}
      <div className="md:w-7xl mx-auto p-6 md:p-12 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-5xl h-[70vh] bg-transparent flex flex-col justify-center backdrop-blur-xl rounded-2xl border border-gray-500 shadow-2xl p-8 md:p-10"
        >
          <h3 className="text-5xl font-semibold text-blue-500 mb-16 text-center">
            Commencez Aujourd'hui
          </h3>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <input
              type="text"
              placeholder="Nom Complet"
              className="input placeholder:text-white/80 text-white px-4 py-2 rounded-3xl bg-transparent border border-gray-600"
              required
            />
            <input
              type="email"
              placeholder="Adresse Email"
              required
              className="input placeholder:text-white/80 text-white px-4 py-2 rounded-3xl bg-transparent border border-gray-600"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <input
              type="tel"
              placeholder="Numéro de Téléphone"
              className="input placeholder:text-white/80 text-white px-4 py-2 rounded-3xl bg-transparent border border-gray-600"
            />
            <select className="input placeholder:text-white/80 text-white px-4 py-2 rounded-3xl bg-transparent border border-gray-600">
              <option value="" disabled hidden>
                Type de Trading
              </option>
              <option className="text-black">Crypto</option>
              <option className="text-black">Forex</option>
              <option className="text-black">Actions</option>
              <option className="text-black">Institutionnel</option>
            </select>
          </div>

          <textarea
            rows={5}
            placeholder="Parlez-nous de vos objectifs de trading..."
            className="input placeholder:text-white/80 text-white px-4 py-4 rounded-3xl bg-transparent border border-gray-600 w-full mb-10"
          />

          <Link href="/" className="">
            <button
              type="submit"
              disabled={loading}
              className="w-60 px-10 py-2 font-semibold bg-blue-500 hover:scale-105 transition-all hover:cursor-pointertransition duration-300 hover:cursor-pointer hover:border-blue-800 rounded-lg  flex items-center justify-center gap-2"
            >
              {loading ? "Soumission..." : "Nous Contacter"}
              <Send className="w-4 h-4" />
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
}
