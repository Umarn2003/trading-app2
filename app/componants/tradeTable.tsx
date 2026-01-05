"use client";
import React, { useState } from "react";

const tabs = ["Forex", "Indices", "Commodities", "Share CFDs", "ETFs"];
const marketData = {
  forex: [
    {
      name: "EUR/USD",
      code: "EURUSD",
      bid: 1.169,
      ask: 1.169,
      spread: 0.1,
      change: -0.04,
      trend: "down",
    },
    {
      name: "GBP/USD",
      code: "GBPUSD",
      bid: 1.343,
      ask: 1.343,
      spread: 0.1,
      change: 0.0,
      trend: "down",
    },
    {
      name: "AUD/USD",
      code: "AUDUSD",
      bid: 0.668,
      ask: 0.668,
      spread: 0.3,
      change: -0.02,
      trend: "down",
    },
    {
      name: "USD/JPY",
      code: "USDJPY",
      bid: 157.039,
      ask: 157.043,
      spread: 0.4,
      change: 0.03,
      trend: "up",
    },
    {
      name: "EUR/GBP",
      code: "EURGBP",
      bid: 0.87,
      ask: 0.87,
      spread: 0.0,
      change: 0.0,
      trend: "up",
    },
    {
      name: "USD/CAD",
      code: "USDCAD",
      bid: 1.378,
      ask: 1.378,
      spread: 0.0,
      change: 0.01,
      trend: "up",
    },
  ],

  indices: [
    {
      name: "S&P 500",
      code: "SPX",
      bid: 4500.5,
      ask: 4501.0,
      spread: 0.5,
      change: 0.12,
      trend: "up",
    },
    {
      name: "Dow Jones",
      code: "DJI",
      bid: 35000.25,
      ask: 35001.0,
      spread: 0.75,
      change: -0.08,
      trend: "down",
    },
    {
      name: "NASDAQ",
      code: "NDX",
      bid: 14000.1,
      ask: 14001.0,
      spread: 0.9,
      change: 0.05,
      trend: "up",
    },
  ],

  commodities: [
    {
      name: "Gold",
      code: "XAUUSD",
      bid: 1925.5,
      ask: 1926.0,
      spread: 0.5,
      change: 0.1,
      trend: "up",
    },
    {
      name: "Silver",
      code: "XAGUSD",
      bid: 24.5,
      ask: 24.55,
      spread: 0.05,
      change: -0.03,
      trend: "down",
    },
    {
      name: "Crude Oil",
      code: "WTI",
      bid: 75.1,
      ask: 75.2,
      spread: 0.1,
      change: 0.02,
      trend: "up",
    },
  ],

  "share cfds": [
    {
      name: "Apple",
      code: "AAPL",
      bid: 180.5,
      ask: 180.55,
      spread: 0.05,
      change: 0.15,
      trend: "up",
    },
    {
      name: "Tesla",
      code: "TSLA",
      bid: 720.3,
      ask: 720.6,
      spread: 0.3,
      change: -0.1,
      trend: "down",
    },
    {
      name: "Amazon",
      code: "AMZN",
      bid: 3300.75,
      ask: 3301.5,
      spread: 0.75,
      change: 0.05,
      trend: "up",
    },
  ],

  etfs: [
    {
      name: "SPDR S&P 500 ETF",
      code: "SPY",
      bid: 450.2,
      ask: 450.3,
      spread: 0.1,
      change: 0.08,
      trend: "up",
    },
    {
      name: "NASDAQ 100 ETF",
      code: "QQQ",
      bid: 360.5,
      ask: 360.6,
      spread: 0.1,
      change: -0.02,
      trend: "down",
    },
    {
      name: "Gold ETF",
      code: "GLD",
      bid: 192.5,
      ask: 192.55,
      spread: 0.05,
      change: 0.12,
      trend: "up",
    },
  ],
};

export default function TradeTable() {
  const [activeTab, setActiveTab] = useState("Forex");
  return (
    <div className="bg-transparent py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold tracking-tight text-white  bg-clip-text">
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
      <div className="relative max-w-4xl mx-auto mt-16">
        <div className="flex justify-around text-gray-400 text-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative w-3/4 pb-4 transition-colors hover:cursor-pointer ${
                activeTab === tab ? "text-white" : "hover:text-white"
              }`}
            >
              {tab}

              {/* ACTIVE BLUE LINE */}
              {activeTab === tab && (
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-600 transition-all duration-300" />
              )}
            </button>
          ))}
        </div>
        <div className="h-px bg-gray-700" />
      </div>

      {/* TABLE PLACEHOLDER */}
      <div
        key={activeTab}
        className="max-w-4xl mx-auto mt-10 animate-[slideUp_0.5s_ease-out]"
      >
        <div className="rounded-xl border border-gray-600 bg-[#020617]/40 p-10 text-center">
          <table className="w-full">
            <thead className="text-base text-white/60 font-light border-b border-gray-700">
              <tr className="flex justify-around">
                <th className="font-normal py-3">Name</th>
                <th className="font-normal py-3">Bid</th>
                <th className="font-normal py-3">Spread</th>
                <th className="font-normal py-3">Ask</th>
                <th className="font-normal py-3">% Change</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {marketData[
                activeTab.toLowerCase() as keyof typeof marketData
              ].map((data, idx) => (
                <tr
                  key={idx}
                  className="flex justify-around py-4 text-white border-b border-gray-700 last:border-b-0"
                >
                  <td className="flex-1 text-center">{data.name}</td>
                  <td
                    className={`flex-1 text-center ${
                      idx % 2 === 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {data.bid}
                  </td>
                  <td className="flex-1 text-center">{data.spread}</td>
                  <td
                    className={`flex-1 text-center ${
                      idx % 3 === 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {data.ask}
                  </td>
                  <td
                    className={`flex-1 text-center ${
                      idx % 4 === 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {data.change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
    </div>
  );
}
