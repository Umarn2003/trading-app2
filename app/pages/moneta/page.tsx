"use client";

import NeonThumbsUp from "@/app/componants/navbar/Cashbacksection";
import TradeandEarn from "@/app/componants/navbar/Cashbacksection";
import ImproveTradings from "@/app/componants/navbar/ColumnSection";
import ImproveTrading from "@/app/componants/navbar/ColumnSection";
import HowTrade from "@/app/componants/navbar/ConetentSection";
import AppTraderHero from "@/app/componants/navbar/FeaturedTrading";
import GlobalMarkets from "@/app/componants/navbar/GlobalMarkets";
import TradingTabs from "@/app/componants/navbar/GlobalMarkets";
import MonetaHero from "@/app/componants/navbar/MonetaHero";
import RegulationAndPartners from "@/app/componants/navbar/REgulated";
import ThreeSteps from "@/app/componants/navbar/ThreeStages";
import TrustSection from "@/app/componants/navbar/TradersTrade";
import { useState } from "react";

const tabs = ["Forex", "Indices", "Commodities", "Share CFDs", "ETFs"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Forex");

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#020617] to-[#020617]/90 text-white px-6 py-16">
        <div>
        <MonetaHero/>
        </div>
      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Trade Global Markets{" "}
          <span className="text-gray-400">at the Lowest Costs!</span>
        </h1>
        <p className="mt-6 text-gray-400 text-lg">
          Gain fast and easy access to 1000+ instruments with{" "}
          <span className="text-white font-medium">
            PRIME ECN spreads from 0.0 pips!
          </span>
        </p>
      </div>

      {/* TABS */}
      <div className="relative max-w-5xl mx-auto mt-16">
        <div className="flex justify-between text-gray-400 text-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-4 transition-colors ${
                activeTab === tab ? "text-white" : "hover:text-white"
              }`}
            >
              {tab}

              {/* ACTIVE BLUE LINE */}
              {activeTab === tab && (
                <span className="absolute left-0 -bottom-[2px] h-[3px] w-full bg-blue-600 transition-all duration-300" />
              )}
            </button>
          ))}
        </div>
        <div className="h-px bg-gray-700" />
      </div>

      {/* TABLE PLACEHOLDER */}
      <div
        key={activeTab}
        className="max-w-5xl mx-auto mt-10 animate-[slideUp_0.5s_ease-out]"
      >
        <div className="rounded-xl border border-dashed border-gray-600 bg-[#020617]/80 p-10 text-center">
          <p className="text-gray-400 text-lg">
            Paste <span className="text-white font-medium">{activeTab}</span>{" "}
            real-time trading table embed code here
          </p>

          {/* 👇 PLACE YOUR ONLINE REAL-TIME TABLE HERE */}
          {/* Example:
              <iframe src="YOUR_TABLE_LINK" />
              OR
              <script src="YOUR_WIDGET_SCRIPT"></script>
          */}
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div>
        <GlobalMarkets/>
        </div>
        <div>
  <RegulationAndPartners/>
        </div>
      
        {/* <div>
           <ImproveTradings/>
        </div> */}
        <div>
            <TradeandEarn/>
        </div>
        <div>
            <HowTrade/>
        </div>
        {/* <div>
            <AppTraderHero/>
       </div> */}
       <div>
        <TrustSection/>
         </div> 
         {/* <div>
            <ThreeSteps/>
         </div> */}
    </main>
  );
}
