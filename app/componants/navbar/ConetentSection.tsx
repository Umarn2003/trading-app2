import Image from "next/image";

export default function HowTrade() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#050b1e] to-[#020617] text-white">
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-center text-6xl md:text-7xl font-bold mb-16 mt-46">
          Learn How to Trade the Market in Both Directions
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          <div>
            <h3 className="text-xl text-center font-bold mb-4">
              Market price goes higher
            </h3>

            <div className="relative w-full aspect-4/3 rounded-xl border border-[#dbdce922] bg-white/5 overflow-hidden">
              <Image
                src="/tradingup.jpg"
                alt="Market goes up"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center space-y-6">
            <p className="text-gray-400 text-xl leading-relaxed">
              All Moneta Markets clients are able to profit from the bullish and
              bearish moves of 1000+ tradable instruments, such as Forex, Share
              CFDs, Indices, Commodities and more.
            </p>

            <p className="font-bold text-xl">
              Profit from both up and down market cycles with Moneta Markets!
            </p>

            <button className="mt-14 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-bold">
              Learn how to trade
            </button>
          </div>

          <div>
            <h3 className="text-xl text-center font-bold mb-4">
              Market price goes lower
            </h3>

            <div className="relative w-full aspect-[4/3] rounded-xl border border-[#dbdce922] bg-white/5 overflow-hidden">
              <Image
                src="/tradingdown.jpg"
                alt="Market goes down"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
